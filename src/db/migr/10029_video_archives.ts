import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('video_archives', function(table) {
        table.increments("id").primary();
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
    return knex.schema.dropTable('video_archives');
}