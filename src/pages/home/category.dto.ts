export class FoodCategory{

    name:string;
    foods:Food[];    

    constructor(name:string = "default name",foods:Food[] = []){
        this.name = name;
        this.foods = foods;
    }

}

export class Food{

    name:string;
    desc:string;
    price:string;
    fotoPath:string;

    constructor(name:string = "default food name",desc:string="default desc",
                    price:string="Rp.100000",foto:string="default foto"){
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.fotoPath = foto;
    }

}