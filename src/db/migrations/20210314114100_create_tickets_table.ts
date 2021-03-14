import { Knex } from "knex";



export async function up(knex): Promise<void> {
    return knex.schema.createTable('tickets', function(table) {
        table.increments();

        table
        .integer("author_id")
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");    
        table.enu('priority', ['high', 'low','normal']).notNullable();
        table.string("title")
        table.string("body")
        table.enu('status', ['resolved', 'pending','unresolved']).notNullable();


        // file
        table.timestamps(); // created_at, updated_at
    })
}


export async function down(knex): Promise<void> {
    return knex.schema.dropTable('tickets');
}