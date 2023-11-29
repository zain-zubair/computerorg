'use client';

import { useState } from 'react';
import Question from '@/types/question';
import { numberToCharacter } from '@/utils/test';

const Test = ({ test, questions }: { test: string; questions: Question[] }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showConfirmButton, setShowConfirmButton] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(questions.length).fill('')
  );
  const isLastQuestion = currentQuestion === questions.length - 1;

  const handleOptionSelect = (index: number, selectedOption: string) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[index] = selectedOption;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleSubmission = () => {
    const score = questions.reduce((totalScore, question, index) => {
      if (selectedAnswers[index] === question.answers[0]) {
        return totalScore + 1;
      }
      return totalScore;
    }, 0);

    alert(`Your score: ${score}/${questions.length}`); // temporary fix
  };

  return (
    <section className="flex min-h-screen">
      <nav className="hidden md:flex flex-col items-center pr-6 border-r-2 border-white/25">
        <h1>{test}</h1>
        <div className="pt-6 flex flex-col items-center">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`text-xl ${
                index <= currentQuestion ? 'opacity-80' : 'opacity-30'
              }`}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </nav>
      <div className="flex flex-grow flex-col">
        <div className="md:pl-6 flex justify-between">
          <div>Question</div>
          <div>Timer</div>
        </div>
        <div className="md:pl-6 pt-6 text-xl">
          {questions[currentQuestion].question}
        </div>
        <div className="flex flex-col md:pl-6 pt-6">
          {questions[currentQuestion].options.map((option, optionIndex) => (
            <label key={optionIndex}>
              <input
                type="radio"
                value={numberToCharacter(optionIndex)}
                checked={
                  selectedAnswers[currentQuestion] ===
                  numberToCharacter(optionIndex)
                }
                onChange={() =>
                  handleOptionSelect(
                    currentQuestion,
                    numberToCharacter(optionIndex)
                  )
                }
              />
              {option}
            </label>
          ))}
        </div>
        <div className="mt-4 ml-6">
          {isLastQuestion ? (
            <>
              <button
                className="mt-4 px-4 py-2 interactive focus:border-white/40 active:border-white/80"
                onClick={handleSubmission}
              >
                Submit
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  setShowConfirmButton(true);
                }}
                className="mt-4 px-4 py-2 interactive active:border-white/80"
              >
                Next
              </button>
              {showConfirmButton && (
                <button
                  onClick={() => {
                    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
                    setShowConfirmButton(false);
                  }}
                  className="mt-4 ml-4 px-4 py-2 interactive active:border-white/80"
                >
                  Confirm
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Test;
