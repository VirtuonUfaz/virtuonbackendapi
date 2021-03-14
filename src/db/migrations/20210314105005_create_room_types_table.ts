import { Knex } from "knex";



export async function up(knex): Promise<void> {
    return knex.schema.createTable('room_types', function(table) {
        table.increments();
        table.string("name").notNullable();
        table.string("color").notNullable();
        table.timestamps(); // created_at, updated_at
    })
}


export async function down(knex): Promise<void> {
    return knex.schema.dropTable('room_types');
}