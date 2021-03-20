import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("journal_tags").del();

    // Inserts seed entries
    await knex("journal_tags").insert([
        { journal_id: 1,tag_id:1},
        { journal_id: 2,tag_id:2},

    ]);
};
