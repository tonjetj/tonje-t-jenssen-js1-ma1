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

// Question 1

const cat = {
  complain: function () {
    console.log("meow!");
  },
};

cat.complain();

// Question 2

const heading = document.querySelector("h3");
console.dir(heading);
heading.innerHTML = "Updated heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4

console.dir(heading.className);
heading.className = "subheading";
console.log(heading.className);

// Question 5

const paragraphs = document.querySelectorAll("p");
console.dir(paragraphs);

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

// Question 6

const resultsContainer = document.querySelector(".results");
console.dir("resultsContainer");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// Question 7

function printList(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
}

printList(cats);

// Question 8

function createCats(cats) {
  let html = "";
  for (let i = 0; i < cats.length; i++) {
    html += `<div>
                       <h5>Name:${cats[i].name}</h5>
                       <p>Age: ${cats[i].age}</p>
               </div>`;
  }
  return html;
}
const newHTML = createCats(cats);
const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newHTML;
