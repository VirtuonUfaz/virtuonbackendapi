import { Knex } from "knex";



export async function up(knex): Promise<void> {
    return knex.schema.createTable('private_tasks', function(table) {
        table.increments();

        table
        .integer("user_id")
        .references("id")
        .inTable("user")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");  
         
        table.string("title")
        table.string("description")
        table.enu('priority', ['urgent', 'high','low']).notNullable();
        table.boolean("is_resolved")
        table.timestamps("Deadline")
        table.timestamps(); // created_at, updated_at
    })
}


export async function down(knex): Promise<void> {
    return knex.schema.dropTable('private_tasks');
}