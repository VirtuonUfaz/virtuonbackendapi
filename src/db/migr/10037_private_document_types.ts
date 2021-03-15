import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('private_document_types', function(table) {
        table.increments("id").primary();
        table.string("name").notNullable()
        table.timestamps();
    })
}

export async function down(knex): Promise<void> {
    return knex.schema.dropTable('private_document_types');
}