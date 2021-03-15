import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('group_courses', function(table) {
        table
            .integer("group_id")
            .notNullable()
            .references("id")
            .inTable("groups")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table
            .integer("course_id")
            .notNullable()
            .references("id")
            .inTable("courses")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table.timestamps();

        table.primary(["group_id", "course_id"]);
    })
}

export async function down(knex): Promise<void> {
    return knex.schema.dropTable('group_courses');
}