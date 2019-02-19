const { createGradeObject, addGrade,  averageGrades, forwardBackwardWords, lettersToWord} = require('../index');
const cases = require('jest-in-case');
const randomstring = require('randomstring')


const generateStrings = (numberOfStrings, stringLength) => {
  const s = new Set();
  while (s.size < numberOfStrings) {
    s.add(randomstring.generate(stringLength))
  }

  return s
}

const rdmStr = generateStrings(100, 20);
const strings = [...rdmStr];
const expectedStrings = JSON.stringify([...strings,...([...strings]).reverse()]);

const letters = rdmStr.toString().split();
const expectedLetters = rdmStr.toString();

cases(
  'Create Grades',
  opts => {
    expect(createGradeObject(Object.keys(opts.grades)[0], opts.grades).length).toBe(opts.expected);
  },
  [
    { name: 'Josef', grades:  {"josef":[78, 75, 95]}, expected: 3 },
    { name: 'Jerome', grades:  {"jerome":[78, 75, 95, 71, 50, 80, 59]}, expected: 7 },
    { name: 'Marc', grades:  {"marc":[78, 75, 95, 85, 75]}, expected: 5 },
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
cases(
  'Average Grades',
  opts => {
    expect(averageGrades(opts.grades)).toBe(opts.expected);
  },
  [
    { name: '1 Student', grades: [78, 75, 95], expected: "82.7" },
    { name: '2 Students', grades: [78, 75, 95, 71, 50, 80, 59], expected: "72.6" },
    { name: '2+ Students', grades: [78, 75, 95, 85, 75], expected: "81.6" },
  ],
);

cases(
  'Words Array',
  opts => {
    expect(forwardBackwardWords(opts.words)).toBe(opts.expected);
  },
  [
    { name: 'Empty', words: undefined, expected: undefined },
    { name: 'Small Array', words: ["judas", "josef", "jean"], expected: JSON.stringify(["judas", "josef", "jean", "jean", "josef", "judas"])},
    { name: 'Big Array', words: strings, expected:  expectedStrings},
  ],
);

// TODO: Add a test for 2 arrays and display a specific week avg and all the weeks avg

cases(
  'Letters',
  opts => {
    expect(lettersToWord(opts.letters)).toBe(opts.expected);
  },
  [
    { name: 'Empty', letters: undefined, expected: undefined },
    { name: 'Small Array', letters: ["j", "o", "s"], expected: 'jos'},
    { name: 'Big Array', letters: letters, expected:  expectedLetters},
  ],
);