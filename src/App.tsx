import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [keyPressDuration, setKeyPressDuration] = useState(0);
  // const [keyPresses, setkeyPresses] = useState<string[]>([]);

  useEffect(() => {
    let keyPressStartTime = 0;

    const handleKeyDown = (/* event: KeyboardEvent */) => {
      if (keyPressStartTime === 0) {
        keyPressStartTime = Date.now();
        // this breaks the thing for no reason
        // setkeyPresses([...keyPresses, event.key]);
      }
    };

    const handleKeyUp = () => {
      const keyPressEndTime = Date.now();
      setKeyPressDuration(keyPressEndTime - keyPressStartTime);
      keyPressStartTime = 0;
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keyup", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  });

  return (
    <>
      <h2>Hold any key!</h2>
      {keyPressDuration > 0 ? <h1>{keyPressDuration}ms</h1> : <h1>...</h1>}
    </>
  );
}

export default App;
