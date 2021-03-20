import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("user_teachers").del();

    // Inserts seed entries
    await knex("user_teachers").insert([
        { user_id: 3, Speciality: "CS" },
        { user_id: 4, Speciality: "CS" }
    ]);
};
