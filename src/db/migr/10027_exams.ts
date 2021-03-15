import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('exams', function(table) {
        table.increments("id").primary();
        table.enu('type', ['mid1', 'mid2','project','pw','final','retake']).notNullable();
        table.decimal('coefficient', 4, 2);
        table
            .integer("course_id")
            .notNullable()
            .references("id")
            .inTable("courses")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table
            .integer("event_id")
            .references("id")
            .inTable("events")
            .onUpdate("CASCADE")
            .onDelete("SET NULL");
        table.timestamps();
    })
}

export async function down(knex): Promise<void> {
    return knex.schema.dropTable('exams');
}