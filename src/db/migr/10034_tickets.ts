import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('tickets', function(table) {
        table.increments("id").primary();
        table
            .integer("author_id")
            .notNullable()
            .references("id")
            .inTable("users")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");    
        table.enu('priority', ['high', 'low','normal']).notNullable().defaultTo("normal");
        table.string("title")
        table.string("body")
        table.enu('status', ['resolved', 'pending','unresolved']).notNullable().defaultTo("pending");
        table.timestamps();
    })
}

export async function down(knex): Promise<void> {
    return knex.schema.dropTable('tickets');
}