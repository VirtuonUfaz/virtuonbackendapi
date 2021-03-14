import { Knex } from "knex";



export async function up(knex): Promise<void> {
    return knex.schema.createTable('notifications', function(table) {
        table.increments();

        table
        .integer("user_id")
        .references("id")
        .inTable("user")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");  
         
        table.string("title")
        table.string("description")
        table.string("link")
        table.boolean("is_seen")
        table.timestamps(); // created_at, updated_at
    })
}


export async function down(knex): Promise<void> {
    return knex.schema.dropTable('notifications');
}