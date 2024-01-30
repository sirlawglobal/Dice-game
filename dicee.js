let randomNumber1 = Math.floor((Math.random()*6) +1 );
let randomNumber2 = Math.floor((Math.random()*6) +1 );
const player1 = document.querySelector(".img1");
const player2 = document.querySelector(".img2");
const Report = document.querySelector(".report");
const button = document.querySelector("button");
const audio = document.querySelector("audio");

console.log(audio);

let imageSource1= "images/dice" + randomNumber1 + ".png";
let imageSource2= "images/dice" + randomNumber2 + ".png" ;
player1.src="images/dice" + randomNumber1 + ".png";
player2.src="images/dice" + randomNumber2 + ".png";

if (randomNumber1 > randomNumber2){

  Report.innerHTML = "PLAYER 1 WON";
}

else if(randomNumber1===randomNumber2){
  Report.innerHTML = "DRAW";
}
else{
  
  Report.innerHTML = "PLAYER 2 WON";
};

button.onclick = function(){

  window.location.reload();
  audio.play();
}



