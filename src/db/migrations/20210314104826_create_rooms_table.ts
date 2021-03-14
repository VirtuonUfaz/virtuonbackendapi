import { Knex } from "knex";



export async function up(knex): Promise<void> {
    return knex.schema.createTable('rooms', function(table) {
        table.increments();
        table.integer("number");
        table
        .integer("room_type_id")
        .references("id")
        .inTable("room_types")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");

        table.timestamps(); // created_at, updated_at
    })
}


export async function down(knex): Promise<void> {
    return knex.schema.dropTable('rooms');
}