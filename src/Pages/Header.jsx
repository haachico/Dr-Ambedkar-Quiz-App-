import { Link } from "react-router-dom";
import { useContext } from "react";

import { quizContext } from "..";
const Header = () => {
  const { setRandomIndexLoop } = useContext(quizContext);
  const handleRefresh = () => {
    setRandomIndexLoop(0);
  };
  return (
    <div>
      <p className="header">
        <Link to="/" onClick={handleRefresh}>
          Home
        </Link>
      </p>
    </div>
  );
};
export default Header;
