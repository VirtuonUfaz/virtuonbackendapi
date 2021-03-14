import { Knex } from "knex";



export async function up(knex): Promise<void> {
    return knex.schema.createTable('j_tags', function(table) {
        table.increments();
        table.integer("key")
        table.string("value")
        table.timestamps(); // created_at, updated_at
    })
}


export async function down(knex): Promise<void> {
    return knex.schema.dropTable('j_tags');
}