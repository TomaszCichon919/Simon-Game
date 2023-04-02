
var started = false
var level = 0;
var userClickedPattern = [];
var gamePattern =[];
var buttonColors =["red","blue","green", "yellow"];
function nextSequence (){
  level = (level+1);
  $("h1").text("level"+ " "+ level);
    var randomNumber = Math.floor((Math.random() * 4));
var randomChosenColor= buttonColors[randomNumber];
gamePattern.push(randomChosenColor);
var randomid = "#"+randomChosenColor;
$(randomid).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
playSound (randomid);

}

function playSound (buttonResult){
    
   if (buttonResult== "#blue")
    {
    var tom1 = new Audio("sounds/blue.mp3");tom1.play();
console.log (buttonResult);}
   else if (buttonResult== "#green")
    {
    var tom2 = new Audio("sounds/green.mp3");tom2.play();
    console.log (buttonResult);}
    else if (buttonResult== "#red")
    {
    var tom3 = new Audio("sounds/red.mp3");tom3.play();
    console.log (buttonResult);}
    else if (buttonResult== "#yellow")
    {
    var tom4 = new Audio("sounds/yellow.mp3");tom4.play();
    console.log (buttonResult);}
    else {
      var wrong = new Audio("sounds/wrong.mp3");wrong.play();
      console.log (buttonResult);
    }
}
$(".btn").click(function() {
  var userChosenColor =this.id;
  userClickedPattern.push(userChosenColor);
  var name = "#"+ userChosenColor;
  playSound (name);
animatePress (name);
checkAnswer (userClickedPattern.length-1);});
  function animatePress(name){
  $(name).addClass("pressed");
  setTimeout (function () {  $(name).removeClass("pressed")}, 100);
 };





$("body").keydown(function(e) {
  if(e.which == 32) {
      nextSequence();
  }
});


function checkAnswer (currentlevel){
  if (gamePattern[currentlevel] === userClickedPattern[currentlevel]){
    console.log ("succes");
    if (userClickedPattern.length===gamePattern.length)
    {setTimeout (nextSequence, 1000);
    userClickedPattern =[];};
}


else  {console.log ("wrong");
var wrong = new Audio("sounds/wrong.mp3");wrong.play();
$("body").addClass("game-over");
setTimeout (function (){ $("body").removeClass("game-over");}, 200);
$("h1").text("Game Over, Press Enter to continue");
startOver ();

}
}
function startOver () {
  level=0;
  gamePattern = [];
  userClickedPattern= [];
  
$("body").keydown( function(e) {
  if(e.which == 13) {
  $("h1").text("Press Space to Start");}})
  

}


