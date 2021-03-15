import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('semesters', function(table) {
        table.increments("id").primary();
        table.string("name").notNullable()
        table.timestamp('start_date').notNullable();
        table.timestamp('end_date').notNullable();
        table.timestamps();
    })
}

export async function down(knex): Promise<void> {
    return knex.schema.dropTable('semesters');
}