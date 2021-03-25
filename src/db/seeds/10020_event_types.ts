import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("event_types").del();

    // Inserts seed entries
    await knex("event_types").insert([
        { name: "Meeting/TechTalk"},
        { name: "Student Activity"},
        { name: "Session"},
        { name: "Lecture"},
        { name: "PW"},
        { name: "Exam"}
    ]);
};
