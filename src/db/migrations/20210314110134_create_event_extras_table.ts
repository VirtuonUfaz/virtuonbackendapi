import { Knex } from "knex";



export async function up(knex): Promise<void> {
    return knex.schema.createTable('event_extras', function(table) {
        table
        .integer("event_id")
        .primary()
        .references("id")
        .inTable("events")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");    
		table.string("name");
		table.string("host");
		table.integer("participant_number");
		table.boolean('is_public');

        table.timestamps(); // created_at, updated_at
    })
}


export async function down(knex): Promise<void> {
    return knex.schema.dropTable('event_extras');
}