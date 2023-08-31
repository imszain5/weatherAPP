import React, { useState } from "react";

const Form = () => {

    const [FullName, setFullName]= useState({
     fname : "",
     lname : ""
    });


    const inputEvent = (event) => {
        console.log(event.target.value)
        const value = event.target.value;
        const name = event.target.name;
        setFullName((preValue)=>{
            if(name === "fname"){
                return {
                    fname:value,
                    lname:preValue.lname,
                };
            }else if (name === "lname"){
                return{
                    fname : preValue.fname,
                    lname : value,
                };
            }
        });
    };
    const onSubmits = (event) => {
        event.prevantDefault();
      
    };
   
     return(
        <>
         <div className="main-div">
             <form onSubmit={onSubmits}>
                 <h1> Hello {FullName.fname} {FullName.lname}</h1>
                  <input type = "text" placeholder="Enter your Name" onChange={inputEvent} 
                  name='fName'
                   value={FullName.fname}
                    />
                    <br/>
                    <input type = "text" placeholder="Enter your password" onChange={inputEvent}
                    name='lName' 
                     value={FullName.lname}
                       />
                      <button type="submit"> Click me</button>
             </form>
         </div>
        </> 
     );
};

export default Form;

