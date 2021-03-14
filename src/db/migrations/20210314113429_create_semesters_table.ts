import { Knex } from "knex";



export async function up(knex): Promise<void> {
    return knex.schema.createTable('semesters', function(table) {
        table.increments();
        table.string("name")

        table.timestamps(); // created_at, updated_at
    })
}


export async function down(knex): Promise<void> {
    return knex.schema.dropTable('semesters');
}