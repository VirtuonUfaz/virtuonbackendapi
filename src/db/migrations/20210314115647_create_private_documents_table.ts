import { Knex } from "knex";



export async function up(knex): Promise<void> {
    return knex.schema.createTable('private_documents', function(table) {
        table.increments();

        table
        .integer("private_document_type_id")
        .references("id")
        .inTable("private_document_types")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");  
        table
        .integer("user_id")
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        table.integer("year")
        table.boolean("is_accessible")
        //file
        table.timestamps(); // created_at, updated_at
    })
}


export async function down(knex): Promise<void> {
    return knex.schema.dropTable('private_documents');
}