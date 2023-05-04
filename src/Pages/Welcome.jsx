import { Link } from "react-router-dom";
import { useContext } from "react";
import { quizContext } from "..";

const Welcome = () => {
  const { handleNextClick } = useContext(quizContext);
  return (
    <div className="welcome--page">
      <div className="rules">
        <p>Rules</p>
        <ul>
          <li>Total 10 quizes.</li>
          <li>A timer of 10 secs for each quiz.</li>
          <li>Will be awarded 1 point for every right answer.</li>
          <li>Will be deducted 2 points for every wrong answer.</li>
        </ul>
      </div>
      <img
        src={`../../img/Babasaheb.jpg`}
        alt="Babasaheb's statue"
        welcome--img
      />
      <p className="letsBegin--link">
        <Link to="/quiz" onClick={handleNextClick}>
          Lets begin
        </Link>
      </p>
    </div>
  );
};

export default Welcome;
