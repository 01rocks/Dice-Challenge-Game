var player1Name;
var player2Name;
function playerName(){
player1Name=prompt("Enter the name of player no 1");
player2Name=prompt("Enter the name of player no 2");

document.querySelectorAll("p")[0].textContent=player1Name;
document.querySelectorAll("p")[1].textContent=player2Name;
return [player1Name, player2Name];
}



function rolldice(){

   var randomNumber1=Math.random();
  randomNumber1=randomNumber1*6+1;
  randomNumber1=Math.floor(randomNumber1);

  var randomNumber2;
  randomNumber2=Math.random();
  randomNumber2=randomNumber2*6+1;
  randomNumber2=Math.floor(randomNumber2);


  document.querySelectorAll("img")[0].setAttribute("src","images/dice" + randomNumber1 + ".png");
  document.querySelectorAll("img")[1].setAttribute("src","images/dice" + randomNumber2 + ".png");

  if(randomNumber1>randomNumber2)
  {

  document.querySelectorAll("h1")[0].textContent=player1Name +"  is winner";
  }
  else if(randomNumber2>randomNumber1)
  {
    document.querySelectorAll("h1")[0].textContent=player2Name +"  is winner";
  }
  else if (randomNumber1===randomNumber2) {
    document.querySelectorAll("h1")[0].textContent="Draw";
  }

}
