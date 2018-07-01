export class UserDto{
    username:string;
    saldo:string;
    isAdmin:boolean;

    constructor(username:string = "Taufik Arifuddin",saldo:string = "Rp. 1.000,-",isAdmin:boolean=false){
        this.username = username;
        this.saldo = saldo;
        this.isAdmin = false;
    }
}