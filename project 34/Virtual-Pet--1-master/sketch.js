//Create variables here
var dog, happyDog, database, foodS, foodStock;

function preload()
{
  //load images here
  happyDog = loadImage('images/dogImg.png');
  Dog = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500,500);
  var dog = createSprite(250,250);
  dog.addImage(Dog);
  firebase.database = database;
  foodStock = database.ref('food');
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog=addImage(happydog);
}

  drawSprites();
  //add styles here
Text(foodStock);
fill("white");
textSize(10);
stroke("black");
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  } else {
    x=x-1
  }
  database.ref('/').update({
    food:x
  })
}

