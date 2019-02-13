'use strict';

const createGradeObject = (student/*: string */,  grades /*: object */)=>  { if(student && grades) { return grades[student] } else { console.error('No student or No grades')}} ;

const addGrade = (student/*: string */,  grades /*: object */, results /*: array */) => { if(student && grades) { Object.keys(grades).map(student => grades[student] = results); return grades }} ;

const averageGrades = (studentGrades /*: Array<number>*/) => (sum(studentGrades)/studentGrades.length).toFixed(1);

module.exports = { addGrade, averageGrades, createGradeObject };
