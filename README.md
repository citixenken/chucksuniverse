<p align="center"><img src="https://img.icons8.com/plasticine/344/chuck-norris.png" /></p>

<h1 align="center">Chuck's Universe</h1>

<p align="center"> It's Chuck's Universe...and we're all just living in it. </p>

<hr/>

<p> Using the free Chuck Norris JSON <a href="https://api.chucknorris.io/">API</a>, this project seeks to strengthen your Chuck Norris' knowledge based off his stellar accomplishments! From driving a solar-powered car at night to knowing the last digit of Pi; Chuck has achieved it all. So grab your rubber ducky, click away, and have a laugh!</p>

<h3>Usage</h3>

<ul>
  <li>Retrieve a random chuck joke in JSON format</li>
  
  ```html
  
  GET https://api.chucknorris.io/jokes/random
  
  ```
  
  Example response:
  
  ```html
  
  {
"icon_url" : "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
"id" : "ee-m6HnsRDK_6mvTj4sNLg",
"url" : "",
"value" : "Chuck Norris' sex is on fire."
}
  
  ```
  
  <li>Retrieve a random chuck norris joke from a given category</li>
  
  ```html
  
  GET https://api.chucknorris.io/jokes/random?category={category}
  
  ```
  <li>Retrieve a list of available categories.</li>
  
  ```html
  
  GET https://api.chucknorris.io/jokes/categories
  
  ```
  
  <li>Free text search</li>
  
  ```html
  
  GET https://api.chucknorris.io/jokes/search?query={query}
  
  ```
  
</ul>

<h3>Features</h3>

<ul>
  <li>Display random chuck norris jokes</li>
  <li>Search for a random chuck norris joke based off a keyword query</li>
  <li>Search for random chuck norris joke based on selected category</li>
  <li>Rate a specific chuck norris joke using an emoji-rater</li>
  <li>Add and display a comment based on a particular chuck norris joke</li>
  <li>Add and display a personalized joke to go head-to-head with chuck himself</li>
  
  </ul>
  

<h3> Demo </h3>

![Chuck_Universe_Demo_Gif](assets/chucksuniverse.gif)

<p>Try it out <a href="https://citixenken.github.io/chucksuniverse/">here</a></p>
<h3>Run Locally</h3>



<p>Clone this repo; and in your favourite code editor, change directory to main folder and run </p>

```html

open index.html

```

<h3>Contributing</h3>
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

<h3>Acknowledgments</h3>
<ul>
  <li><a href="https://api.chucknorris.io/">chucknorris.io</a> is a free JSON API for hand curated Chuck Norris facts</li>
</ul>

<h3>License</h3>

This project is licensed under the <a href="https://choosealicense.com/licenses/mit/">MIT</a> License
