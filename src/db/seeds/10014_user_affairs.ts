import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("user_affairs").del();

    // Inserts seed entries
    await knex("user_affairs").insert([
        { user_id: 5, year: "l0", affairs_id: "11111111"},
        { user_id: 6, year: "l3", affairs_id: "22222222" }
    ]);
};
