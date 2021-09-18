//* For changing image of dice 1
var randomNumber01 = Math.floor(Math.random() * 6) + 1;
var randomDiceImageSource01 = "./dice" + randomNumber01 + ".png";
// for changing images
var image01 = document.querySelectorAll("img")[0];
image01.setAttribute("src", randomDiceImageSource01);

//* For changing image of Dice 2
var randomNumber02 = Math.floor(Math.random() * 6) + 1;
var randomDiceImageSource02 = "./dice" + randomNumber02 + ".png";
var image02 = document.querySelectorAll("img")[1];
image02.setAttribute("src", randomDiceImageSource02);

//* Condition for changing Title on One's Win
if (randomNumber01 > randomNumber02) {
    document.querySelector("h1").innerHTML = "Player 1 Won!!";

}

else if (randomNumber01 < randomNumber02) {
    document.querySelector("h1").innerHTML = "Player 2 Won!!";
}
else {
    document.querySelector("h1").innerHTML = "Draw, Try Again!!!";
}

//* button to reload page