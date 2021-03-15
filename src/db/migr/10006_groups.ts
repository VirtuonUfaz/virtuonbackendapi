import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('groups', function(table) {
        table.increments();
        table.string("code").notNullable();
        table.string("name").notNullable();
        table.enu('year', ['l0', 'l1','l2','l3','master', 'graduated']).notNullable();
        table.timestamps();
    })
}

export async function down(knex): Promise<void> {
    return knex.schema.dropTable('groups');
}