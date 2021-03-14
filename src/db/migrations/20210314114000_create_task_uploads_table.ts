import { Knex } from "knex";



export async function up(knex): Promise<void> {
    return knex.schema.createTable('task_upload', function(table) {
        table.increments();

        table
        .integer("task_id")
        .references("id")
        .inTable("tasks")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");       
        table
        .integer("student_id")
        .references("user_id")
        .inTable("user_students")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");  
        // file
        table.timestamps(); // created_at, updated_at
    })
}


export async function down(knex): Promise<void> {
    return knex.schema.dropTable('task_upload');
}