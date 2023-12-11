import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [pass, setpass] = useState("");
  const [length, setlength] = useState(8);
  const [num, setnum] = useState(false);
  const passval = useRef(null);
  const generatepass = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (num) str += "123456789";
    /* if (setnum) str += "!@#$%^&*()_+"; */

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpass(pass);
  }, [length, num]);
  const copy = () => {
    window.navigator.clipboard.writeText(pass);
    passval.current?.select();
  };
  useEffect(() => {
    generatepass();
  }, [length, num]);
  return (
    <>
      <div>
        <h1>Random Password Genenrator</h1>
        <div>
          <input type="text" readOnly placeholder={pass} ref={passval} />
          <button onClick={copy}>Copy</button>
        </div>
        <input
          type="range"
          min={8}
          max={15}
          value={length}
          onChange={(e) => setlength(e.target.value)}
        />
        <p>Length : {length}</p>
        <input
          type="checkbox"
          defaultChecked={num}
          onChange={(pre) => {
            setnum((pre) => !pre);
          }}
        />
        num
      </div>
    </>
  );
}

export default App;
