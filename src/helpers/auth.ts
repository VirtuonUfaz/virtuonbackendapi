import { generate, Options } from "./otpGenerator";
import nodemailer from "nodemailer";
import { validateEmail } from "./validators";
import { authHelpers, dbHelpers } from ".";
import { UserType } from "./db/types";
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  secure: false, 
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
  tls: { rejectUnauthorized: false }
});
export const generateOtp = (): String => {
  const options: Options = {
    upperCase: false,
    specialChars: false,
    digits: true,
    alphabets: false,
  };
  return generate(6, options);
};

export const sendOtpMail = (
  otp: String,
  email: String,
  callback: (response, error) => any
): void => {
  if (!validateEmail(email)) {
    callback && callback(null, { message: "Wrong email format" });
    return;
  }
  const mailOptions = {
    from: process.env.MAIL_USER,
    to: email,
    subject: "Virtuon OTP",
    html: 
      `<p> Dear Student, <br><br>
      The OTP is <code>${otp}</code>. It is valid for <b>5 minutes</b>. <br><br>
      Sincerely, <br>
      Virtuon</p>`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    let response = "Email sent: " + info?.response;
    callback && callback(response, error);
  });
};

export const prepareVerificationCode = async (
  user: UserType
): Promise<String> => {
  try {
    const otp = authHelpers.generateOtp();
    await dbHelpers.VerificationCodesDB.createOrUpdate(otp, user.id);
    return otp;
  } catch (err) {
    return err.toString();
  }
};
