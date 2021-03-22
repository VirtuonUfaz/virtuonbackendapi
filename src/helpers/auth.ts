import { generate, Options } from "./otpGenerator";
import nodemailer from "nodemailer";
import { validateEmail } from "./validators";
import { authHelpers, dbHelpers } from ".";
import { UserType } from "./db/types";
const virtuonEmail = "virtuon2021@gmail.com";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: virtuonEmail,
    pass: process.env.MAIL_PASSWORD,
  },
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
    from: virtuonEmail,
    to: email,
    subject: "Virtuon OTP",
    text: `Your code: ${otp}`,
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
