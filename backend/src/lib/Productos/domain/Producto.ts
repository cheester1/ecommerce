
import { ProductoCantidad } from "./ProductoCantidad"
import { ProductoCategoria } from "./ProductoCategoria"
import { ProductoDescripcion } from "./ProductoDescripcion"
import {ProductoId} from "./ProductoId"
import { ProductoMarca } from "./ProductoMarca"
import { ProductoName } from "./ProductoName"
import { ProductoPrecio } from "./ProductoPrecio"

export class Producto {
    id: ProductoId
    name: ProductoName
    categoria:ProductoCategoria
    descripcion: ProductoDescripcion
    marca: ProductoMarca
    cantidad: ProductoCantidad
    precio: ProductoPrecio

    constructor (
        id: ProductoId,
        name: ProductoName,
        categoria:ProductoCategoria,
        descripcion: ProductoDescripcion,
        marca: ProductoMarca,
        cantidad: ProductoCantidad,
        precio: ProductoPrecio) {

       this.id =id 
       this.name =name 
       this.categoria =categoria 
       this.descripcion =descripcion 
       this.marca =marca
       this.cantidad =cantidad
       this.precio =precio
       
       
    }

    public datoscompletos() {

        return `${this.id} - ${this.name} - ${this.descripcion}  `

    }
}


