import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("groups").del();

    // Inserts seed entries
    await knex("groups").insert([
        { code: "1", name: "CS-017", year: "l3" },
        { code: "1", name: "CS-017", year: "l3" },
    ]);
};
