import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("event_classes").del();

    // Inserts seed entries
    await knex("event_classes").insert([
        { event_id: 1,teacher_id:3,subject_id:1,group_id:1},
        { event_id: 2,teacher_id:4,subject_id:1,group_id:1},
        { event_id: 3,teacher_id:3,subject_id:1,group_id:1},
        { event_id: 4,teacher_id:4,subject_id:1,group_id:1}
    ]);
};
