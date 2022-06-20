document.addEventListener("DOMContentLoaded", () => {
  getRandomJoke();
});

function parseResponse(response) {
  return response.json();
}

function handleError(error) {
  throw error;
}

const BASE_URL = "https://api.chucknorris.io/jokes/random";

function getRandomJoke() {
  fetch(BASE_URL)
    .then(parseResponse)
    .then((joke) => {
      //   console.log(joke);
      let jokeContent = document.querySelector(".value");
      jokeContent.innerText = joke.value;
    })
    .catch(handleError);
}
