import { Router } from "express";
import jwt, { VerifyCallback } from "jsonwebtoken";
import { authHelpers, dbHelpers } from "../helpers";
import knex from "../db/connect";
import { sendOtpMail } from "../helpers/auth";
import { usersDB, UserType, VerificationCodeType } from "../helpers/db";
import { authMiddleware } from "../middlewares";
import { UserStudentType } from "../helpers/db/types";
const JWT_SECRET = "p5*%e4_+vo*&$5ao^hjk59asoj=2g@=ct+uap5pe@3#gq1%ei9"; // TODO: define in config level

const router = Router();

// @route    GET auth/login
// @desc     Receive an ID, send an OTP to email if exists.
// @access   Public
router.post("/check", async (req, res, next) => {
  try {
    const ID = req.body.ID;
    if (!ID)
      return res.json({
        status: 400,
        msg: "Query parameter 'ID' cannot be empty",
      });

    let user: UserType = await dbHelpers.usersDB.getByID(ID);
    if (!user) {
      //TODO: CHECK USER_TEACHERS and USER_AFFAIRS
      // check if user exists
      return res.json({
        status: 404,
        msg: `User ${ID} not found`,
      });
    }
    if (user.is_blocked) {
      return res.json({
        status: 403,
        msg: `User ${ID} is blocked. Please contact the platform administration`,
      });
    }

    const otp = await authHelpers.prepareVerificationCode(user);

    sendOtpMail(otp, user.email, (result, error) => {
      if (error) {
        console.log("MAIL OTP ERROR: ", error);
        return res.json({
          status: 404,
          msg: `Failed to send OTP`,
        });
      } else {
        return res.json({ status: 200, msg: "Success" });
      }
    });
  } catch (err) {
    console.error(err.message);
    return res.json({ status: 500, msg: "Internal server error" });
  }
});

// @route    POST auth/login
// @desc     Receive an OTP and an email address, send JWT if OTP is valid.
// @access   Public
router.post("/login", async (req, res, next) => {
  try {
    const { OTP, ID } = req.body;
    console.log("OTP: ", OTP, " ID: ", ID);
    if (!OTP || !ID) {
      return res.json({
        status: 400,
        msg: `Body parameter '${ID ? "ID" : "OTP"}' cannot be empty`,
      });
    }

    const user = await dbHelpers.usersDB.getByID(ID);
    if (!user) {
      // check if user exists
      //TODO: CHECK USER_TEACHERS and USER_AFFAIRS
      return res.json({
        status: 404,
        msg: `User ${req.query.ID} not found`,
      });
    }
    if (user.is_blocked) {
      return res.json({
        status: 403,
        msg: `User ${req.query.ID} is blocked. Please contact the platform administration`,
      });
    }

    const {
      email_code: validOTP,
      created_at,
    }: VerificationCodeType = await dbHelpers.VerificationCodesDB.get(user.id);

    if (OTP !== validOTP) {
      return res.json({
        status: 400,
        msg: `OTP is invalid`,
      });
    }

    if (
      Math.abs(new Date().getTime() - new Date(created_at).getTime()) >
      5 * 60 * 1000
    ) {
      // 5 minutes
      return res.json({
        status: 400,
        msg: `OTP is expired`,
      });
    }
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, JWT_SECRET, { expiresIn: "24h" }, async (err, token) => {
      if (err) throw err;
      await dbHelpers.usersDB.setUserToken(user.id, token || "");
      res.json({ status: 200, token });
      if (!token) {
        res.json({ msg: "Failed to create JWT" });
      }
    });
  } catch (err) {
    console.error(err.message);
    res.json({ status: 500, msg: "Internal server error" });
  }
});

// @route    GET auth/user
// @desc     Get user by JWT.
// @access   Private
router.get("/user", authMiddleware, async (req, res, next) => {
  try {
    // Get token from header
    const token = req.header("x-auth-token");
    // TODO: Get user by JWT
    const userId = req.body.user?.id;
    let user: UserType = await dbHelpers.usersDB.get(userId);

    if (!user)
      // check if user exists
      //TODO: CHECK USER_TEACHERS and USER_AFFAIRS
      return res.json({
        status: 404,
        msg: `User ${req.query.ID} not found`,
      });
    if (user.is_blocked)
      return res.json({
        status: 403,
        msg: `User ${req.query.ID} is blocked. Please contact the platform administration`,
      });
    if (user.auth_token !== token)
      return res.json({
        status: 402,
        msg: `Wrong token`,
      });

    const userPayload: UserType = { ...user, auth_token: "" };
    res.send(userPayload);
  } catch (err) {
    console.error(err.message);
    res.send("Server Error");
  }
});

// @route    GET auth/logout
// @desc     Logout.
// @access   Public
router.post("/logout", authMiddleware, async (req, res, next) => {
  try {
    // Get token from header
    const token = req.header("x-auth-token");
    // TODO: Get user by JWT
    const userId = req.body.user?.id;
    let user: UserType = await dbHelpers.usersDB.get(userId);

    if (!user) {
      // check if user exists
      //TODO: CHECK USER_TEACHERS and USER_AFFAIRS
      return res.json({
        status: 404,
        msg: `User ${req.query.ID} not found`,
      });
    }
    if (user.is_blocked) {
      return res.json({
        status: 403,
        msg: `User ${req.query.ID} is blocked. Please contact the platform administration`,
      });
    }
    if (user.auth_token !== token) {
      return res.json({
        status: 403,
        msg: `Wrong token`,
      });
    }
    await dbHelpers.usersDB.setUserToken(user.id, "");
    const userPayload: UserType = { ...user, auth_token: "" };
    res.send(userPayload);
  } catch (err) {
    console.error(err.message);
    res.send("Server Error");
  }
});

export default router;
