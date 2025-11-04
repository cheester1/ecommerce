export class ProductoDescripcion {
    value: string

    constructor (value: string) {

       this.value =value
       this.validar()
       
    }

    private validar(){
        if(this.value.length<30){
            throw new Error ("el nombre de producto tiene menos de 30 caracteres")
        }
    }
}