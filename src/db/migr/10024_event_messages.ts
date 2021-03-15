import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('event_messages', function(table) {
        table.increments("id").primary();
        table
            .integer("user_id")
            .notNullable()
            .references("id")
            .inTable("users")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");    
        table.string("body").notNullable();
        table.timestamp('date').notNullable();
        table
            .integer("event_id")
            .notNullable()
            .references("id")
            .inTable("events")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");  
        table.string("file");
        table.timestamps();
    })
}

export async function down(knex): Promise<void> {
    return knex.schema.dropTable('event_messages');
}