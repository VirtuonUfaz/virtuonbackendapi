import { Knex } from "knex";



export async function up(knex): Promise<void> {
    return knex.schema.createTable('journal_tags', function(table) {
        table
        .integer("journal_id")
        .references("id")
        .inTable("journals")
        .onUpdate("CASCADE")
        .onDelete("CASCADE"); 
        table
        .integer("tag_id")
        .references("id")
        .inTable("j_tags")
        .onUpdate("CASCADE")
        .onDelete("CASCADE"); 
        table.timestamps(); // created_at, updated_at
    })
}


export async function down(knex): Promise<void> {
    return knex.schema.dropTable('journal_tags');
}
