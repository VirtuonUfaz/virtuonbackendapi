import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("journal_categories").del();

    // Inserts seed entries
    await knex("journal_categories").insert([
        { journal_id: 1,category_id:1},
        { journal_id: 2,category_id:2},

    ]);
};
