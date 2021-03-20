import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("notifications").del();

    // Inserts seed entries
    await knex("notifications").insert([
        { user_id: 1,title:"Lesson",description:"Lesson begins in 5 minutes"},
        { user_id: 2,title:"Lesson",description:"Lesson begins in 5 minutes"},
        { user_id: 4,title:"Lesson",description:"Lesson begins in 5 minutes"},

    ]);
};
