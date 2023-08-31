import React, { useState } from "react";
import Button from '@mui/material/Button';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const ToDoListt =() =>{
    const [num,setNum]= useState(0);
    const incNum =() => {
       setNum(num+1) ; 
    };

    const decNum =()=>{
      if(num >0){
        setNum(num -1)
      }else{
        alert('Your Limit is Reached')
        setNum(0);
      }
    };
     return(
        <>
           {/* <h1 className="text-center text-danger" > My name is Syed Zain</h1> */}
            <div className="main-div">
                <div className="center-div">
                    <h1> {num}</h1>
                    <div className="btn-div"> 
                    <Button onClick={incNum} variant="contained">Increm</Button>
                        <button onClick={decNum}>Decrem</button>
                    </div>
                </div>
            </div>
        </>
     );
};

export default ToDoListt;