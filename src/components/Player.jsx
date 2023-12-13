import React,{ useState, useRef} from 'react';

export default function Player() {
  const player = useRef('')
  const [valid, setValid] = useState(null);

  const clickHandler = (e) => {
    setValid(player.current.value);
    player.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome unknown {valid ?? 'entity' }</h2>
      <p>
        <input ref ={player} type="text"/>
        <button onClick={clickHandler}>Set Name</button>
      </p>
    </section>
  );
}
