import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("private_tasks").del();

    // Inserts seed entries
    await knex("private_tasks").insert([
        { user_id: 1,title:"New lesson"},
        { user_id: 2,title:"New lesson"},
        { user_id: 3,title:"New lesson"},

    ]);
};
