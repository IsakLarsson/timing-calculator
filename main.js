import "./style.css";

let keyPressStartTime = 0;
let keyPressEndTime = 0;
let keyPressDuration = 0;

/* document.addEventListener("keydown", () => {
  console.log(keyPressStartTime);
  if (keyPressStartTime === 0) {
    keyPressStartTime = Date.now();
  }
});

document.addEventListener("keyup", () => {
  keyPressEndTime = Date.now();
  keyPressDuration = keyPressEndTime - keyPressStartTime;
  document.getElementById("milliseconds").innerHTML = `${keyPressDuration}ms`;
  keyPressStartTime = 0;
}); */

const keyPresses = {};
const keytimes = [];

document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (!keyPresses[key]) {
    keyPresses[key] = {
      startTime: Date.now(),
      duration: 0,
    };
  }
});

document.addEventListener("keyup", (event) => {
  const key = event.key;
  if (keyPresses[key]) {
    keyPresses[key].duration = Date.now() - keyPresses[key].startTime;
    updateOutput();
    delete keyPresses[key];
    console.log(keytimes);
  }
});

function updateOutput() {
  for (const key in keyPresses) {
    const { duration } = keyPresses[key];
    if (duration != 0) {
      keytimes.push(duration);
      document.getElementById(
        "output",
      ).innerHTML += `<p>Key: ${key}, Duration: ${duration} ms</p>`;
    }
  }
}

document.querySelector("#app").innerHTML = `
  <div>
    <div>
      <h3>Hold any key!</h1>
    </div>
    <div id="output"></div> 
    <div class="result">
      <h1 id="milliseconds">...</h2>
    </div>
  </div>
`;

// setupCounter(document.querySelector("#counter"));
