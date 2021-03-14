import { Knex } from "knex";



export async function up(knex): Promise<void> {
    return knex.schema.createTable('event_types', function(table) {
        table.increments();
		table.integer("name").notNullable();
        table.timestamps(); // created_at, updated_at
    })
}


export async function down(knex): Promise<void> {
    return knex.schema.dropTable('event_types');
}