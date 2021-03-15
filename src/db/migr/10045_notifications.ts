import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('notifications', function(table) {
        table.increments("id").primary();
        table
            .integer("user_id")
            .notNullable()
            .references("id")
            .inTable("users")
            .onUpdate("CASCADE")
            .onDelete("CASCADE"); 
        table.string("title").notNullable();
        table.string("description").notNullable();
        table.string("link");
        table.boolean("is_seen").notNullable().defaultTo(false);
        table.timestamps();
    })
}

export async function down(knex): Promise<void> {
    return knex.schema.dropTable('notifications');
}