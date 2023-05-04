import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { quizContext, Provider } from "./useContext/QuizContext";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { quizContext };
root.render(
  <BrowserRouter>
    <Provider>
      <App />
    </Provider>
  </BrowserRouter>
);
