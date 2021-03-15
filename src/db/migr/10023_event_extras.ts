import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('event_extras', function(table) {
        table
            .integer("event_id")
            .primary()
            .notNullable()
            .references("id")
            .inTable("events")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");    
		table.string("name").notNullable();
		table.string("host").notNullable();
		table.integer("participant_number");
		table.boolean('is_public').notNullable().defaultTo(true);
        table.timestamps();
    })
}

export async function down(knex): Promise<void> {
    return knex.schema.dropTable('event_extras');
}