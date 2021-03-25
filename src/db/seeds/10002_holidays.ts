import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("holidays").del();

    // Inserts seed entries
    await knex("holidays").insert([
        { name: "2020 New Year", start_date: "2019-12-25", end_date: "2020-01-10" },
        { name: "2021 New Year", start_date: "2020-12-25", end_date: "2021-01-10" },
        { name: "2020 Nowruz Holiday", start_date: "2020-03-20", end_date: "2020-03-29" },
        { name: "2021 Nowruz Holiday", start_date: "2021-03-20", end_date: "2021-03-29" },
    ]);
};
