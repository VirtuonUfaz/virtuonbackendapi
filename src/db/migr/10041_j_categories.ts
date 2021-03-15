import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('j_categories', function(table) {
        table.increments("id").primary();
        table.integer("key").notNullable();
        table.string("value").notNullable();
        table.timestamps();
    })
}

export async function down(knex): Promise<void> {
    return knex.schema.dropTable('j_categories');
}