export class UserFecNac{
    value: Date;

    constructor (value: Date) {

       this.value =value
       this.validar()
       
    }

    private validar(){
        if(this.value > new Date()){
            throw new Error ("la decha es incorrecta")
        }
    }
}


