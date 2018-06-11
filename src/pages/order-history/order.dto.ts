export class Order{
    id:number;    
    date:string;
    total:string;

    constructor(id:number = 0,date:string="DATE",total:string="Rp. 10.000,-"){
        this.id = id;
        this.date = date;
        this.total = total;
    }
}