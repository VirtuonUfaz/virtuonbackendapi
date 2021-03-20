import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("user_affairs").del();

    // Inserts seed entries
    await knex("user_affairs").insert([
        { user_id: 5, Speciality: "CS" },
        { user_id: 6, Speciality: "CE" }
    ]);
};
