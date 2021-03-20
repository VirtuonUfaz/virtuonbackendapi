import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("task_uploads").del();

    // Inserts seed entries
    await knex("task_uploads").insert([
        { task_id: 1,student_id:1,file:"nese.txt"},
        { task_id: 1,student_id:2,file:"nese1.txt"},
        { task_id: 2,student_id:1,file:"nese2.txt"},
        { task_id: 2,student_id:2,file:"nese3.txt"},

    ]);
};
