const { createGradeObject, addGrade,  averageGrades} = require('../index');
const cases = require('jest-in-case');

cases(
  'Create Grades',
  opts => {
    expect(createGradeObject(Object.keys(opts.grades)[0], opts.grades)).toHaveLength(opts.expected);
  },
  [
    { name: '1 Student', grades: {"josef": [78, 75, 95]}, expected: 3 },
    { name: '2 Students', grades: {"josef": [78, 75, 95], "jerome": [71, 50, 80, 59]}, expected: 3 },
    { name: '2+ Students', grades: {"josef": [78, 75, 95], "jerome": [71, 50, 80, 59], "marc": [85, 75] }, expected: 3 },
  ],
);

cases(
  'Add Grades',
  opts => {
    expect(Object.values(addGrade(Object.keys(opts.grades)[0], opts.grades, Array.apply(null, {length: 3}).map(Function.call, Math.random)))[0].length).toBe(3);
  },
  [
    { name: '1 Student', grades: {"josef": ''}},
    { name: '2 Students', grades: {"josef": '', "jerome":''}},
    { name: '2+ Students', grades: {"josef": '', "jerome":'', "marc": '' }},
  ],
);