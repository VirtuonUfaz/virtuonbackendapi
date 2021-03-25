import { TypesDB } from ".";
import { TABLE_NAMES } from "../../config";
import knex from "../../db/connect";
import { UserAffairsType, UserStudentType, UserTeacherType } from "./types";
export const getStudentUser = async (
  studentID: String
): Promise<TypesDB.UserType & TypesDB.UserStudentType> =>
  await knex(TABLE_NAMES.USER_STUDENTS + " as us")
    .select("us.*", "u.*")
    .leftJoin(TABLE_NAMES.USERS + " as u", "u.id", "us.user_id")
    .where({
      "us.student_id": studentID,
    })
    .first();

export const getTeacherUser = async (
  teacherID: String
): Promise<TypesDB.UserType & TypesDB.UserTeacherType> =>
  await knex(TABLE_NAMES.USER_TEACHERS + " as ut")
    .select("ut.*", "u.*")
    .leftJoin(TABLE_NAMES.USERS + " as u", "u.id", "ut.user_id")
    .where({
      "ut.teacher_id": teacherID,
    })
    .first();
export const getAffairsUser = async (
  affairsID: String
): Promise<TypesDB.UserType & TypesDB.UserAffairsType> =>
  await knex(TABLE_NAMES.USER_AFFAIRS + " as ua")
    .select("ua.*", "u.*")
    .leftJoin(TABLE_NAMES.USERS + " as u", "u.id", "ua.user_id")
    .where({
      "ua.affairs_id": affairsID,
    })
    .first();

export const getByID = async (
  ID: String
): Promise<
  | (TypesDB.UserType & TypesDB.UserStudentType)
  | (TypesDB.UserType & TypesDB.UserTeacherType)
  | (TypesDB.UserType & TypesDB.UserAffairsType)
> => {
  return (
    (await getStudentUser(ID)) ||
    (await getTeacherUser(ID)) ||
    (await getAffairsUser(ID))
  );
};

export const get = async (userId: number): Promise<TypesDB.UserType> =>
  await knex(TABLE_NAMES.USERS).select("*").where({ id: userId }).first();

export const setUserToken = async (
  userId: number,
  authToken: string
): Promise<number> => {
  const updateObj: Partial<TypesDB.UserType> = {
    auth_token: authToken,
  };
  return await knex(TABLE_NAMES.USERS).update(updateObj).where("id", userId);
};
