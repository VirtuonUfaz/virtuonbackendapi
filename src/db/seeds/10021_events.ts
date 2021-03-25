import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("events").del();

    // Inserts seed entries
    await knex("events").insert([
        { event_type_id: 1,room_id:1,author_id:5},
        { event_type_id: 2,room_id:2,author_id:6},
        { event_type_id: 3,room_id:3,author_id:5},
        { event_type_id: 4,room_id:4,author_id:5},
        { event_type_id: 5,room_id:1,author_id:6},
        { event_type_id: 6,room_id:2,author_id:5},

    ]);
};
