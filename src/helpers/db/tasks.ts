import { TypesDB } from ".";
import { TABLE_NAMES } from "../../config";
import knex from "../../db/connect";

export const get = async (
  userId: number
): Promise<Array<TypesDB.PrivateTasksType>> =>
  await knex(TABLE_NAMES.PRIVATE_TASKS).select("*").where("user_id", userId);

export const create = async (
  task: Partial<TypesDB.PrivateTasksType>
): Promise<TypesDB.PrivateTasksType> =>
  await knex(TABLE_NAMES.PRIVATE_TASKS).insert(task);

export const update = async (
  task: Partial<TypesDB.PrivateTasksType>
): Promise<number> =>
  await knex(TABLE_NAMES.PRIVATE_TASKS).update(task).where("id", task.id).andWhere("user_id",task.user_id);

export const remove = async (
    task: Partial<TypesDB.PrivateTasksType>
  ): Promise<number> =>
    await knex(TABLE_NAMES.PRIVATE_TASKS).delete().where("id", task.id).andWhere("user_id",task.user_id);