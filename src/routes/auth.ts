import { Router } from "express";
import jwt from "jsonwebtoken";
import { authHelpers, dbHelpers } from "../helpers";
import knex from "../db/connect";
import { sendOtpMail } from "../helpers/auth";

const JWT_SECRET = "p5*%e4_+vo*&$5ao^hjk59asoj=2g@=ct+uap5pe@3#gq1%ei9"; // TODO: define in config level

const router = Router();

// @route    GET auth/login
// @desc     Receive an ID, send an OTP to email if exists.
// @access   Public
router.post("/check", async (req, res, next) => {
  try {
    const ID = req.body.id;
    if (!ID)
      res.json({
        status: 400,
        msg: "Query parameter 'ID' cannot be empty",
      });

    let user = await dbHelpers.usersDB.getStudentUser(ID);
    if (!user)
      //TODO: CHECK USER_TEACHERS and USER_AFFAIRS
      // check if user exists
      res.status(404).json({
        status: 404,
        msg: `User ${ID} not found`,
      });
    if (user.is_blocked)
      res.status(403).json({
        status: 403,
        msg: `User ${ID} is blocked. Please contact the platform administration`,
      });

    const otp = await authHelpers.prepareVerificationCode(user);

    sendOtpMail(otp, user.email, (result, error) => {
      if (error) {
        console.log("MAIL OTP ERROR: ", error);
        res.status(404).json({
          status: 404,
          msg: `Failed to send OTP`,
        });
      } else {
        res.status(200).json({ status: 200, msg: "Success" });
      }
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ status: 500, msg: "Internal server error" });
  }
});

// @route    POST auth/login
// @desc     Receive an OTP and an email address, send JWT if OTP is valid.
// @access   Public
router.post('/login', async (req, res, next) => {
    try {
        res.json(req.body);
        return;
        if(!req.body.OTP || !req.body.email)
            res.status(400).json({
                status: 400,
                msg: `Body parameter '${req.body.email ? 'email':'OTP'}' cannot be empty`
            })

        let user = await knex('users').where({
            email: req.query.email,
        }).first()

        if(!user) // check if user exists
            res.status(404).json({
                status: 404,
                msg: `User ${req.query.email} not found`
            })
        if(user.is_blocked)
            res.status(403).json({
                status: 403,
                msg: `User ${req.query.email} is blocked. Please contact the platform administration`
            })
        if(req.body.OTP !== user.otp)
            res.status(400).json({
                status: 400,
                msg: `OTP is invalid`
            })

        if(Math.abs(new Date().getTime() - new Date(user.otp_generated_at).getTime()) > 5 * 60 * 1000) // 5 mimutes
            res.status(400).json({
                status: 400,
                msg: `OTP is expired`
            })

        const payload = {
            user: {
                id: user.id,
                username: user.username,
                first_name: user.first_name,
                last_name: user.last_name,
                gender: user.gender,
                email: user.email,
                birth_date: user.birth_date,
                profile_picture_url: user.profile_picture_url
            }
        };

        jwt.sign(
            payload,
            JWT_SECRET,
            { expiresIn: '5 days' },
            (err, token) => {
                if (err)
                    throw err;
                res.json({ token });
            }
        );
        res.status(200).json()
    } catch (err) {
        console.error(err.message);
        res.status(500).json({status: 500, msg: "Internal server error"});
    }
})

// @route    GET api/user
// @desc     Get user by JWT.
// @access   Private
router.get("/user", (req, res, next) => {
  // TODO: Get user by JWT
  res.send("test");
});

export default router;
