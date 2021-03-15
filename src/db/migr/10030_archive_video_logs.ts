import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('archive_video_logs', function(table) {
        table.increments("id").primary();
        table
            .integer("student_id")
            .notNullable()
            .references("user_id")
            .inTable("user_students")
            .onUpdate("CASCADE")
            .onDelete("CASCADE"); 
        table
            .integer("video_id")
            .notNullable()
            .references("id")
            .inTable("video_archives")
            .onUpdate("CASCADE")
            .onDelete("CASCADE"); 
        table.timestamp("stayed_at").notNullable();
        table.timestamps();
    })
}

export async function down(knex): Promise<void> {
    return knex.schema.dropTable('archive_video_logs');
}