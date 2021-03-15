import { UserType } from ".";
import { TABLE_NAMES } from "../../config";
import knex from "../../db/connect";
// TODO: Complete UserType with all columns from DB
export const getStudentUser = async (studentID: String): Promise<UserType> =>
  await knex(TABLE_NAMES.USER_STUDENTS + " as us")
    .select("us.user_id as id", "u.is_blocked", "u.email")
    .leftJoin(TABLE_NAMES.USERS + " as u", "u.id", "us.user_id")
    .where({
      "us.student_id": studentID,
    })
    .first();
