import "./style.css";

const keyPresses = {};
const keyHistory = [];
let lastTwoKeys = [];
let diff;

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
  }
});

function clearOutput() {
  document.getElementById("output").innerHTML = `<div></div>`;
}

function updateOutput() {
  document.getElementById("header").innerHTML = "";
  for (const key in keyPresses) {
    const { duration, startTime } = keyPresses[key];
    if (duration != 0) {
      keyHistory.push({ key, startTime, duration });
      if (keyHistory.length >= 2) {
        lastTwoKeys = keyHistory.slice(-2);
        diff = lastTwoKeys[1].startTime - lastTwoKeys[0].startTime;
      }
    }
  }
  clearOutput();

  if (lastTwoKeys.length >= 2) {
    const key1 = lastTwoKeys[0];
    const key2 = lastTwoKeys[1];
    document.getElementById("output").innerHTML += `
          <div class="result-box">
            <div class="flex-row">
              <h2>${key1.duration}ms</h2>
              <div class="keycap">
                <h2>${key1.key}</h2>
              </div>
              <h2 class="duration"><-- ${Math.abs(diff)}ms --></h2>
              <div class="keycap">
                <h2>${key2.key}</h2>
              </div>
              <h2>${key2.duration}ms</h2>
            </div>
          </div> `;
  } else {
    const key1 = keyHistory.slice(-1).at(0);
    document.getElementById("output").innerHTML += `
      <div class="result-box">
        <div class="flex-row">
          <div class="keycap">
            <h2>${key1.key}</h2>
          </div>
        </div>
        <h2 class="duration">${key1.duration}ms</h2>
      </div> `;
  }
}

document.querySelector("#app").innerHTML = `
    <div id="header">
      <h3>Press any keys!</h3>
      <p>
        This tool will shows how long each key was pressed as well as the time
        between the last two keypresses.
      </p>
    </div>
    <div id="output"></div>  
    <div class="result"></div>
`;
