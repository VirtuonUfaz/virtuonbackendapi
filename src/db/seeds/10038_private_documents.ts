import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("private_documents").del();

    // Inserts seed entries
    await knex("private_documents").insert([
        { private_document_type_id: 1,user_id:1},
        { private_document_type_id: 2,user_id:2},

    ]);
};
