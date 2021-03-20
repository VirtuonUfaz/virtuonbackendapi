import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("exams").del();

    // Inserts seed entries
    await knex("exams").insert([
        { type: 'mid1',coefficient:3.00,course_id:1,event_id:1},
        { type: 'mid2',coefficient:1.50,course_id:2,event_id:2},
        { type: 'pw',coefficient:0.25,course_id:1,event_id:3},


    ]);
};
