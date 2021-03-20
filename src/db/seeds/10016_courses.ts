import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("courses").del();

    // Inserts seed entries
    await knex("courses").insert([
        { code: "UE103", key: "AI",value: "Artificial Intellegence",coefficient: 4,head_teacher_id: 3},
        { code: "UE202", key: "AS",value: "Algorithms and Structures",coefficient: 1,head_teacher_id:4}
    ]);
};
