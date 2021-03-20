import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("j_tags").del();

    // Inserts seed entries
    await knex("j_tags").insert([
        { key: 1,value:"new"},
        { key: 2,value:"new"},

    ]);
};
