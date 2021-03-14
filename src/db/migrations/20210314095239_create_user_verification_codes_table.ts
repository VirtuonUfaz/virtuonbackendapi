import { Knex } from "knex";



export async function up(knex): Promise<void> {
    return knex.schema.createTable('user_verification_codes', function(table) {
        table.increments();
        table
        .integer("user_id")
        .references("users")
        .inTable("event_types")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        table.timestamp('date').notNullable();
        table.string('phone_number').notNullable().unique();
        table.string('email').notNullable().unique();
        table.timestamps(); // created_at, updated_at
    })
}


export async function down(knex): Promise<void> {
    return knex.schema.dropTable('user_verification_codes');
}