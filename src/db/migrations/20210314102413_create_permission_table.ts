import { Knex } from "knex";



export async function up(knex): Promise<void> {
    return knex.schema.createTable('permissions', function(table) {
        table.increments();
        table.string('description');
        table.timestamps(); // created_at, updated_at
    })
}


export async function down(knex): Promise<void> {
    return knex.schema.dropTable('permissions');
}