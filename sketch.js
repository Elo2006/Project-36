var dog,sadDog,happyDog;
var buttonFeed,buttonFoodAdd,foodObj;
var foodS;
var lastFed;

const database=firebase.database();

function preload(){
  sadDog = loadImage("Images/Dog.png");
  happyDog = loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(800,400);
  
  dog = createSprite(600,200,160,160);
  dog.addImage(sadDog);
  dog.scale=0.15;

  buttonFeed = createButton('Feed Dog');
  buttonFeed.position(355,100);
  buttonFeed.mousePressed(feedDog);
  
  buttonFoodAdd = createButton('Add Food')
  buttonFoodAdd.position(450,100);
  buttonFoodAdd.mousePressed(addFood);

  foodObj=new Food();

  database.ref('Food').on("value",function(data){
  foodS=data.val();
  foodObj.updateFoodCount(foodS)
   
  })

  database.ref('FeedTime').on("value",function(data){
    lastFed=data.val();

        
    })


}

function draw() {
  background("crimson");
  foodObj.display()

  textSize(15)
  fill("white")
  if(lastFed < 12)
  text("Last fed at "+lastFed+" AM",200,35)

  if(lastFed === 0)
  text("Last Fed at 12 AM",200,35);

  if(lastFed>=12){
    t=lastFed-12
  text("Last Fed at "+t +" PM", 200,35);
  }

  drawSprites();

  
}

function addFood(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}

function feedDog(){
  if(foodS>0){
  dog.addImage(happyDog);
  foodS=foodS-1;
  foodObj.updateFoodCount(foodS)
  database.ref().update({
    Food:foodS

  })

  database.ref().update({

  })
}



 }



