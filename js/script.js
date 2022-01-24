// Question 1
// create an object called cat
// give the object one property called complain
// complain's value should be a method (a function) which logs the string "meow!"
const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// Question 2
// select the h3 from the HTML using the querySelector method and assign it to a variable called heading

var heading = document.querySelector("h3");
console.log(heading);
heading.innerHTML = "Updated heading";

// Question 3
// use the style property on the heading variable from the question above to change it's font size to "2em"

// Question 4
// add a class to the heading variable called subheading

// Question 5
// write code that selects all the p elements on a page and assing them to a variable called paragraphs
// loop through the p elements and change the colour of each to "red"

// Question 6
// select the div with a class of results, assign it to a variable called resultsContainer and set its innerHTML to be <p>New paragraph</p> and its background colour to be yellow

// Question 7
// create a function that has one parameter called list
// inside the function, loop through the list parameter and console log the name property in each object
// call the function and pass in the cats variable in the script.js file in the repo

// Question 8
// create a function called createCats
// the function will have one parameter called cats
// inside the function loop through the value passed in as cats and create HTML for each object in the array
// wrap each item in a div, each name property in an h5 tag and each age property in a p tag
