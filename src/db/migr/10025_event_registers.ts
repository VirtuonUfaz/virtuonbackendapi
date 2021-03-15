import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('event_registers', function(table) {
        table.increments("id").primary();
        table
            .integer("event_id")
            .notNullable()
            .references("id")
            .inTable("events")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");    
        table.string("full_name").notNullable();
        table.string("email").unique().notNullable();
        table.string("phone_number").unique().notNullable();
      	table.boolean("is_participated").notNullable().defaultTo(false);
        table.timestamps();
    })
}

export async function down(knex): Promise<void> {
    return knex.schema.dropTable('event_registers');
}