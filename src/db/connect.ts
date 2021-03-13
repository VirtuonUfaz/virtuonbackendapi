import * as knex from "knex";
import { attachPaginate } from "knex-paginate";
import {development, production} from '../../knexfile'
import {isDev} from '../helpers/environment'
attachPaginate();
export default knex.knex(isDev() ? development : production);
