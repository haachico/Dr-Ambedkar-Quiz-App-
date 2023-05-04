import { Link } from "react-router-dom";
import { useContext } from "react";
import { quizContext } from "..";

const Intro = () => {
  const { randomIndexLoop, generateUniqueIndexes } = useContext(quizContext);
  console.log(randomIndexLoop, "randomIndexLoop");

  const handleClick = () => {
    generateUniqueIndexes();
  };
  return (
    <div className="intro--page">
      <h1>Welcome to Dr Ambedkar Quiz!</h1>
      <img
        src={`../../img/DrAmbedkar.jpg`}
        alt="Dr Ambedkar"
        className="intro--img"
      />
      <p className="intro--link">
        {" "}
        <Link to="/welcome" onClick={handleClick}>
          Welcome!
        </Link>
      </p>
    </div>
  );
};

export default Intro;
