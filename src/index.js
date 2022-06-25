document.addEventListener("DOMContentLoaded", () => {
  e.preventDefault();
  searchJokes();
  addPersonalizedJoke();
  addComment();
  getRandomJoke();
  getRandomJokeSpecifyCategory();
  showCategories();
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

//SET-UP SEARCH JOKE
//==================
let queryJoke = document.querySelector("#query-joke");
let query;
let queryJokes;
query = queryJoke.addEventListener("submit", (e) => {
  e.preventDefault();
  if (e.target.textsearch.value === "") {
    query = "computer";
    queryJokes = `search?query=${query}`;
  } else {
    query = e.target.textsearch.value;
    queryJokes = `search?query=${query}`;
  }

  searchJokes();
});

//SEARCH JOKES
//================
function searchJokes() {
  fetch(BASE_URL + `${queryJokes}`)
    .then(parseResponse)
    .then((searchJokesByKeyword) => {
      let jokeContent = document.querySelector(".joke-content");
      jokeContent.innerText = searchJokesByKeyword.result[0].value;
    })
    .catch(handleError);
}

//GET RANDOM JOKE
//==================
function getRandomJoke() {
  fetch(BASE_URL + `${jokesRandom}`)
    .then(parseResponse)
    .then((randomJoke) => {
      let jokeContent = document.querySelector(".joke-content");
      jokeContent.innerText = randomJoke.value;
    })
    .catch(handleError);
}

//GET RANDOM JOKE BY CATEGORY
//==============================
function getRandomJokeSpecifyCategory() {
  fetch(BASE_URL + `${jokesRandomSpecifyCategory}`)
    .then(parseResponse)
    .then((randomJokeSpecifyCategory) => {
      let jokeContent = document.querySelector(".joke-content");
      jokeContent.innerText = randomJokeSpecifyCategory.value;
    })
    .catch(handleError);
}

//DISPLAY CATEGORIES
//======================
function showCategories() {
  fetch(BASE_URL + `${jokesCategories}`)
    .then(parseResponse)
    .then((jokeCategories) => {
      jokeCategories.forEach((jokeCategory) => {
        const categoryList = document.getElementById("categories");
        let eachCategory = document.createElement("li");
        eachCategory.className = "category";
        eachCategory.innerText = jokeCategory.toUpperCase();

        categoryList.append(eachCategory);

        eachCategory.addEventListener("click", () => {
          getRandomJokeSpecifyCategory();
        });
      });
    })

    .catch(handleError);
}

// RANDOMIZE BUTTON FUNCTIONALITY
//===============================
const randomize = document.getElementById("reload-joke");
randomize.addEventListener("click", (e) => {
  e.preventDefault();
  getRandomJoke();
});

// RATING IMPLEMENTATION
//=======================
let ratingDisplay = document.querySelector(".rating");
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
  const reactionEmojis = [
    `<i class="fa fa-ban" aria-hidden="true"></i>`,
    `<i class="fa fa-frown-o"aria-hidden="true"></i>`,
    `<i class="fa fa-meh-o" aria-hidden="true"></i>`,
    `<i class="fa fa-smile-o" aria-hidden="true"></i>`,
    `<i class="fa fa-fire" aria-hidden="true"></i>`,
  ];
  const ratingVal = e.target.dataset.rating;
  totalStar = ratingVal;
  fill(totalStar);
  ratingDisplay.innerHTML = reactionEmojis[ratingVal - 1];
}

//ADD AND DISPLAY COMMENTS
//=========================

function addComment() {
  let submitComment = document.querySelector("#add-comment-form");

  let newUserDisplay = document.querySelector(".name_says");

  let newCommentDisplay = document.querySelector("#comment-display");
  submitComment.addEventListener("submit", (e) => {
    e.preventDefault();
    newUserDisplay.innerText = e.target.name.value;
    newCommentDisplay.innerText = e.target.comment_area.value;

    submitComment.reset();
  });
}

//ADD AND DISPLAY PERSONALIZED JOKE
//==================================

function addPersonalizedJoke() {
  let submitPersonalisedJoke = document.querySelector("#add-personal-joke");

  let newJoke = document.querySelector(".joke-content");
  submitPersonalisedJoke.addEventListener("submit", (e) => {
    e.preventDefault();
    newJoke.innerText = e.target.personalized_joke.value;

    submitPersonalisedJoke.reset();
  });
}
