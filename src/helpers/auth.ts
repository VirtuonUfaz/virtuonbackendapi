import { generate, Options } from "./otpGenerator";

export const generateOtp = () => {
  const options: Options = {
    upperCase: false,
    specialChars: false,
    digits: true,
    alphabets: false
  };
  return generate(6, options);
};
