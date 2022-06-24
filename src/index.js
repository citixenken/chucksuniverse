document.addEventListener("DOMContentLoaded", () => {
  // e.preventDefault();
  // queryTerm();
  addPersonalizedJoke();
  // addComment();
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

let queryField = document.querySelector(".search");

let query = "computer";

// let queryTerm = () => {
//   // let queryField = document.querySelector("#textsearch").value;
//   return queryField == "laptop";
// };

// let query = queryTerm();
// console.log(query);
let queryJokes = `search?query=${query}`;

//1. GET RANDOM JOKE
//==================
function getRandomJoke() {
  fetch(BASE_URL + `${jokesRandom}`)
    .then(parseResponse)
    .then((randomJoke) => {
      // console.log(randomJoke);
      let jokeContent = document.querySelector(".joke-content");
      jokeContent.innerText = randomJoke.value;
    })
    .catch(handleError);
}

//2. GET RANDOM JOKE BY CATEGORY
//==============================
function getRandomJokeSpecifyCategory() {
  fetch(BASE_URL + `${jokesRandomSpecifyCategory}`)
    .then(parseResponse)
    .then((randomJokeSpecifyCategory) => {
      //   console.log(randomJokeSpecifyCategory);
    })
    .catch(handleError);
}

//3. DISPLAY CATEGORIES
//======================
function showCategories() {
  fetch(BASE_URL + `${jokesCategories}`)
    .then(parseResponse)
    .then((jokeCategories) => {
      //   console.log(jokeCategories);
    })
    .catch(handleError);
}

//4. SEARCH JOKES
//================
function searchJokes() {
  fetch(BASE_URL + `${queryJokes}`)
    .then(parseResponse)
    .then((searchJokes) => {
      let retrieveJokeButton = document.querySelector(".retrieve-joke");
      retrieveJokeButton.addEventListener("submit", (e) => {
        e.preventDefault;
        let jokeContent = document.querySelector(".joke-content");
        let retrievedAnswer = searchJokes.result[0].value;
        jokeContent.innerText = retrievedAnswer;
      });
    })
    .catch(handleError);
}

// RANDOMIZE BUTTON FUNCTIONALITY
const randomize = document.getElementById("reload-joke");
randomize.addEventListener("click", (e) => {
  e.preventDefault();
  getRandomJoke();
});

// RATING IMPLEMENTATION
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
  let userNameDisplay = document.querySelector(".name-says");

  let userCommentDisplay = document.querySelector("#comment-display");

  let addCommentButton = document.querySelector(".add-comment");
  addCommentButton.addEventListener("submit", (e) => {
    e.preventDefault();

    let userNameCreateDisplay = document.createElement("h4");
    let userName = document.querySelector("#name").value;
    userNameDisplay.innerText = userName;
    userNameCreateDisplay.append(userNameDisplay);

    let userCommentCreateDisplay = document.createElement("p");
    let userComment = document.querySelector(".comment").value;
    userCommentDisplay.innerText = userComment;
    userCommentCreateDisplay.append(userCommentDisplay);
  });
}

//ADD AND DISPLAY PERSONALIZED JOKE
//==================================

function addPersonalizedJoke() {
  let submitPersonalisedJoke = document.querySelector("#add-personal-joke");

  let newJoke = document.querySelector(".joke-content");
  submitPersonalisedJoke.addEventListener("submit", (e) => {
    e.preventDefault();
    newJoke.innerText = e.target.personalized_comment.value;
    // console.log(e.target.personalized_comment.value);

    submitPersonalisedJoke.reset();
  });
}
