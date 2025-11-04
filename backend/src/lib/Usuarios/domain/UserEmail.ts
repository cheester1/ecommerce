export class UserEmail {
    value: string

    constructor (value: string) {

       this.value =value
       this.validar()
       
    }

    private validar(){
        if(!this.value.includes("@") || !this.value.includes(".")){
            throw new Error ("es5465te valor no es un correo valido")
        }
    }
}


