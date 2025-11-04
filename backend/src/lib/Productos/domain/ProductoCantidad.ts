export class ProductoCantidad {
    value: number

    constructor (value: number) {

       this.value =value
       this.validar()
       
    }

    private validar(){
        if(this.value<0){
            throw new Error ("la cantidad del producto es menor a cero")
        }
    }
}