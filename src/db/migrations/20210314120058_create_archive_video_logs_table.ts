import { Knex } from "knex";



export async function up(knex): Promise<void> {
    return knex.schema.createTable('archive_video_logs', function(table) {
        table.increments();

        table
        .integer("student_id")
        .references("user_id")
        .inTable("user_students")
        .onUpdate("CASCADE")
        .onDelete("CASCADE"); 

        table
        .integer("video_id")
        .references("id")
        .inTable("video_archives")
        .onUpdate("CASCADE")
        .onDelete("CASCADE"); 
        //file
        table.timestamps("stayed_at")
        table.timestamps(); // created_at, updated_at
    })
}


export async function down(knex): Promise<void> {
    return knex.schema.dropTable('archive_video_logs');
}