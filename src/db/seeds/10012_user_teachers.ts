import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("user_teachers").del();

    // Inserts seed entries
    await knex("user_teachers").insert([
        { user_id: 3, speciality: "CS", teacher_id: "99999999" },
        { user_id: 4, speciality: "CS", teacher_id: "88888888" }
    ]);
};
