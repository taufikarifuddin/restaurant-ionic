export class UserDto{
    username:string;
    saldo:string;
    meja:string;    

    constructor(username:string = "Taufik Arifuddin",saldo:string = "Rp. 1.000,-",meja:string = "1"){
        this.username = username;
        this.saldo = saldo;
        this.meja = meja;
    }
}