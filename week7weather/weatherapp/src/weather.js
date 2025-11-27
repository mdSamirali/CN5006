import React, { useState, useEffect } from "react";
import Sunny from './sunny.png';
import Cloudy from './cloudy.png';
import Rainy from './rainy.png';

function EmojeeCounter(props) {
  const [pic, setPic] = useState(Sunny);
  const [count, setCount] = useState(0);

  useEffect(() => {
    switch (props.pic) {
      case "Sunny":
        setPic(Sunny);
        break;
      case "Cloudy":
        setPic(Cloudy);
        break;
      case "Rainy":
        setPic(Rainy);
        break;
      default:
        setPic(Sunny); // Default case
    }
  }, [props.pic]);

  const ClickHandle = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <p>
        {props.pic}
        <button onClick={ClickHandle}>
          {count}
          <img src={pic} alt={props.pic || "weather"} />
        </button>
      </p>
    </div>
  );
}

export default EmojeeCounter;