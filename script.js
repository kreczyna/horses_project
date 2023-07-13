"use strict";

//////////////////
// Creating the data
//////////////////

let numberOfHorses = 25;
let numberOfGroups = numberOfHorses/5;

const horsesArray = [];
const createHorses = function (num) {
  for (let kon = 1; kon <= num; kon++) {
    let horse = [];
    let horseSpeed = Math.trunc(Math.random() * 100 + 1);
    let horseName = `horse${kon}`;
    horse.push(horseName);
    horse.push(horseSpeed);
    horsesArray.push(horse);
  }
};

createHorses(numberOfHorses);
const horsesMap = new Map(horsesArray);
const horsesTimeArray = Array.from(horsesMap.values());

///////////////////
// Splitting the horses into the races
///////////////////

let initialRaces = [];

const initialSplit = function (array) {
  // Creates empty arrays

  for (let i = 0; i <= array.length; i++) {
    if (i % 5 === 0 && i >= 5) {
      initialRaces.push([]);
    }
  }

  // Populates empty arrays:

  for (let i = 0; i < array.length; i++) {
    let arrayNumber = Math.trunc(i / 5);
    initialRaces[arrayNumber].push(array[i]);
  }
};

initialSplit(horsesTimeArray);

console.log('Groups; ', initialRaces);


// Simulating running races - sorting times


const runARace = function (){
    const scoreRaces = [...initialRaces];
    for (let i = 0; i < numberOfGroups; i++){
        scoreRaces[i].sort((a,b)=>b-a)
    }
    console.log('Groups score:', scoreRaces);
}

runARace();


// Horses sorted

// horsesTimeArray.sort((a, b)=> a-b)


