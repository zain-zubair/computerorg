interface Question {
  question: string;
  options: string[];
  answers: string[];
}

export const questions: Question[] = [
  {
    question: 'What is the decimal equivalent of the binary number 1010?',
    options: ['2', '5', '10', '15'],
    answers: ['C'],
  },
  {
    question: 'In the octal numbering system, what is the value of 14?',
    options: ['12', '14', '16', '20'],
    answers: ['A'],
  },
  {
    question:
      'What is the hexadecimal representation of the decimal number 255?',
    options: ['FF', 'EE', 'AA', 'CC'],
    answers: ['A'],
  },
];
