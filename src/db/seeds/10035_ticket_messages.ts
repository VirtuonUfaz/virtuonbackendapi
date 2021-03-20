import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("ticket_messages").del();

    // Inserts seed entries
    await knex("ticket_messages").insert([
        { ticket_id: 1,author_id:1,content:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."},
        { ticket_id: 1,author_id:2,content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud "},

    ]);
};
