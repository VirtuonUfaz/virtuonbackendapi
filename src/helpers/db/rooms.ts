import { TypesDB } from ".";
import { TABLE_NAMES } from "../../config";
import knex from "../../db/connect";

export const get = async (): Promise<Array<TypesDB.RoomsType>> =>
    await knex(TABLE_NAMES.ROOMS).select("*")
        .leftJoin(TABLE_NAMES.ROOM_TYPES, `${TABLE_NAMES.ROOMS}.room_type_id`, `${TABLE_NAMES.ROOM_TYPES}.id`);

  
export const create = async (
    room: Partial<TypesDB.RoomsType>
): Promise<TypesDB.PrivateTasksType> =>
    await knex(TABLE_NAMES.ROOMS).insert(room);
    
export const update = async (
    room: Partial<TypesDB.RoomsType>
): Promise<number> =>
    await knex(TABLE_NAMES.ROOMS).update(room).where("id", room.id);
    
export const remove = async (
    room: Partial<TypesDB.RoomsType>
): Promise<number> =>
    await knex(TABLE_NAMES.ROOMS).delete().where("id", room.id);