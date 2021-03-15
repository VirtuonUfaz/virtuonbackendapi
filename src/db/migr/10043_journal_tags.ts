import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('journal_tags', function(table) {
        table
        .integer("journal_id")
        .notNullable()
        .references("id")
        .inTable("journals")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        table
        .integer("tag_id")
        .notNullable()
        .references("id")
        .inTable("j_tags")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        table.timestamps();

        table.primary(["journal_id", "tag_id"]);
    })
}

export async function down(knex): Promise<void> {
    return knex.schema.dropTable('journal_tags');
}
