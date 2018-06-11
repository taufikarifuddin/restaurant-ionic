export class FoodCategory{

    name:string;
    foods:Food[];    
    open:boolean;
   
    constructor(name:string = "default name",foods:Food[] = [],
        open:boolean = false){
        this.name = name;
        this.foods = foods;
        this.open = open;
    }


    getOrderedItem():Food[]{
        let item:Food[] = [];
        this.foods.forEach((val,index) => {
            if( val.qty > 0 ){
                item.push(val);
            }
        });

        return item;
    }

    

}

export class Food{

    name:string;
    desc:string;
    price:number;
    fotoPath:string;
    qty:number;

    constructor(name:string = "default food name",desc:string="default desc",
                    price:number=100000,foto:string="default foto",qty:number=0){
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.fotoPath = foto;
        this.qty = qty;
    }

}