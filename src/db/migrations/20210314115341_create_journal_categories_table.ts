import { Knex } from "knex";



export async function up(knex): Promise<void> {
    return knex.schema.createTable('journal_categories', function(table) {
        table
        .integer("journal_id")
        .references("id")
        .inTable("journals")
        .onUpdate("CASCADE")
        .onDelete("CASCADE"); 
        table
        .integer("category_id")
        .references("id")
        .inTable("j_categories")
        .onUpdate("CASCADE")
        .onDelete("CASCADE"); 
        table.timestamps(); // created_at, updated_at
    })
}


export async function down(knex): Promise<void> {
    return knex.schema.dropTable('journal_categories');
}
