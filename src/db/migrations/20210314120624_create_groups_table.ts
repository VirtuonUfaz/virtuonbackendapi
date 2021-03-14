import { Knex } from "knex";



export async function up(knex): Promise<void> {
    return knex.schema.createTable('groups', function(table) {
        table.increments();
        table.string("code")
        table.string("name")
        table.enu('year', ['l0', 'l1','l2','l3','master']).notNullable();


        table.timestamps(); // created_at, updated_at
    })
}


export async function down(knex): Promise<void> {
    return knex.schema.dropTable('groups');
}