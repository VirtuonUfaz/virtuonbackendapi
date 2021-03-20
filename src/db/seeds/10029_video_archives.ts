import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("video_archives").del();

    // Inserts seed entries
    await knex("video_archives").insert([
        { event_id: 1},
        { event_id: 2},
    ]);
};
