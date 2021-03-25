import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("tasks").del();

    // Inserts seed entries
    await knex("tasks").insert([
        { name: "Videos",description:"Watch all CS related Videos",teacher:3,course:2},
        { name: "HW",description:"Do the exercises 1,2",teacher:4,course:1},
    ]);
};
