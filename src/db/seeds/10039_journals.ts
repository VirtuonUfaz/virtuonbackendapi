import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("journals").del();

    // Inserts seed entries
    await knex("journals").insert([
        { author: 1,title:"Going out",file:"out.txt"},
        { author: 4,title:"Virus",file:"malware.py"},

    ]);
};
