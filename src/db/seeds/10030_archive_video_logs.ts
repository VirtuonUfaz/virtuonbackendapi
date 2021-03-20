import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("archive_video_logs").del();

    // Inserts seed entries
    await knex("archive_video_logs").insert([
        { student_id: 1,video_id:1,stayed_at:"1970-01-13"},
        { student_id: 2,video_id:2,stayed_at:"1990-01-13"}
    ]);
};
