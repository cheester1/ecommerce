export class ProductoName {
    value: string

    constructor (value: string) {

       this.value =value
       this.validar()
       
    }

    private validar(){
        if(this.value.length<3){
            throw new Error ("el nombre de producto tiene menos de 3 caracteres")
        }
    }
}