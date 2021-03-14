import { Knex } from "knex";



export async function up(knex): Promise<void> {
    return knex.schema.createTable('grades', function(table) {
        table.increments();

        table
        .integer("exam_id")
        .references("id")
        .inTable("exams")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        table
        .integer("student_id")
        .references("user_id")
        .inTable("user_students")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        table.decimal('grade',4,2);

        table.timestamps(); // created_at, updated_at
    })
}


export async function down(knex): Promise<void> {
    return knex.schema.dropTable('grades');
}