import { Knex } from "knex";



export async function up(knex): Promise<void> {
    return knex.schema.createTable('events', function(table) {
        table.increments();
        table
        .integer("event_type_id")
        .references("id")
        .inTable("event_types")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");    
         table
        .integer("room_id")
        .references("id")
        .inTable("rooms")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");               
        table.timestamp('start_date')
        table.timestamp('end_date')
        table.boolean('is_online')
        table.string("event_link")
        table
        .integer("author_id")
        .references("user_id")
        .inTable("user_affairs")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");  
        table.timestamps(); // created_at, updated_at
    })
}


export async function down(knex): Promise<void> {
    return knex.schema.dropTable('events');
}