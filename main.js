import "./style.css";

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
  // clearOutput();
});

function clearOutput() {
  document.getElementById("output").innerHTML = `<div></div>`;
}
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
  let diff;
  let lastTwoKeys = [];
  for (const key in keyPresses) {
    const { duration, startTime } = keyPresses[key];
    if (duration != 0) {
      keytimes.push({ key, startTime });
      if (keytimes.length >= 2) {
        lastTwoKeys = keytimes.slice(-2);
        console.log(lastTwoKeys);
        diff = lastTwoKeys[1].startTime - lastTwoKeys[0].startTime;
      }
      document.getElementById("output").innerHTML += `
      <div class="result-box">
        <div class="keycap">
          <h2>${key}</h2>
        </div>
        <div class="flex-row">
          <h2 class="duration">${duration}</h2>
          ${diff ? `<h3>Time since last key ${diff}</h3>` : ""}
        </div>
      </div>
    </div> 
`;
    }
  }
}

document.querySelector("#app").innerHTML = `
  <div>
    <div>
      <h3>Press any keys!</h3>
    </div>
    <div id="output">
      <!-- <div class="result-box">
        <div class="keycap">
          <h2>a</h2>
        </div>
        <div class="flex-row">
          <h2 class="duration">143ms</h2>
          <h3>Time since last key</h3>
        </div>
      </div>
    </div>  -->
    <div class="result">
      <h1 id="milliseconds">...</h2>
    </div>
  </div>
`;

// setupCounter(document.querySelector("#counter"));
