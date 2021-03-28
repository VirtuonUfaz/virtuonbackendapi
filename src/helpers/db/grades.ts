import { TypesDB } from ".";
import { TABLE_NAMES } from "../../config";
import knex from "../../db/connect";

export const getStudentGrades = async (
    studentId: number,
    year?: string,    
    semester?: number,
    subject?: string    
) => await knex(TABLE_NAMES.GRADES)
        .leftJoin(TABLE_NAMES.EXAMS, `${TABLE_NAMES.GRADES}.exam_id`, `${TABLE_NAMES.EXAMS}.id`)
        .leftJoin(TABLE_NAMES.COURSES, `${TABLE_NAMES.EXAMS}.course_id`, `${TABLE_NAMES.COURSES}.id`)
        .leftJoin(TABLE_NAMES.EVENTS, `${TABLE_NAMES.EXAMS}.event_id`, `${TABLE_NAMES.EVENTS}.id`)
        .select(
            `${TABLE_NAMES.COURSES}.value as course_name`, 
            `${TABLE_NAMES.EXAMS}.coefficient as credit`, 
            `${TABLE_NAMES.EVENTS}.end_date as due_date`, 
            knex.raw(
                `CASE 
                    WHEN ${TABLE_NAMES.GRADES}.grade IS NOT NULL 
                        THEN \'Graded\' 
                        ELSE \'Unopened\' 
                    END 
                as status`
            ),
            `${TABLE_NAMES.GRADES}.grade as grade`
        )
        .where(`${TABLE_NAMES.GRADES}.student_id`, studentId)
        .modify(q => subject ? q.where(`${TABLE_NAMES.COURSES}.value`, subject):q)

export const get = async (
  studentId: number
): Promise<Array<TypesDB.GradesType>> =>
  await knex(TABLE_NAMES.GRADES).select("*").where("student_id", studentId);

export const create = async (
  grade: Partial<TypesDB.GradesType>
): Promise<TypesDB.GradesType> =>
  await knex(TABLE_NAMES.GRADES).insert(grade);

export const update = async (
  grade: Partial<TypesDB.GradesType>
): Promise<number> =>
  await knex(TABLE_NAMES.GRADES).update(grade).where("id", grade.id).andWhere("student_id", grade.student_id);

export const remove = async (
    grade: Partial<TypesDB.GradesType>
  ): Promise<number> =>
    await knex(TABLE_NAMES.GRADES).delete().where("id", grade.id).andWhere("student_id", grade.student_id);