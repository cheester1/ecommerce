export class UserPassword {
    value: string

    constructor (value: string) {

       this.value =value
       this.validar()
       
    }

    private validar(){
        if(this.value.length<15){
            throw new Error ("la contarseña tiene que ser mayor a 15 digitos")
        }
    }
}


