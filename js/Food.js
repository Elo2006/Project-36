class Food{

    constructor(){

    
    this.milkImage=loadImage("Images/Milk.png")
    var foodStock;
    var lastfed;

    }

    updateFoodCount(foodS){
        this.foodStock=foodS;
    }

    display(){

        var x=80,y=100;

        imageMode(CENTER);
       

        if(this.foodStock != 0){
            for(var i = 0; i < this.foodStock; i++){
                if(i % 10 === 0){
                    x=80;
                    y=y+50;
                }
                image(this.milkImage,x,y,50,50);
                x=x+30;
            }
        }
    }
}