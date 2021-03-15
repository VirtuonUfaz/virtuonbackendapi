import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', function(table) {
        table.increments("id").primary();
        table.string('username').notNullable().unique();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.enu('gender', ['Male', 'Female']).notNullable();
        table.string('phone_number').notNullable().unique();
        table.string('email').notNullable().unique();
        table.timestamp('birth_date').notNullable();
        table.timestamp('register_date').notNullable();
        table.string('auth_token');
        table.boolean('phone_verified').notNullable().defaultTo(false);
        table.boolean('email_verified').notNullable().defaultTo(false);
        table.boolean('is_blocked').notNullable().defaultTo(false);
        table.string('profile_picture_url');
        table.enu('status', ['Online', 'Offline', 'Busy']).notNullable().defaultTo("Offline");
        table
            .integer("role_id")
            .notNullable()
            .references("id")
            .inTable("roles")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table.timestamps(); // created_at, updated_at
    })
}

export async function down(knex): Promise<void> {
    return knex.schema.dropTable('users');
}