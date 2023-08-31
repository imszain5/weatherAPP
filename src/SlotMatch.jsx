import React from "react";
import Game from "./Game";

const slotM = () => {
    return(
        <>
          <h1 className="heading"> This is a <span style={{fontWeight:"bold"}}>Matching Game.  </span>
          </h1>
          <div className="slotmachine">
             <Game 
                X = "A" Y = "A" C = "A"
             />
             <Game
                  X = "A" Y = "A" C = "Z"
             />
             <Game
                  X = "A" Y = "A" C = "M"
             />
          </div>

        </>

    );
};

export default slotM;