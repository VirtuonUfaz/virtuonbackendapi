import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('journals', function(table) {
        table.increments("id").primary();
        table
            .integer("author")
            .notNullable()
            .references("id")
            .inTable("users")
            .onUpdate("CASCADE")
            .onDelete("SET NULL"); 
        table.string("title").notNullable();
        table.string("description");
        table.timestamp("upload_date").notNullable().defaultTo(knex.fn.now());
        table.timestamp("publication_date");
        table.string("file").notNullable();
        table.string("journal");
        table.string("publisher");
        table.integer("issue");
        table.timestamps();
    })
}

export async function down(knex): Promise<void> {
    return knex.schema.dropTable('journals');
}