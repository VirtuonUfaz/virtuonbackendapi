import { Knex } from "knex";



export async function up(knex): Promise<void> {
    return knex.schema.createTable('private_document_types', function(table) {
        table.increments();
        table.string("name").notNullable()
        table.timestamps(); // created_at, updated_at
    })
}


export async function down(knex): Promise<void> {
    return knex.schema.dropTable('private_document_types');
}