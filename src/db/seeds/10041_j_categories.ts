import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("j_categories").del();

    // Inserts seed entries
    await knex("j_categories").insert([
        { key: 1,value:"new_categoty"},
        { key: 2,value:"new_categoty"},

    ]);
};
