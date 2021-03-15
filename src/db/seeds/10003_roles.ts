import { Knex } from "knex";

export async function seed(knex: Knex): Promise<any> {
  return knex("roles")
    .del()
    .then(() => {
      return knex("roles").insert([{ name: "Super Admin" }]);
    });
}
