import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('courses', function(table) {
        table.increments("id").primary();
        table.string('code').notNullable();
        table.string('key').notNullable();
        table.string('value').notNullable();
        table.integer('coefficient').notNullable();
        table
            .integer("head_teacher_id")
            .notNullable()
            .references("user_id")
            .inTable("user_teachers")
            .onUpdate("CASCADE")
            .onDelete("SET NULL");
        table.timestamps();
    })
}

export async function down(knex): Promise<void> {
    return knex.schema.dropTable('courses');
}