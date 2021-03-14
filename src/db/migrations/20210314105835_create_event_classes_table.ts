import { Knex } from "knex";



export async function up(knex): Promise<void> {
    return knex.schema.createTable('event_classes', function(table) {
        table
        .integer("event_id")
        .primary()
        .references("id")
        .inTable("events")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");    
         table
        .integer("teacher_id")
        .references("user_id")
        .inTable("user_teachers")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");               
         table
        .integer("subject_id")
        .references("id")
        .inTable("courses")
        .onUpdate("CASCADE")
        .onDelete("CASCADE"); 
         table
        .integer("group_id")
        .references("id")
        .inTable("groups")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");         
        table.timestamps(); // created_at, updated_at
    })
}


export async function down(knex): Promise<void> {
    return knex.schema.dropTable('event_classes');
}