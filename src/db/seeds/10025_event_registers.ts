import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("event_registers").del();

    // Inserts seed entries
    await knex("event_registers").insert([
        { event_id: 1,full_name:"Rabih Amhaz",email:"Amhaz@gmail.com",phone_number:"+994511234567"},
        { event_id: 2,full_name:"Mister Madame",email:"mm@gmail.com",phone_number:"+994511234561"},
        { event_id: 3,full_name:"Turqay Umudzade",email:"t@gmail.com",phone_number:"+994511234562"},


    ]);
};
