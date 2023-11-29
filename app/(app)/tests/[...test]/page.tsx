'use client';

import { useState } from 'react';
import { numberToCharacter, filler } from '@/utils/test';
// import Timer from '@/components/Timer';
import Link from 'next/link';
import * as tests from '@/content/testExports';
import Test from '@/components/Test';

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
      </header>

      <Test test={test} questions={questions} />
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

{
  /*
  <section className="grid grid-cols-5 gap-4">
        <nav className="border-r border-white/25">
          <h1>{test}</h1>
        </nav>
        <div className="col-span-4">
          <div className="flex justify-between">
            <div>questions</div>
            <div>Timer</div>
          </div>
        </div>
      </section>
  */
  /*
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

      <button className="interactive" onClick={handleSubmission}>
        Submit
      </button>
  */
}
