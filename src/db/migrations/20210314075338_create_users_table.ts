// import { Knex } from "knex";

/* 
Table Users {
    Id int [pk]
    Username varchar [unique]
    Firstname varchar
    Lastname varchar
    Gender char
    PhoneNumber varchar [unique]
    Email varchar [unique]
    BirthDate timestamp
    RegisterDate timestamp
    AuthToken varchar
    PhoneVerified boolean
    EmailVerified boolean
    IsBlocked boolean
    ProfilePictureUrl varchar
    Role int [ref: > Roles.Id]
    Status enum //Online, Offline, Busy
}
*/

export async function up(knex): Promise<void> {
    return knex.schema.createTable('users', function(table) {
        table.increments();
        table.string('username').notNullable().unique();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.enu('gender', ['Male', 'Female']).notNullable();
        table.string('phone_number').notNullable().unique();
        table.string('email').notNullable().unique();
        table.timestamp('birth_date').notNullable();
        table.string('auth_token');
        table.boolean('phone_verified').notNullable().defaultTo(false);
        table.boolean('email_verified').notNullable().defaultTo(false);
        table.boolean('is_blocked').notNullable().defaultTo(false);
        table.string('profile_picture_url');
        table.integer('role_id'); // TODO: foreign key will be within separete migration
        table.timestamps(); // created_at, updated_at
    })
}


// export async function down(knex): Promise<void> {
    return knex.schema.dropTable('users');
}