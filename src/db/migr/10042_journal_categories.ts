import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('journal_categories', function(table) {
        table
            .integer("journal_id")
            .notNullable()
            .references("id")
            .inTable("journals")
            .onUpdate("CASCADE")
            .onDelete("CASCADE"); 
        table
            .integer("category_id")
            .notNullable()
            .references("id")
            .inTable("j_categories")
            .onUpdate("CASCADE")
            .onDelete("CASCADE"); 
        table.timestamps();

        table.primary(["journal_id", "category_id"]);
    })
}

export async function down(knex): Promise<void> {
    return knex.schema.dropTable('journal_categories');
}
