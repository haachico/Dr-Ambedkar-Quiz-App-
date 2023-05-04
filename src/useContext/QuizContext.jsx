import { createContext, useState, useEffect } from "react";
import { QuizData } from "../QuizData";

export const quizContext = createContext();

export const Provider = ({ children }) => {
  const [questionsData, setQuestionsData] = useState([]);

  const [quiz, setQuiz] = useState({});
  const [quizIndex, setQuizIndex] = useState([]);
  const [randomIndexLoop, setRandomIndexLoop] = useState(0);
  const [score, setScore] = useState(0);

  const getData = async () => {
    try {
      const response = await QuizData;

      setQuestionsData(response);
    } catch (err) {
      console.error(err);
    }
  };

  console.log(randomIndexLoop, "random index loop");

  const randomNums = (count, min, max) => {
    let nums = [];
    while (nums.length < count) {
      const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
      if (!nums.includes(randomNum)) {
        nums.push(randomNum);
      }
    }
    return nums;
  };

  const generateUniqueIndexes = () => {
    setQuizIndex(randomNums(10, 0, questionsData.length - 1));
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(quizIndex);

  const handleNextClick = () => {
    setRandomIndexLoop((prev) => prev + 1);

    setQuiz(questionsData[quizIndex[randomIndexLoop]]);
  };
  return (
    <div>
      <quizContext.Provider
        value={{
          quiz,
          setQuiz,
          score,
          setScore,
          quizIndex,
          setQuizIndex,
          randomIndexLoop,
          setRandomIndexLoop,
          questionsData,
          setQuestionsData,
          handleNextClick,
          generateUniqueIndexes
        }}
      >
        {children}
      </quizContext.Provider>
    </div>
  );
};
