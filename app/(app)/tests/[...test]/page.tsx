'use client';

import { useState } from 'react';
import { numberToCharacter, filler } from '@/utils/test';
import Link from 'next/link';
import * as tests from '@/content/testExports';

export default function TestsHome({ params }: { params: { test: string } }) {
  const test: string = params.test;

  const questions = tests[test as keyof typeof tests] || filler;

  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(questions.length).fill('')
  );

  const handleSubmission = () => {
    const score = questions.reduce((totalScore, question, index) => {
      if (selectedAnswers[index] === question.answers[0]) {
        return totalScore + 1;
      }
      return totalScore;
    }, 0);

    alert(`Your score: ${score}/${questions.length}`); // temporary fix
  };

  const handleOptionSelect = (index: number, selectedOption: string) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[index] = selectedOption;
    setSelectedAnswers(newSelectedAnswers);
  };

  return tests[test as keyof typeof tests] !== undefined ? (
    <div className="flex min-h-screen flex-col p-6">
      <header className="items-center flex flex-col justify-center">
        <h1 className="text-2xl ">Practice Tests</h1>
        <h2 className="text-center">
          Please note, these tests are just place holders at the moment. <br />
          The real tests will be implemented soon!
        </h2>
      </header>

      <ol className="ml-10 mt-10">
        {questions.map((question, index) => (
          <li key={index} className="mb-5">
            <p className="mb-1 text-lg font-semibold ">{question.question}</p>

            <div className="flex flex-col">
              {question.options.map((option, optionIndex) => (
                <label key={optionIndex}>
                  <input
                    type="radio"
                    value={numberToCharacter(optionIndex)}
                    checked={
                      selectedAnswers[index] === numberToCharacter(optionIndex)
                    }
                    onChange={() =>
                      handleOptionSelect(index, numberToCharacter(optionIndex))
                    }
                    className="mr-1"
                  />
                  {option}
                </label>
              ))}
            </div>
          </li>
        ))}
      </ol>

      <button onClick={handleSubmission}>Submit</button>
    </div>
  ) : (
    <div className="flex justify-center p-6">
      <p className="text-center">
        The test you are looking for does not exist.
        <br />
        Please return back to our test page
        <Link href={'/tests'} className="text-blue-300">
          {' '}
          here
        </Link>
        .
      </p>
    </div>
  );
}
