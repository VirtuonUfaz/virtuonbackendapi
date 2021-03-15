import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('task_comments', function(table) {
        table.increments("id").primary();
        table
            .integer("users_id")
            .notNullable()
            .references("id")
            .inTable("users")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table
            .integer("task_id")
            .notNullable()
            .references("id")
            .inTable("tasks")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table.string("comment")
        table.timestamps();
    })
}

export async function down(knex): Promise<void> {
    return knex.schema.dropTable('task_comments');
}