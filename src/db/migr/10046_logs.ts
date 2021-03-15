import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('logs', function(table) {
        table.increments("id").primary();
        table
            .integer("user_id")
            .notNullable()
            .references("id")
            .inTable("users")
            .onUpdate("CASCADE")
            .onDelete("SET NULL");  
        table.enu('event', ['started', 'ended']);
        table.string("operation");
        table.string("ip");
        table.timestamps();
    })
}

export async function down(knex): Promise<void> {
    return knex.schema.dropTable('logs');
}