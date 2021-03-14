import { Knex } from "knex";



export async function up(knex): Promise<void> {
    return knex.schema.createTable('logs', function(table) {
        table.increments();

        table
        .integer("user_id")
        .references("id")
        .inTable("user")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");  
         
        table.string("operation")
        table.string("ip")
        // file
        table.enu('event', ['login', 'logout']).notNullable();


        // file
        table.timestamps(); // created_at, updated_at
    })
}


export async function down(knex): Promise<void> {
    return knex.schema.dropTable('logs');
}