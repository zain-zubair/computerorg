interface Question {
  question: string;
  options: string[];
  answers: string[];
}

export const questions: Question[] = [
  {
    question:
      'In Boolean algebra, what is the identity element for the AND operation?',
    options: ['0', '1', 'XOR', 'NOT'],
    answers: ['B'],
  },
  {
    question: 'What is the complement of the Boolean expression A + B?',
    options: ['A * B', 'A + B', "A' * B'", "A' + B'"],
    answers: ['B'],
  },
  {
    question: 'Which Boolean operation is commutative?',
    options: ['AND', 'OR', 'XOR', 'NOT'],
    answers: ['B'],
  },
];
