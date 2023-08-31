import React, { useState } from "react";

const Hoooks = () => {
    
    // const [count , setCount] = useState(0);

    // const IncNum = () =>{
    //     setCount(count + 1);
    // }
    //   return(
    //     <>
    //         <h1>
    //             {count}
    //         </h1>
    //         <button onClick={IncNum}> Click me </button>
    //     </>
    //   );

    let newTime = new Date().toLocaleTimeString();
    const [cTime , setcTime] = useState(newTime);

    const updateTime = () => {
        newTime = new Date().toLocaleTimeString();
        setcTime(newTime);
    }
    setInterval(updateTime,1000);

    return(
        <>
            <h1> {cTime} </h1>
          
        </>
    );
};

export default Hoooks;