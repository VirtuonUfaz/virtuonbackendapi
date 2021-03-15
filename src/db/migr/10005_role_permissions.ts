import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('role_permissions', function(table) {
        table
            .integer("role_id")
            .notNullable()
            .references("id")
            .inTable("roles")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table
            .integer("permission_id")
            .notNullable()
            .references("id")
            .inTable("permissions")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table.timestamps();
        
        table.primary(["role_id", "permission_id"]);
    })
}

export async function down(knex): Promise<void> {
    return knex.schema.dropTable('role_permissions');
}