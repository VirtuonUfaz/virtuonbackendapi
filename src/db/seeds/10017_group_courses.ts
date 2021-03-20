import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("group_courses").del();

    // Inserts seed entries
    await knex("group_courses").insert([
        { group_id: 1, course_id: 2},
        { group_id: 1, course_id: 1}
    ]);
};
