import React from "react";
import { music } from "./tracks.js";

const Music: React.FC = (): JSX.Element => {
  return (
    <div>
      <audio src={music[0]}></audio>
      <button>back 30</button>
      <button>play / pause</button>
      <button>forward 30</button>

      <div>0:00</div>
      <div>
        <input type="range" />
      </div>

      <div>2:49</div>
    </div>
  );
};

export default Music;
