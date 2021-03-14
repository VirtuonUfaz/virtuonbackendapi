import { Knex } from "knex";



export async function up(knex): Promise<void> {
    return knex.schema.createTable('event_messages', function(table) {
        table.increments();

        table
        .integer("user_id")
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");    
        table.string("body").notNullable();
        table.timestamp('date').notNullable();
        table
        .integer("event_id")
        .references("id")
        .inTable("events")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");  
        // file?
        table.timestamps(); // created_at, updated_at
    })
}


export async function down(knex): Promise<void> {
    return knex.schema.dropTable('event_messages');
}