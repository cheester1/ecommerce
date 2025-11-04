import { Producto } from "./Producto";
import { ProductoId } from "./ProductoId";

export interface ProductoRepository{
    create (user:Producto):Promise<void>
    getAll ():Promise<Producto[]>;
    getOneById(id:ProductoId):Promise<Producto|null>;
    edit (user:Producto):Promise<void>
    delete (id:ProductoId):Promise<void>
}