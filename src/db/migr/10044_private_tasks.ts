import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('private_tasks', function(table) {
        table.increments("id").primary();
        table
            .integer("user_id")
            .notNullable()
            .references("id")
            .inTable("users")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");  
        table.string("title").notNullable();
        table.string("description");
        table.string('priority').notNullable().defaultTo('default');
        table.boolean("is_resolved").notNullable().defaultTo(false);
        table.timestamp("deadline");
        table.timestamps();
    })
}

export async function down(knex): Promise<void> {
    return knex.schema.dropTable('private_tasks');
}