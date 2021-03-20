import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("event_messages").del();

    // Inserts seed entries
    await knex("event_messages").insert([
        { user_id: 1,body:"Learning new algorithms",date:"1970-01-13",event_id:1},
        { user_id: 2,body:"Learning new algorithms",date:"1980-01-13",event_id:3},
        { user_id: 3,body:"Learning new algorithms",date:"190-01-13",event_id:4},

    ]);
};
