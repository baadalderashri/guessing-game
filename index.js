const answer = Math.floor(Math.random() * 100 + 1)
guesses = 0

document.getElementById("submitbtn").onclick = function () {

  let guess = document.getElementById("guessfield").value
  guesses += 1;

  if (guess == answer) {
    alert("congrats");
  }
  else if (guess < answer) {
    alert("guess higher");
  }
  else {
    alert("guess lower");
  }
}
//ammount of tries user gets 5 tries

function locationreload() {
  location.reload()

}







console.log(answer)