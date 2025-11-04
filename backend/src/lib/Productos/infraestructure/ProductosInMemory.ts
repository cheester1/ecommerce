import { Producto } from "../domain/Producto";
import { ProductoId } from "../domain/ProductoId";
import { ProductoRepository } from "../domain/ProductoRepository";

export class ProductosInMemory implements ProductoRepository{
    private productos:Producto[] = [];

    async create(producto: Producto): Promise<void> {
        this.productos.push(producto)
    }
    
    async getAll(): Promise<Producto[]>{

        return this.productos;
    }
    async getOneById(id: ProductoId): Promise<Producto | null> {
        return this.productos.find((producto) => producto.id.value === id.value)|| null
    }

    async edit(producto:Producto): Promise<void>{
        const index = this.productos.findIndex((p) => p.id.value == producto.id.value);
    }

    async delete(id:ProductoId): Promise<void>{
        this.productos = this.productos.filter((producto) => producto.id.value != id.value);
    }


}