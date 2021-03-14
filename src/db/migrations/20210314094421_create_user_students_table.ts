import { Knex } from "knex";



export async function up(knex): Promise<void> {
    return knex.schema.createTable('user_students', function(table) {
        table
        .integer("user_id")
        .primary()
        .references("users")
        .inTable("event_types")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        table.string('student_id').notNullable().unique();
        table
        .integer("group_id")
        .references("users")
        .inTable("groups")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        table.timestamps(); // created_at, updated_at
    })
}


export async function down(knex): Promise<void> {
    return knex.schema.dropTable('user_students');
}