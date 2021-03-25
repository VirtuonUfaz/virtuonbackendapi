import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("private_document_types").del();

    // Inserts seed entries
    await knex("private_document_types").insert([
        { name: "Nyancat song lyrics"},
        { name: "Hello darkness my old friend"},

    ]);
};
