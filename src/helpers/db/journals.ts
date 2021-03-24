import { TypesDB } from '.';
import knex from "../../db/connect";
import { TABLE_NAMES } from "../../config";
import { NotFoundError } from '../exceptions';

export const list = 
    async (): Promise<Array<Partial<TypesDB.JournalsType>>> =>
        await knex(TABLE_NAMES.JOURNALS).select('*')
                .then(journals => journals ?? Promise.reject(new NotFoundError))
                .then(async (journals: any) => {
                    for (const journal of journals) {
                        journal.categories = 
                            await knex(TABLE_NAMES.JOURNAL_CATEGORIES)
                                .innerJoin(
                                    TABLE_NAMES.J_CATEGORIES, 
                                    `${TABLE_NAMES.JOURNAL_CATEGORIES}.category_id`, `${TABLE_NAMES.J_CATEGORIES}.id`, 
                                )
                                .select('*')
                                .where(`${TABLE_NAMES.JOURNAL_CATEGORIES}.journal_id`, journal.id)
                        journal.tags = 
                            await knex(TABLE_NAMES.JOURNAL_TAGS)
                                .innerJoin(
                                    TABLE_NAMES.J_TAGS, 
                                    `${TABLE_NAMES.JOURNAL_TAGS}.tag_id`, `${TABLE_NAMES.J_TAGS}.id`, 
                                )
                                .select('*')
                                .where(`${TABLE_NAMES.JOURNAL_TAGS}.journal_id`, journal.id)
                    }
                    return journals;
                })

export const retrieve = 
    async (id: number): Promise<TypesDB.JournalsType> => 
        await knex(TABLE_NAMES.JOURNALS).select('*')
            .where({id}).first()
            .then(journal => journal ?? Promise.reject(new NotFoundError))
                    .then(async (journal: any) => {
                        journal.categories = 
                            await knex(TABLE_NAMES.JOURNAL_CATEGORIES)
                                .innerJoin(
                                    TABLE_NAMES.J_CATEGORIES, 
                                    `${TABLE_NAMES.JOURNAL_CATEGORIES}.category_id`, `${TABLE_NAMES.J_CATEGORIES}.id`, 
                                )
                                .select('*')
                                .where(`${TABLE_NAMES.JOURNAL_CATEGORIES}.journal_id`, journal.id)
                        journal.tags = 
                            await knex(TABLE_NAMES.JOURNAL_TAGS)
                                .innerJoin(
                                    TABLE_NAMES.J_TAGS, 
                                    `${TABLE_NAMES.JOURNAL_TAGS}.tag_id`, `${TABLE_NAMES.J_TAGS}.id`, 
                                )
                                .select('*')
                                .where(`${TABLE_NAMES.JOURNAL_TAGS}.journal_id`, journal.id)
                        return journal;
                    })