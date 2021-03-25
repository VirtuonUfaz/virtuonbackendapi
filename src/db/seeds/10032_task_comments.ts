import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("task_comments").del();

    // Inserts seed entries
    await knex("task_comments").insert([
        { users_id: 1,task_id:1,comment:"No time"},
        { users_id: 1,task_id:2,comment:"Done"},
        { users_id: 2,task_id:1,comment:"Questions on 1"},
        { users_id: 2,task_id:2,comment:"Done"},
    ]);
};
