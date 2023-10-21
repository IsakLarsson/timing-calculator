import "./style.css";

let keyPressStartTime = 0;
let keyPressEndTime = 0;
let keyPressDuration = 0;

document.addEventListener("keydown", () => {
  if (keyPressStartTime === 0) {
    keyPressStartTime = Date.now();
  }
});

document.addEventListener("keyup", () => {
  keyPressEndTime = Date.now();
  keyPressDuration = keyPressEndTime - keyPressStartTime;
  document.getElementById("milliseconds").innerHTML = `${keyPressDuration}ms`;
  keyPressStartTime = 0;
});

document.querySelector("#app").innerHTML = `
  <div>
    <div>
      <h3>Hold any key!</h1>
    </div>
    <div class="result">
      <h1 id="milliseconds">...</h2>
    </div>
  </div>
`;

// setupCounter(document.querySelector("#counter"));
