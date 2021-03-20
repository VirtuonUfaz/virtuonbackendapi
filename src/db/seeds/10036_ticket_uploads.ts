import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("ticket_uploads").del();

    // Inserts seed entries
    await knex("ticket_uploads").insert([
        { ticket_id: 1,author_id:1,file:"hello.txt"},
        { ticket_id: 1,author_id:2,file:"meow.txt"},

    ]);
};
