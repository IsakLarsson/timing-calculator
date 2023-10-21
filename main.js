import "./style.css";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <div class="result">
      <h1 id="milliseconds">...</h2>
    </div>
    <div class="button">
      <button id="counter" type="button">Hold me</button>
    </div>
  </div>
`;
setupCounter(document.querySelector("#counter"));
