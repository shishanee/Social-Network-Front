import React from "react";
import { music } from "./tracks.js";

const Music: React.FC = (): JSX.Element => {
  return (

    <div>

      {music.map((item) => {
        return (
          <div>
            <h1>{item.title}</h1>
            <p>{item.author}</p>
            <audio controls>
              <source src={item.src} />
            </audio>
          </div>
        );
      })}
    </div>
  );
};

export default Music;
