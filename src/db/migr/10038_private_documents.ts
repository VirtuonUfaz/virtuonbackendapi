import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('private_documents', function(table) {
        table.increments("id").primary();
        table
            .integer("private_document_type_id")
            .notNullable()
            .references("id")
            .inTable("private_document_types")
            .onUpdate("CASCADE")
            .onDelete("SET NULL"); 
        table
            .integer("user_id")
            .notNullable()
            .references("id")
            .inTable("users")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table.integer("year");
        table.boolean("is_accessible").notNullable().defaultTo(false);
        table.timestamps();
    })
}

export async function down(knex): Promise<void> {
    return knex.schema.dropTable('private_documents');
}