
var database;
var gameState=0,playerCount;
var form,player,game;
function setup(){
    createCanvas(400,400);
    database=firebase.database();
   game=new Game();
game.start();
    
}

function draw(){
   
    
    
}
