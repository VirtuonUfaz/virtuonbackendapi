import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("rooms").del();

    // Inserts seed entries
    await knex("rooms").insert([
        { number: "303", room_type_id: 1},
        { number: "302", room_type_id: 1},
        { number: "402", room_type_id: 1},
        { number: "403", room_type_id: 1},
        { number: "102", room_type_id: 2},
    ]);
};
