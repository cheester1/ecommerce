export class UserId {
    value: string

    constructor (value: string) {

       this.value =value
       this.validar()
       
    }

    private validar(){
        if(this.value.length>10){
            throw new Error ("Id del usuario mayor a 10 digitos")
        }
    }
}


