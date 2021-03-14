import { Knex } from "knex";



export async function up(knex): Promise<void> {
    return knex.schema.createTable('exams', function(table) {
        table.increments();
        table.enu('type', ['mid1', 'mid2','project','pw','final','retake']).notNullable();
        table.decimal('coefficient',4,2);

        table
        .integer("course_id")
        .references("id")
        .inTable("courses")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        table
        .integer("event_id")
        .references("id")
        .inTable("events")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        table.timestamps(); // created_at, updated_at
    })
}


export async function down(knex): Promise<void> {
    return knex.schema.dropTable('exams');
}