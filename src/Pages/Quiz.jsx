import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { quizContext } from "..";
import EndGame from "./EndPage";

const Quiz = () => {
  const {
    quiz,
    randomIndexLoop,
    score,
    setScore,
    handleNextClick
  } = useContext(quizContext);

  const [selectedAnswer, setSelectedAnswer] = useState("");

  const [countdownTime, setCountdownTime] = useState(new Date().getTime());
  const [counter, setCounter] = useState(20);

  const handleSelectAns = (event) => {
    setSelectedAnswer(event.target.value);
    const answerSelected = event.target.value;

    if (answerSelected === quiz.correct) {
      setScore((prev) => prev + 1);
    } else {
      setScore((prev) => prev - 2);
    }
  };
  console.log(score, "score");

  const handleNext = () => {
    setCountdownTime(new Date().getTime());
    handleNextClick();
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const secs = (new Date().getTime() - countdownTime) / 1000;
      setCounter(20 - Math.floor(secs));
      if (secs > 20) {
        handleNext();
      }

      console.log(secs, "SECS");
    }, 1000);
    return () => clearInterval(intervalId);
  }, [randomIndexLoop]);

  return randomIndexLoop < 11 ? (
    <div className="quiz--page">
      <h2 className="timer">Timer : {counter}</h2>
      <div className="quiz--body">
        <h3>{quiz?.question}</h3>
        <p>
          <label>
            <input
              type="radio"
              name={quiz?.a}
              value={quiz?.a}
              checked={selectedAnswer === quiz?.a}
              onChange={(e) => handleSelectAns(e)}
            />
            {quiz?.a}
          </label>
        </p>
        <p>
          {" "}
          <label>
            <input
              type="radio"
              name={quiz?.b}
              value={quiz?.b}
              checked={selectedAnswer === quiz?.b}
              onChange={(e) => handleSelectAns(e)}
            />
            {quiz?.b}
          </label>
        </p>
        <p>
          {" "}
          <label>
            <input
              type="radio"
              name={quiz?.c}
              value={quiz?.c}
              checked={selectedAnswer === quiz?.c}
              onChange={(e) => handleSelectAns(e)}
            />
            {quiz?.c}
          </label>
        </p>
        <p>
          {" "}
          <label>
            <input
              type="radio"
              name={quiz?.d}
              value={quiz?.d}
              checked={selectedAnswer === quiz?.d}
              onChange={(e) => handleSelectAns(e)}
            />
            {quiz?.d}
          </label>
        </p>
      </div>
      {randomIndexLoop < 10 ? (
        <button onClick={handleNext} className="next--btn">
          Next
        </button>
      ) : (
        <p className="next--link">
          <Link to="/end">Next</Link>
        </p>
      )}
    </div>
  ) : (
    <EndGame />
  );
};

export default Quiz;
