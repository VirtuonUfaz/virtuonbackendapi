import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('events', function(table) {
        table.increments("id").primary();
        table
            .integer("event_type_id")
            .notNullable()
            .references("id")
            .inTable("event_types")
            .onUpdate("CASCADE")
            .onDelete("SET NULL");    
         table
            .integer("room_id")
            .references("id")
            .inTable("rooms")
            .onUpdate("CASCADE")
            .onDelete("SET NULL");               
        table.timestamp('start_date');
        table.timestamp('end_date');
        table.boolean('is_online').notNullable().defaultTo(false);
        table.string("event_link");
        table
            .integer("author_id")
            .notNullable()
            .references("user_id")
            .inTable("user_affairs")
            .onUpdate("CASCADE")
            .onDelete("SET NULL");  
        table.timestamps();
    })
}

export async function down(knex): Promise<void> {
    return knex.schema.dropTable('events');
}