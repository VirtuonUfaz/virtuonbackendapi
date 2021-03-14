import { Knex } from "knex";



export async function up(knex): Promise<void> {
    return knex.schema.createTable('video_archives', function(table) {
        table.increments();

        table
        .integer("event_id")
        .references("id")
        .inTable("events")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");  

        //file
        table.timestamps(); // created_at, updated_at
    })
}


export async function down(knex): Promise<void> {
    return knex.schema.dropTable('video_archives');
}