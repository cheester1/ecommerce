import { Producto } from "../../domain/Producto";
import { ProductoRepository } from "../../domain/ProductoRepository";


export class ProductoGetAll {

    constructor (private repository: ProductoRepository) {}

    async run ():Promise<Producto[]>{
        return this.repository.getAll()
    }


}


