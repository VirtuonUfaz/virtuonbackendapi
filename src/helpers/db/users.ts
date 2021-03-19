import { UserType } from ".";
import { TABLE_NAMES } from "../../config";
import knex from "../../db/connect";
export const getStudentUser = async (studentID: String): Promise<UserType> =>
  await knex(TABLE_NAMES.USER_STUDENTS + " as us")
    .select("us.user_id as id", "u.*")
    .leftJoin(TABLE_NAMES.USERS + " as u", "u.id", "us.user_id")
    .where({
      "us.student_id": studentID,
    })
    .first();

export const get = async (userId: number): Promise<UserType> =>
  await knex(TABLE_NAMES.USERS).select("*").where({ id: userId }).first();
export const setUserToken = async (
  userId: number,
  authToken: string
): Promise<number> => {
  const updateObj: Partial<UserType> = {
    auth_token: authToken,
  };
  return await knex(TABLE_NAMES.USERS).update(updateObj).where("id", userId);
};
