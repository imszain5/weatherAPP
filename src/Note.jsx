import React from 'react';
import Button from '@mui/material/Button';


function Note(props) {
    return (
        <>
            <div className="Note">
                <h1> {props.title} </h1>
                <br />
                <p> {props.content}</p>
               
                  <Button>Delete</Button>
               
            </div>
        </>
    );
}

export default Note;