import React from "react";

const Game = (props) => {
   
        let {x,y,z} = props;

        if(x===y && y===z){
            return(
                <>
                  <div className="slot">
                       <h1>
                        {x} {y} {z}
                       </h1>
                       <h1> This is Matching.</h1>
                       <hr/>
                  </div>
                </>
            );
        }else{
            return(
                <>
                  <div className="slot">
                       <h1>
                        {x} {y} {z}
                       </h1>
                       <h1> This is not Matching.</h1>
                       <hr/>
                  </div>
                </>
            );
        }

        
};



export default Game;