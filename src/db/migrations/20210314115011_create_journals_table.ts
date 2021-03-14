import { Knex } from "knex";



export async function up(knex): Promise<void> {
    return knex.schema.createTable('journals', function(table) {
        table.increments();

        table
        .integer("author")
        .references("id")
        .inTable("user")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");  
         
        table.string("title")
        table.string("description")
        table.timestamps("upload_date")
        table.timestamps("publication_date")
        //file
        table.string("journal")
        table.string("publisher")
        table.integer("issue")
        table.timestamps(); // created_at, updated_at
    })
}


export async function down(knex): Promise<void> {
    return knex.schema.dropTable('journals');
}