let holdTime = 0;
let holdStart = 0;

const setCounter = (element) => {
  element.innerHTML = `${holdTime}ms`;
};

export function setupCounter(element) {
  element.addEventListener("mousedown", () => (holdStart = Date.now()));
  element.addEventListener("mouseup", () => {
    holdTime = Math.abs(holdStart - Date.now());
    setCounter(document.querySelector("#milliseconds"));
  });
}

export function keyDown() {}
