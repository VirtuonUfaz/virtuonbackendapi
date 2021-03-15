import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('tasks', function(table) {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.string("description");
        table
            .integer("teacher")
            .notNullable()
            .references("user_id")
            .inTable("user_teachers")
            .onUpdate("CASCADE")
            .onDelete("SET NULL");
        table
            .integer("course")
            .notNullable()
            .references("id")
            .inTable("courses")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table.timestamps();
    })
}

export async function down(knex): Promise<void> {
    return knex.schema.dropTable('tasks');
}