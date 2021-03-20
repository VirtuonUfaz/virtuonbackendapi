import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("tickets").del();

    // Inserts seed entries
    await knex("tickets").insert([
        { author_id: 1,priority:"high",title:"Homework",body:"Questions on Homework",status:"pending"},
        { author_id: 2,priority:"low",title:"Videos",body:"Did not understand 1",status:"resolved"},

    ]);
};
