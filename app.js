
    // Create Dino Constructor
const Dino = function(species, weight, height, diet, location, time, fact) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.location = location;
    this.time = time;
    this.fact = fact;
}

// creating three comparison fact:
// first fact: comparing weights
Dino.prototype.weightFact = function() {
    let weightRatio= Math.round(this.weight / human.weight).toFixed(2);
    if (weightRatio > 1) {
        return `${this.species} used to weigh around ${weightRatio} times more than you!!`;
    } else {
        return `You are ${1 / weightRatio} times heavier than ${this.species} was`;
    }
};
// second fact: comparing heights
Dino.prototype.heightFact = function() {
    let heightRatio = this.height / (human.heightFeet*12 + human.heightInches);
    heightRatio = Math.round(heightRatio).toFixed(2);
    if (heightRatio > 1) {
        return `${this.species} was around ${heightRatio} times taller than you!!`
    } else {
        return `You are ${1 / heightRatio} times larger than ${this.species} used to be`;
    }
}
// third fact: comparing diet
Dino.prototype.dietFact = function() {
    if (human.diet === this.diet) {
        return `Just like you, ${this.species} was also ${this.diet}`;
    } else {
        return `Unlike you, ${this.species} was ${this.diet}`;
    }
}

// fourth fact: timeperiod
Dino.prototype.timeFact = function() {
    return `${this.species} existed in the ${this.time} time period`;
}

// fifth fact: location related
Dino.prototype.locationFact = function() {
    return `The prime location where ${this.species} was found was ${this.location}`;
}

// sixth fact: given fact
Dino.prototype.givenFact = function() {
    return this.fact;
}

// method to generate a random fact from 6 facts generated using the above functions
Dino.prototype.getFact = function() {
    let facts = {
        1: this.weightFact(),
        2: this.heightFact(),
        3: this.dietFact(),
        4: this.timeFact(),
        5: this.locationFact(),
        6: this.givenFact()
    };
    let randomNumber = Math.ceil(Math.random() * 6);
    return facts[randomNumber];
}

    // Create Dino Objects
const triceratops = new Dino('Triceratops', 13000, 114, 'herbavour', 'North America',
  'Late Cretaceous', 'First discovered in 1889 by Othniel Charles Marsh');
const trex = new Dino('Tyrannosaurus Rex', 11905, 144, 'carnivor', 'North America',
  'Late Cretaceous', 'The Largest known skull measures in at 5 feet long.');
const anklyosrs = new Dino('Anklyosaurus', 10500, 55, 'herbavor', 'North America',
  'Late Cretaceous',  'Anklyosaurus survived for approximately 135 million years.');
const brachiosrs = new Dino('Brachiosaurus', 70000, 372, 'herbavor', 'North America',
  'Late Jurasic', 'An asteroid was named 9954 Brachiosaurus in 1991.')
const stegosrs = new Dino('Stegosaurus', 11600, 79, 'herbavor', 'North America, Europe, Asia',
  'Late Jurasic to Early Cretaceous', 'The Stegosaurus had between 17 and 22 seperate places and flat spines.');
const elasmosrs = new Dino('Elasmosaurus', 16000, 59, 'carnivor', 'North America',
  'Late Cretaceous', 'Elamosaurus was a marine reptile first discovered in Kansas.');
const pteranodon = new Dino('Pteranodon', 44, 20, 'carnivor', 'North America',
  'Late Cretaceous', 'Actually a flying reptile, the Pteranodon is not a dinosaur.');
const pigeon = new Dino('Pigeon', 0.5, 9, 'herbavor', 'World Wide',
  'Holocene', 'All birds are living dinosaurs.');

console.log(pigeon);

    // Create Human Object
let human = {};

    // Use IIFE to get human data from form
document.querySelector("#btn").addEventListener('click', e => {
    human = (function() {
        return {
            name: document.querySelector('#name').value,
            heightFeet: parseInt(document.querySelector('#feet').value),
            heightInches: parseInt(document.querySelector('#inches').value),
            weight: parseInt(document.querySelector('#weight').value),
            diet: document.querySelector('#diet').value
        }
    })();
});


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
