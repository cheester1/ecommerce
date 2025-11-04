import { Producto } from "../../domain/Producto";
import { ProductoCantidad } from "../../domain/ProductoCantidad";
import { ProductoCategoria } from "../../domain/ProductoCategoria";
import { ProductoDescripcion } from "../../domain/ProductoDescripcion";
import { ProductoId } from "../../domain/ProductoId";
import { ProductoMarca } from "../../domain/ProductoMarca";
import { ProductoName } from "../../domain/ProductoName";
import { ProductoPrecio } from "../../domain/ProductoPrecio";
import { ProductoRepository } from "../../domain/ProductoRepository";


export class ProductoCreate {

    constructor (private repository: ProductoRepository) {

       
    }
    async run (
        id: string,
        name: string,
        categoria: string,
        descripcion: string,
        marca: string,
        cantidad: number,
        precio: number

    ):Promise<void>{
        const producto = new Producto (
            new ProductoId(id),
            new ProductoName(name),
            new ProductoCategoria(categoria),
            new ProductoDescripcion(descripcion),
            new ProductoMarca(marca),
            new ProductoCantidad(cantidad),
            new ProductoPrecio(precio)

        );return this.repository.create(producto)
    }


}


