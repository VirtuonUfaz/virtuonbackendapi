import { Request } from "express";
import jwt from "jsonwebtoken";
const JWT_SECRET = "p5*%e4_+vo*&$5ao^hjk59asoj=2g@=ct+uap5pe@3#gq1%ei9"; // TODO: define in config level
export default function (req: Request, res, next) {
  // Get token from header
  const token = req.header("x-auth-token");
  // Check if not token
  if (!token) {
    return res.json({ status: 401, msg: "No token, authorization denied" });
  }

  // Verify token
  try {
    jwt.verify(token, JWT_SECRET || "", (error, decoded: any) => {
      if (error) {
        return res.json({ status: 401, msg: "Token is not valid" });
      } else {
        /* 
        decoded.user returns id of the user in user object:  
            user: {
                id: user.id
            }
        */
        req.body.user = decoded?.user;
        next();
      }
    });
  } catch (err) {
    console.error("something wrong with auth middleware");
    res.status(500).json({ msg: "Server Error" });
  }
}
