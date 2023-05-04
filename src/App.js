import "./styles.css";
import { Routes, Route } from "react-router-dom";

import Intro from "./Pages/Intro";
import Quiz from "./Pages/Quiz";
import Welcome from "./Pages/Welcome";
import EndPage from "./Pages/EndPage";
import Header from "./Pages/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/end" element={<EndPage />} />
      </Routes>
    </div>
  );
}
