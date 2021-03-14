import { Knex } from "knex";



export async function up(knex): Promise<void> {
    return knex.schema.createTable('task_comments', function(table) {
        table.increments();

        table
        .integer("users_id")
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");       
        table
        .integer("task_id")
        .references("id")
        .inTable("tasks")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");  
        table.string("comment")
        table.timestamps(); // created_at, updated_at
    })
}


export async function down(knex): Promise<void> {
    return knex.schema.dropTable('task_comments');
}