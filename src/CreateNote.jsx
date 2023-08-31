import React, { useState } from 'react';
import Button from '@mui/material/Button';

const CreateNote =(props) =>{

    const [note, setNote] = useState({
        title:"",
        content:""
    });
    const inputEvent =(event) =>{
        const [name,value] = event.target;
       setNote((prevData)=>{
          return{
              ...prevData,
              [name] : value,
            };
       });
    };
    const addEvent =()=>{
       props.passNote();
    };

    return(
        <>
           <div className='main'>
               <form>
                  <input name="title" type='text' onChange={inputEvent} value={note.title} placeholder='Title'/> 
                  <textarea name="content" value={note.content} onChange={inputEvent} placeholder='Write a Note... ' rows="1" columns="1" />
                  <Button onClick={addEvent} className="butn">+</Button>
               </form>
           </div>
        </>
    );
};

export default CreateNote;