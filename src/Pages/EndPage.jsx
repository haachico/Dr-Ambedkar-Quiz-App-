import { useContext } from "react";
import { quizContext } from "..";

const EndPage = () => {
  const { score } = useContext(quizContext);
  return (
    <div className="result--page">
      <img src={`../../img/Ambedkar.jpg`} alt="Ambedkar" />
      <h3>RESULT :</h3>
      <p className="result--message">
        {score > 8
          ? `JaiBhim! Your score is ${score}! You do know quite a lot about the great personality that is Dr Ambedkar!`
          : score >= 5 && score <= 8
          ? `JaiBhim! Your score is {score}! You played well and you do seem to know a bit about the great personality that is Dr Ambedkar!`
          : `JaiBhim! Your score is ${score}! You don't seem to know much about the great persoanilty that is Dr Bhimrao Ramji Ambedkar. Please read him and about him!`}
      </p>
    </div>
  );
};

export default EndPage;
