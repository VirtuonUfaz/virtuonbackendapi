import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert([
        { 
            username: "anarmammad", 
            first_name: "Anar",
            last_name: "Mammad",
            gender: "Male",
            phone_number: "+994554060514",
            email: "anar.mammad28@gmail.com",
            birth_date: "2000-09-03", // ISO 8601;
        },
        { 
            username: "anday", 
            first_name: "Anday",
            last_name: "Ismayilzada",
            gender: "Male",
            phone_number: "+994517748801",
            email: "ipman4819@gmail.com",
            birth_date: "2000-01-13", // ISO 8601;
        }
    ]);
};
