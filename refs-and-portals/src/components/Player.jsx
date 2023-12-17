import { useState, useRef } from "react";

export default function Player() {
  const name = useRef("");
  const [playerName, setPlayerName] = useState(null);

  function handleChangeName() {
    setPlayerName(name.current.value);
    name.current.value = " ";
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={name} />
        <button onClick={handleChangeName}>Set Name</button>
      </p>
    </section>
  );
}

