import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("participation").del();

    // Inserts seed entries
    await knex("participation").insert([
        { event_id: 1,user_id:1},
        { event_id: 2,user_id:1},
        { event_id: 3,user_id:2},


    ]);
};
