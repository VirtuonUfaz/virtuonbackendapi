import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('room_types', function(table) {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.string("color").notNullable();
        table.timestamps();
    })
}

export async function down(knex): Promise<void> {
    return knex.schema.dropTable('room_types');
}