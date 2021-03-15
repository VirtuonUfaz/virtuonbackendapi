import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('participation', function(table) {
       table
        .integer("event_id")
        .notNullable()
        .references("event_id")
        .inTable("event_classes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
       table
        .integer("user_id")
        .notNullable()
        .references("user_id")
        .inTable("user_students")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        table.timestamps();

        table.primary(["event_id", "user_id"]);
    })
}

export async function down(knex): Promise<void> {
    return knex.schema.dropTable('participation');
}