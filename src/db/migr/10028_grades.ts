import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('grades', function(table) {
        table.increments("id").primary();
        table
            .integer("exam_id")
            .notNullable()
            .references("id")
            .inTable("exams")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table
            .integer("student_id")
            .notNullable()
            .references("user_id")
            .inTable("user_students")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table.decimal('grade', 4, 2);
        table.timestamps();
    })
}

export async function down(knex): Promise<void> {
    return knex.schema.dropTable('grades');
}