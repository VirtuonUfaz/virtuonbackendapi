import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("role_permissions").del();

    // Inserts seed entries
    await knex("role_permissions").insert([
        { role_id: "1", permission_id:"1"},

    ]);
};
