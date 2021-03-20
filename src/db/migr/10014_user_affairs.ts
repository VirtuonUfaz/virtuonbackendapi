import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('user_affairs', function(table) {
        table
            .integer("user_id")
            .primary()
            .notNullable()
            .references("id")
            .inTable("users")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table.enu('year', ['l0', 'l1','l2','l3','master', 'graduated']).notNullable();
        table.string('affairs_id').notNullable().unique();
        table.timestamps();
    })
}

export async function down(knex): Promise<void> {
    return knex.schema.dropTable('user_affairs');
}