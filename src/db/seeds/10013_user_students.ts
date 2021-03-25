import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("user_students").del();

    // Inserts seed entries
    await knex("user_students").insert([
        // { id: 1, student_id: "21724184", group_id: 1 },
        { user_id: 2, student_id: "21724184", group_id: 1 },
        { user_id: 1, student_id: "21724183", group_id: 2 },
        { user_id: 7, student_id: "21724179", group_id: 1 },
        { user_id: 8, student_id: "21724194", group_id: 1 },
    ]);
};
