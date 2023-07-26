/**
 * Exposes an Observable DataSource and accepts normalized commands
 */

import { Commandable } from "./command";
import { DataSource } from "./data-source";

export interface ReactiveService<DataType>
       extends Commandable, DataSource<DataType>{
}


