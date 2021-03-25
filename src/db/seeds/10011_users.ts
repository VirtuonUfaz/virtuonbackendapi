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
            register_date: "2020-09-03", // ISO 8601;
            role_id: 1,
        },
        { 
            username: "anday", 
            first_name: "Anday",
            last_name: "Ismayilzada",
            gender: "Male",
            phone_number: "+994517748801",
            email: "ipman4819@gmail.com",
            birth_date: "2000-01-13", // ISO 8601;
            register_date: "2020-09-03", // ISO 8601;
            role_id: 1,
        },
        { 
            username: "rabih", 
            first_name: "Rabih",
            last_name: "Amhaz",
            gender: "Male",
            phone_number: "+994511112233",
            email: "rabih@gmail.com",
            birth_date: "1970-01-13", // ISO 8601;
            register_date: "2020-09-03", // ISO 8601;
            role_id: 1,
        },
        { 
            username: "pierre", 
            first_name: "Pierre",
            last_name: "Collet",
            gender: "Male",
            phone_number: "+994511233453",
            email: "p@gmail.com",
            birth_date: "1900-01-13", // ISO 8601;
            register_date: "2020-09-03", // ISO 8601;
            role_id: 1,
        },
        { 
            username: "rukshare", 
            first_name: "Rukshare",
            last_name: "Yarmetova",
            gender: "Female",
            phone_number: "+994511234567",
            email: "rukshare@gmail.com",
            birth_date: "1910-01-13", // ISO 8601;
            register_date: "2020-09-03", // ISO 8601;
            role_id: 1,
        },
        { 
            username: "latifa", 
            first_name: "Latifa",
            last_name: "Nasibova",
            gender: "Female",
            phone_number: "+994510001122",
            email: "latifa@gmail.com",
            birth_date: "1920-01-13", // ISO 8601;
            register_date: "2020-09-03", // ISO 8601;
            role_id: 1,
        },
        { 
            username: "turqay", 
            first_name: "Turqay",
            last_name: "Umudzade",
            gender: "Male",
            phone_number: "+994703008812",
            email: "bmlk3644j@gmail.com",
            birth_date: "2000-01-01", // ISO 8601;
            register_date: "2020-09-04", // ISO 8601;
            role_id: 1,
        },        
        {                  
            username: "murad", 
            first_name: "Murad",
            last_name: "Ibrahimxanli",
            gender: "Male",
            phone_number: "+994519231144",
            email: "ibrahimxanlimurad@hotmail.com",
            birth_date: "2000-08-03", // ISO 8601;
            register_date: "2020-09-03", // ISO 8601;
            role_id: 1,
        },         
        { 
            username: "samer", 
            first_name: "Samer",
            last_name: "Elzant",
            gender: "Male",
            phone_number: "+994511233454",
            email: "samer.elzant@ufaz.az",
            birth_date: "1900-01-13", // ISO 8601;
            register_date: "2020-09-03", // ISO 8601;
            role_id: 1,
        },
        { 
            username: "javid", 
            first_name: "Javid",
            last_name: "Khalilov",
            gender: "Male",
            phone_number: "+994511233455",
            email: "javid.khalilov@ufaz.az",
            birth_date: "1900-01-13", // ISO 8601;
            register_date: "2020-09-03", // ISO 8601;
            role_id: 1,
        }, 
    ]);
};
