import { Food } from "../home/category.dto";

export class Order{
    id:number;    
    date:string;
    total:string;
    items:Food[];

    constructor(id:number = 0,date:string="DATE",total:string="Rp. 10.000,-",items:Food[] = []){
        this.id = id;
        this.date = date;
        this.total = total;
        this.items = items;
    }
}