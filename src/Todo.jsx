import React, { useState } from 'react'
import pic from '../src/logo.svg';

function Todo() {
    const[inputData, setInputData] =useState('');
    const[items,setItems]=useState([]);
    const addItem =()=>{
        if(!inputData){

        }else{
        setItems([...items, inputData])
        setInputData('')
        }
    }

    const deleteItem=(id)=>{
      const updateditems = items.filter((elem,ind)=>{
        return ind != id;
      })
      setItems(updateditems);
    }

    const removeAll=()=>{
        setItems([]);
    }
  return (
    <>
      <div className='main-div'>
        <div className='child-div'>
            <figure>
                <img src={pic} alt='todologo'/>
                <figcaption>Add yout List Here </figcaption>
            </figure>
            <div className='addItems'>
                <input type='text' placeholder='Add Items..'
                    value={inputData} onChange={(e)=> setInputData(e.target.value)}
                />
                <i className='fa fa-plus add-btn' title='Add item' onClick={addItem}></i>
            </div>
            <div className='showItems'>
            {
                items.map((elem,ind)=>{
                   return <div className='eachItem' key={ind}>
                    <h3>{elem}</h3>
                    <i className='far fa-trash-alt add-btn' title='delete Item' onClick={()=> deleteItem(ind)}></i>
                </div>
                })
            }
               
            </div>
            <div className='showItems'>
                <button className='button effect04' data-sm-link-text="Remove All" onClick={removeAll}><span> Check List </span></button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Todo;
