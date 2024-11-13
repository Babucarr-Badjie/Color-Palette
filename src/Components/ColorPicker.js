import { useState } from "react";

function ColorPicker() {
  // useSate hook
  const [color, setColor] = useState();

  // div style background color
  const colorStyle = { backgroundColor: color };

  return (
    <div style={colorStyle}>
      <p>The background color is {color}</p>
      
      <button onClick={() => setColor("salmon")}>Salmon Color</button>

      <button onClick={() => setColor("coral")}>Coral Color</button>

      <button onClick={() => setColor("moccasin")}>Moccasin Color</button>

      <button onClick={() => setColor("turquoise")}>Turquoise Color</button>

      <button onClick={() => setColor("plum")}>Plum Color</button>
    </div>
  );
}

export default ColorPicker;
