import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('ticket_uploads', function(table) {
        table.increments("id").primary();
        table
            .integer("ticket_id")
            .notNullable()
            .references("id")
            .inTable("tickets")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table
            .integer("author_id")
            .notNullable()
            .references("id")
            .inTable("users")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table.string("file").notNullable();
        table.timestamps();
    })
}

export async function down(knex): Promise<void> {
    return knex.schema.dropTable('ticket_uploads');
}