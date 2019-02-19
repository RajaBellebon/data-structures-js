'use strict';


const createGradeObject = (student/*: string */,  grades /*: object */)=>  { if(student && grades) { return grades[student] } else { console.error('No student or No grades')}} ;

const addGrade = (student/*: string */,  grades /*: object */, results /*: array */) => { if(student && grades) { Object.keys(grades).map(student => grades[student] = results); return grades }} ;

const averageGrades = (studentGrades /*: Array<number>*/) => ((studentGrades.reduce((a, b) => a + b, 0))/studentGrades.length).toFixed(1);

const forwardBackwardWords = (words/*: Array<string>*/ ) => {
  if (words && words.length){
    return JSON.stringify([...words, ...words.reverse()])
  }
}

const weeklyTemps= () => {
  this.dataStore = [];
  this.add = add;
  this.average = average;
}

const add = (temp1, temp2) => this.dataStore.push([temp1, temp2]);

const average = () => {
  let total = 0;
  let avg = 0.0;
  for (let row = 0; row , row < this.dataStore.length; ++row) {
    for (let col = 0; col , col < this.dataStore[row].length; ++col) {
      total += this.dataStore[row][col];
    }
    avg = total / this.dataStore[row].length;
    console.log(`Average ${row+1}: ${avg}`)
    total = 0;
    average = 0.0;
  }
  return avg;
}

const lettersToWord = (letters /*: <Array<string>> */) => {
  if (letters) {
    return letters.join('');
  }
}

module.exports = { addGrade, averageGrades, createGradeObject, forwardBackwardWords, lettersToWord };
