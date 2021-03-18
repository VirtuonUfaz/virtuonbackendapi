import { Request } from "express";
import jwt from "jsonwebtoken";

export default function (req: Request, res, next) {
  // Get token from header
  const token = req.header("x-auth-token");

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // Verify token
  try {
    jwt.verify(token, process.env.JWT_SECRET || "", (error, decoded: any) => {
      if (error) {
        return res.status(401).json({ msg: "Token is not valid" });
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
