import { animals } from "./animals";
import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);
const title = "";
const background = (
  <img className="background" alt="ocean" src="/images/ocean.jpg" />
);

const showBackground = true;

let animalArray = [];

//Note: displayFact() and the for loop have to be written in this order
//(and not the other way around) or the facts will not display onClick.

const displayFact = e => {
let facts = animals[e.target.alt].facts; //Get animals, at the "alt" property of the event target
let rand = Math.floor(Math.random() * facts.length)
let fact = facts[rand];
document.getElementById('fact').innerHTML = fact;
}

//Push <img /> array
for (const animal in animals) {
  animalArray.push(
    <img 
    key={animal}
    className='animal'
    alt={animal}
    src={animals[animal].image}
    aria-label={animal}
    role='button'
    onClick={displayFact}
    />
  )
};

//JSX action
const animalFacts = (
  <div>
    {showBackground && background}
    <p id='fact'></p>
    <div className="animals">{animalArray}</div>
    <h1>{title || "Click an animal for a fun fact"}</h1>
  </div>
);

root.render(animalFacts);