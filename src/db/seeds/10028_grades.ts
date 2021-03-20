import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("grades").del();

    // Inserts seed entries
    await knex("grades").insert([
        { exam_id: 1,student_id:1,grade:10.30},
        { exam_id: 2,student_id:2,grade:5.30},
        { exam_id: 3,student_id:1,grade:20.00},


    ]);
};
