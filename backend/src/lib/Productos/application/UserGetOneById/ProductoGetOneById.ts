import { Producto } from "../../domain/Producto";
import { ProductoErrorValue } from "../../domain/ProductoErrorValue";
import { ProductoId } from "../../domain/ProductoId";
import { ProductoRepository } from "../../domain/ProductoRepository";

export class ProductoGetOneById {

    constructor (private repository: ProductoRepository) {}

    async run (id:string):Promise<Producto>{
        
        const producto = await this.repository.getOneById( new ProductoId(id));
        if(!producto) throw new ProductoErrorValue("producto no encontrado");
        return producto
        
    }


}


