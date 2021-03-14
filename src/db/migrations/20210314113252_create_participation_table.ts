import { Knex } from "knex";



export async function up(knex): Promise<void> {
    return knex.schema.createTable('participation', function(table) {
       table
        .integer("event_id")
        .primary()
        .references("event_id")
        .inTable("event_classes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
       table
        .integer("user_id")
        .primary()
        .references("user_id")
        .inTable("user_students")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        table.timestamps(); // created_at, updated_at
    })
}


export async function down(knex): Promise<void> {
    return knex.schema.dropTable('participation');
}