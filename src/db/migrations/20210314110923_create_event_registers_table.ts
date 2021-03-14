import { Knex } from "knex";



export async function up(knex): Promise<void> {
    return knex.schema.createTable('event_registers', function(table) {
        table.increments();

        table
        .integer("event_id")
        .references("id")
        .inTable("events")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");    
        table.string("name").notNullable();
        table.string("last_name").notNullable();
        table.string("email").unique().notNullable().unique();
        table.string("phone_number").unique();
      	table.boolean("is_participated");
        table.timestamps(); // created_at, updated_at
    })
}


export async function down(knex): Promise<void> {
    return knex.schema.dropTable('event_registers');
}