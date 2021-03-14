import { Knex } from "knex";



export async function up(knex): Promise<void> {
    return knex.schema.createTable('courses', function(table) {
        table.increments();
        table.string('code').notNullable();
        table.string('key').notNullable();
        table.string('value').notNullable();
        table.integer('coefficient').notNullable();
        table
        .integer("head_teacher_id")
        .references("user_id")
        .inTable("user_teachers")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        table.timestamps(); // created_at, updated_at
    })
}


export async function down(knex): Promise<void> {
    return knex.schema.dropTable('courses');
}