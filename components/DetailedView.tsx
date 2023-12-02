import Question from '@/types/question';
import { numberToCharacter } from '@/utils/test';

const DetailedView = ({
  questions,
  userAnswers,
}: {
  questions: Question[];
  userAnswers: string[];
}) => {
  const shouldHighlight = (
    answers: string[],
    index: number,
    optionIndex: number
  ) =>
    userAnswers[index] === numberToCharacter(optionIndex)
      ? answers.includes(numberToCharacter(optionIndex))
        ? 'text-green-500'
        : 'text-[#ff4c4c]'
      : answers.includes(numberToCharacter(optionIndex))
      ? 'text-green-500'
      : '';

  return (
    <ol className="ml-10 mt-[4.5rem]">
      {questions.map((question, index) => (
        <li key={index} className="mb-5">
          <p className="mb-1 text-lg font-semibold ">{question.question}</p>
          <div className="flex flex-col">
            {question.options.map((option, optionIndex) => (
              <label key={optionIndex}>
                <input disabled type="radio" className="mr-1" />
                <span
                  className={`mr-1 ${shouldHighlight(
                    question.answers,
                    index,
                    optionIndex
                  )}`}
                >
                  {option}
                </span>
              </label>
            ))}
          </div>
        </li>
      ))}
    </ol>
  );
};

export default DetailedView;
