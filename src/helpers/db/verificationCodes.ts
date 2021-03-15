import { VerificationCodeType } from ".";
import { TABLE_NAMES } from "../../config";
import knex from "../../db/connect";
export const get = async (userId: number): Promise<VerificationCodeType> =>
  await knex(TABLE_NAMES.USER_VERIFICATION_CODES)
    .select("*")
    .where("user_id", userId)
    .first();

export const create = async (
  otp: String,
  userId: number
): Promise<VerificationCodeType> =>
  await knex(TABLE_NAMES.USER_VERIFICATION_CODES).insert({
    user_id: userId,
    email_code: otp,
    created_at: knex.fn.now(),
    generation_trials: 1,
  });

export const update = async (
  otp: String,
  verificationCode: VerificationCodeType
): Promise<number> =>
  await knex(TABLE_NAMES.USER_VERIFICATION_CODES)
    .update({
      email_code: otp,
      created_at: knex.fn.now(),
      generation_trials: verificationCode.generation_trials + 1,
    })
    .where("user_id", verificationCode.user_id);

export const createOrUpdate = async (
  otp: String,
  userId: number
): Promise<VerificationCodeType> => {
  const verificationCode = await get(userId);
  if (verificationCode) {
    await update(otp, verificationCode);
    return verificationCode;
  } else {
    return await create(otp, userId);
  }
};
