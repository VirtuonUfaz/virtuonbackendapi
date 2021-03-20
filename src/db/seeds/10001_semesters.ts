import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("semesters").del();

    // Inserts seed entries
    await knex("semesters").insert([
        { name: "2020 Fall Semester", start_date: "2020-10-03", end_date: "2021-03-03" },
        { name: "2021 Spring Semester", start_date: "2021-03-03", end_date: "2021-06-15" },
        { name: "2019 Fall Semester", start_date: "2019-10-03", end_date: "2020-03-03" },
        { name: "2020 Spring Semester", start_date: "2020-03-03", end_date: "2020-06-15" }
    ]);
};
