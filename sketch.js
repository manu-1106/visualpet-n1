//Create variables here
var dog,happyDog,foodS,foodStock,database,data;
function preload()
{
  dog=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
	createCanvas(500, 500);
  dog1=createSprite(400,250,20,20);
  dog1.scale=0.2
  happyDog1=createSprite(400,250,20,20);
  happyDog1.scale=0.2;
  database=firebase.database();
  foodStock=database.ref("food");
  foodStock.on("value",function (data){
    foodS=data.val();
  });
 //readStock();
// writeStock(foodS);
}


function draw() {  
background(rgb(46,139,87))

if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  happyDog1.addImage(happyDog);
  foodStock=firebase.food-1;
  happyDog1.display();
  dog1.display=false();
}
else{
  dog1.addImage(dog);
dog1.display();
}
  drawSprites();
  fill("black")
  text("FOOD REMAINING:"+foodS,200,250)
  stroke(4)
  text("note:press up arrow to feed your dog",200,100)
  
  
 
  //add styles here

}


function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
  database.ref("/").update({
    food:x
  })
}



