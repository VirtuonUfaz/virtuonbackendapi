import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('roles', function(table) {
        table.increments("id").primary();
        table.string('name').notNullable().unique();
        table.timestamps();
    })
}

export async function down(knex): Promise<void> {
    return knex.schema.dropTable('roles');
}