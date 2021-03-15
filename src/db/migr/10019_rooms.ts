import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('rooms', function(table) {
        table.increments("id").primary();
        table.integer("number").notNullable().unique();
        table
            .integer("room_type_id")
            .notNullable()
            .references("id")
            .inTable("room_types")
            .onUpdate("CASCADE")
            .onDelete("SET NULL");
        table.timestamps();
    })
}

export async function down(knex): Promise<void> {
    return knex.schema.dropTable('rooms');
}