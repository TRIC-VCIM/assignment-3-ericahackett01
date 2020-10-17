let animal = Math.floor(Math.random() * 6) + 1;
let food = Math.floor(Math.random() * 6) + 1;
let habitat = Math.floor(Math.random() * 6) + 1; 

console.log("dice rolls: " + animal + ", " + food + ", " + habitat);

// Animal Conditions 

if(animal === 1) { 
  animal = "Red Panda";
} else if(animal === 2) {
  animal = "Snow leopard";
} else if(animal === 3) { 
  animal = "Tiger";
} else if(animal === 4) { 
  animal = "Whale shark";
} else if(animal === 5) {
  animal = "Wolve";
} else if(animal === 6) {
  animal = "Seahorse";
}

// Food Conditions

if(food === 1) {
  food = "bamboo";
} else if(food === 2) { 
  food = "blue sheep";
} else if(food === 3) {
  food = "sambar deer";
} else if(food === 4) {
  food = "plankton";
} else if(food === 5) {
  food = "elk";
} else if(food === 6) {
  food = "mysis shrimp";
}

// Habitat Conditions

if(habitat === 1) {
  habitat = "mountain forests";
} else if(habitat === 2) {
  habitat = "high alpine areas";
} else if(habitat === 3) { 
  habitat = "rainforests and savannas";
} else if(habitat === 4) {
  habitat = "the Indian and Pacific Oceans";
} else if(habitat === 5) {
  habitat = "the tundra and woodlands";
} else if(habitat === 6) {
  habitat = "warm oceans";
}

console.log("results: " + animal + "," + food + "," + habitat);

let phrase = `<b>${animal}s</b> love to eat <b>${food}</b> and they live in <b>${habitat}</b>.`;
document.querySelector('.animals').innerHTML = phrase;

