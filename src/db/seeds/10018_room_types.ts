import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("room_types").del();

    // Inserts seed entries
    await knex("room_types").insert([
        { name: "classroom", color: "red"},
        { name: "it", color: "black"}
    ]);
};
