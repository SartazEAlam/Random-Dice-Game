var randomeNumber1 = Math.floor(Math.random()* 6 +1);

var randomeImage1 = "dice"+ randomeNumber1+".png";

  document.querySelector(".img1").setAttribute("src", "./images/" +randomeImage1);


var randomeNumber2 = Math.floor(Math.random()* 6 +1);

var randomeImage2 = "dice"+ randomeNumber2+".png";

  document.querySelector(".img2").setAttribute("src", "./images/" +randomeImage2);


if (randomeNumber1 > randomeNumber2)(
  document.querySelector("h1").textContent = "🥇Player 1 wins!"
)
else if(randomeNumber2 > randomeNumber1)(
  document.querySelector("h1").textContent = "Player 2 wins! 🥇"
)
else{
  document.querySelector("h1").textContent = "It's a Tie! ⭐"
}