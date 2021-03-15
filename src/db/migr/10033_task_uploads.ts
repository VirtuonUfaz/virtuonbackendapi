import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('task_uploads', function(table) {
        table.increments("id").primary();
        table
            .integer("task_id")
            .notNullable()
            .references("id")
            .inTable("tasks")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table
            .integer("student_id")
            .notNullable()
            .references("user_id")
            .inTable("user_students")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table.string("file").notNullable();
        table.timestamps();
    })
}

export async function down(knex): Promise<void> {
    return knex.schema.dropTable('task_uploads');
}