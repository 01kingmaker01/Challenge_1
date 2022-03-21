import { StrictMode } from "react";
import { render } from "react-dom";
import { GlobalStyles } from "twin.macro";
import App from "./App";

render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>,
  document.getElementById("root")
);
