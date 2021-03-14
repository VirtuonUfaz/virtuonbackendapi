// import { Knex } from "knex";


export async function up(knex): Promise<void> {
    return knex.schema.createTable('user_teachers', function(table) {
        table
        .integer("user_id")
        .primary()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        table.enu('Speciality', ['CS', 'GEO', 'CH','PE']).notNullable();
        table.timestamps(); // created_at, updated_at
    })
}


export async function down(knex): Promise<void> {
    return knex.schema.dropTable('user_teachers');
}