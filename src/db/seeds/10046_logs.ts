import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("logs").del();

    // Inserts seed entries
    await knex("logs").insert([
        { user_id: 1,event:"started"},
        { user_id: 2,event:"started"},


    ]);
};
