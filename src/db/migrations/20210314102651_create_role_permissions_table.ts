import { Knex } from "knex";



export async function up(knex): Promise<void> {
    return knex.schema.createTable('role_permissions', function(table) {
        table
        .integer("role_id")
        .references("id")
        .inTable("roles")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        table
        .integer("permission_id")
        .references("id")
        .inTable("permissions")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        table.timestamps(); // created_at, updated_at
    })
}


export async function down(knex): Promise<void> {
    return knex.schema.dropTable('role_permissions');
}