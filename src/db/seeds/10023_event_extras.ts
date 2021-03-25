import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("event_extras").del();

    // Inserts seed entries
    await knex("event_extras").insert([
        { event_id: 1,name:"Algorithms",host:"Mr.Read",},
        { event_id: 2,name:"Math",host:"Mr. Younes"},
        { event_id: 3,name:"Physics",host:"Mr. Sad",}

    ]);
};
