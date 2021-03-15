import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('user_verification_codes', function(table) {
        table.increments();
        table
            .integer("user_id")
            .notNullable()
            .references("id")
            .inTable("users")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table.string('phone_code');
        table.string('email_code');
        table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
        table.integer("generation_trials").notNullable().defaultTo(1);
    })
}

export async function down(knex): Promise<void> {
    return knex.schema.dropTable('user_verification_codes');
}