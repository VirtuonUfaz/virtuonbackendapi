import { Knex } from "knex";



export async function up(knex): Promise<void> {
    return knex.schema.createTable('ticket_messages', function(table) {
        table.increments();

        table
        .integer("ticker_id")
        .references("id")
        .inTable("ticket")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");  
        table
        .integer("author_id")
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");           
        table.string("content")
        // file


        table.timestamps(); // created_at, updated_at
    })
}


export async function down(knex): Promise<void> {
    return knex.schema.dropTable('ticket_messages');
}