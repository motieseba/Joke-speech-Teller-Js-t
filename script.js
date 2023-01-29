const jokeBtn = document.querySelector("#joke-btn");
const jokeDisplay = document.querySelector("#joke-display");
const jokeContainer = document.querySelector("#joke-container");
const audioElement = document.getElementById("audio");

function tellme(joke) {

  
}
jokeBtn.addEventListener("click", async function() {

    const response = await fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist");
    const joke = await response.json();
    if (!joke.setup) {
      jokeDisplay.textContent = joke.joke;
      const msg = new SpeechSynthesisUtterance(joke.joke);
      window.speechSynthesis.speak(msg);
    } else {
      jokeDisplay.textContent = joke.setup;
      var newElement = document.createElement('div');
      newElement.setAttribute('class', 'delivery');
      newElement.setAttribute('id', 'joke-display');
      newElement.innerHTML = joke.delivery;
      
      const msg = new SpeechSynthesisUtterance(joke.setup);
      window.speechSynthesis.speak(msg);
      setTimeout(function() {
        // code to be executed after 5 seconds
        jokeContainer.appendChild(newElement);
        const deliveryMsg = new SpeechSynthesisUtterance(joke.delivery);
        audioElement.src = deliveryMsg
        window.speechSynthesis.speak(deliveryMsg);
      }, 5000);
    }
});
