import { TypesDB } from ".";
import { TABLE_NAMES } from "../../config";
import knex from "../../db/connect";
import { NotFoundError } from "../exceptions";


export const list = async (
  userId: number
) =>   // : Promise<TypesDB.TaskType> => 
  await knex(TABLE_NAMES.TASKS)
        .leftJoin(
            TABLE_NAMES.COURSES, 
            `${TABLE_NAMES.TASKS}.course`, `${TABLE_NAMES.COURSES}.id`
        )
        .leftJoin(
            TABLE_NAMES.GROUP_COURSES, 
            `${TABLE_NAMES.COURSES}.id`, `${TABLE_NAMES.GROUP_COURSES}.course_id`
        )
        .leftJoin(
            TABLE_NAMES.GROUPS, 
            `${TABLE_NAMES.GROUP_COURSES}.group_id`, `${TABLE_NAMES.GROUPS}.id`
        )
        .leftJoin(
            TABLE_NAMES.USER_STUDENTS, 
            `${TABLE_NAMES.GROUPS}.id`, `${TABLE_NAMES.USER_STUDENTS}.group_id`
        )
        .select(`${TABLE_NAMES.TASKS}.*`)
        .where(`${TABLE_NAMES.USER_STUDENTS}.user_id`, userId)
        .orderBy(`${TABLE_NAMES.TASKS}.created_at`, "desc");

export const retrieve = async (student_id: number, id: number) => 
    await knex(TABLE_NAMES.TASKS)
            .select('*')
            .where(`${TABLE_NAMES.TASKS}.id`, id)
            .first()
            .then(task => task ?? Promise.reject(new NotFoundError))
            .then(async (task: any) => {
                task.uploads = await knex(TABLE_NAMES.TASK_UPLOADS)
                                .select('*')
                                .where('task_id', task.id)
                                .andWhere('student_id', student_id)
                task.comments = await knex(TABLE_NAMES.TASK_COMMENTS)
                                .select('*')
                                .where('task_id', task.id)
                return task;
            })

// export const update = async (
//   task: Partial<TypesDB.TaskType>
// ): Promise<number> =>
//   await knex(TABLE_NAMES.TASKS).update({...task, updated_at: knex.fn.now()}).where("id", task.id).andWhere("user_id",task.user_id);

// export const remove = async (
//     task: Partial<TypesDB.TaskType>
// ): Promise<number> =>
//     await knex(TABLE_NAMES.TASKS).delete().where("id", task.id)