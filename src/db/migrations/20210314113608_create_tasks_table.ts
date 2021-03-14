import { Knex } from "knex";



export async function up(knex): Promise<void> {
    return knex.schema.createTable('tasks', function(table) {
        table.increments();
        table.string("name").notNullable()
        table.string("description")
        table
        .integer("teacher")
        .references("user_id")
        .inTable("user_teachers")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");       
        table
        .integer("course")
        .references("id")
        .inTable("courses")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");  
        table.timestamps(); // created_at, updated_at
    })
}


export async function down(knex): Promise<void> {
    return knex.schema.dropTable('tasks');
}