import { Knex } from "knex";



export async function up(knex): Promise<void> {
    return knex.schema.createTable('group_courses', function(table) {

        table
        .integer("group_id")
        .primary()
        .references("id")
        .inTable("group")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        table
        .integer("student_id")
        .primary()
        .references("id")
        .inTable("courses")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

        table.timestamps(); // created_at, updated_at
    })
}


export async function down(knex): Promise<void> {
    return knex.schema.dropTable('group_courses');
}