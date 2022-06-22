document.addEventListener("DOMContentLoaded", () => {
  getRandomJoke();
  getRandomJokeSpecifyCategory();
  showCategories();
  searchJokes();
});

function parseResponse(response) {
  return response.json();
}

function handleError(error) {
  throw error;
}

const BASE_URL = "https://api.chucknorris.io/jokes/";
const jokesRandom = "random";
const jokesCategories = "categories";
let category = "dev";
const jokesRandomSpecifyCategory = `random?category=${category}`;
let query = "nft";
const queryJokes = `search?query=${query}`;

function getRandomJoke() {
  fetch(BASE_URL + `${jokesRandom}`)
    .then(parseResponse)
    .then((randomJoke) => {
      let jokeContent = document.querySelector(".joke-content");
      jokeContent.innerText = randomJoke.value;
    })
    .catch(handleError);
}

function getRandomJokeSpecifyCategory() {
  fetch(BASE_URL + `${jokesRandomSpecifyCategory}`)
    .then(parseResponse)
    .then((randomJokeSpecifyCategory) => {
      //   console.log(randomJokeSpecifyCategory);
    })
    .catch(handleError);
}

function showCategories() {
  fetch(BASE_URL + `${jokesCategories}`)
    .then(parseResponse)
    .then((jokeCategories) => {
      //   console.log(jokeCategories);
    })
    .catch(handleError);
}

function searchJokes() {
  fetch(BASE_URL + `${queryJokes}`)
    .then(parseResponse)
    .then((searchJokes) => {
      console.log(searchJokes);
    })
    .catch(handleError);
}

// RANDOMIZE BUTTON FUNCTIONALITY
const randomize = document.getElementById("reload-joke");
randomize.addEventListener("click", () => {
  getRandomJoke();
});

// RATING IMPLEMENTATION
let ratDisplay = document.querySelector(".rating");
let stars = document.querySelectorAll(".fa-star-o");
let totalStar = 0;

stars.forEach((star, index) => {
  star.dataset.rating = index + 1;
  star.addEventListener("mouseover", onMouseOver);
  star.addEventListener("click", onClick);
  star.addEventListener("mouseleave", onMouseLeave);
});

function onMouseOver(e) {
  const ratingVal = e.target.dataset.rating;
  if (!ratingVal) {
    return;
  } else {
    fill(ratingVal);
  }
}

function fill(ratingVal) {
  for (let i = 0; i < 5; i++) {
    if (i < ratingVal) {
      stars[i].classList.replace("fa-star-o", "fa-star");
    } else {
      stars[i].classList.replace("fa-star", "fa-star-o");
    }
  }
}

function onMouseLeave(e) {
  fill(totalStar);
}

function onClick(e) {
  const ratingVal = e.target.dataset.rating;
  totalStar = ratingVal;
  fill(totalStar);
  ratDisplay.innerHTML = ratingVal;
}
