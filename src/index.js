import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// const fname = "Syed ";
// const lname = "Zain Ul Abideen"
// const date = new Date().toLocaleDateString();
// const currTime = new Date().toLocaleTimeString();
// const img1= "https://picsum.photos/200/300";
// const img2= "https://picsum.photos/300/300";
// const img3= "https://picsum.photos/250/300";
// let currDate = new Date();
// currDate = currDate.getHours();
// let greeting ='';
// const cssStyle = {};

// if(currDate >= 1 && currDate <12){
//     greeting = 'Good Morning';
//     cssStyle.color = 'green';
// }else if(currDate >= 12 && currDate < 19){
//   greeting = 'Good AfterNoon';
//   cssStyle.color = 'Blue';
// }else{
//   greeting = 'Good Night';
//   cssStyle.color = 'Brown';
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    {/* <h1 contentEditable= "true" > My name is {`${fname} ${lname} `}  </h1>
    <p> Sum of two numbers is {15+10} </p>
    <p>Bhutto Zinda ha abhi</p>
    <h2 className="heading">List of Five Best Netflix Series</h2>
    <ol>
      <li>Lucifer</li>
      <li>Money Heist</li>
      <li>Breaking Bad</li>
      <li>Narcos</li>
      <li>Friends</li>
    </ol>

    <p>Todays Date is {`${date}`} </p>
    <h2>Current Time is {`${currTime}`} </h2>

    <img src={img1} alt='random pic'/>
    <img src={img2} alt='random pic'/>
    <img src={img3} alt='random pic'/>

    <h1>Hello Sir, <span style={cssStyle}> {greeting} </span></h1>

   <Heading/> 

   <App/>

   <Cards
    imgsrc = "https://www.youtube.com/watch?v=2OQOm7dIrqA&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=25"
    title = "Random Image"
    sname = "background Image"
    link = "www.netflix.com"
   />

   <Cards 
      imgsrc = "https://picsum.photos/300/300"
      title = "Nature Image"
      sname = "front Image"
      link = "www.amazon.com"
   />
       
     */}
    
         <App/>
    
     
    
    
     
  </React.Fragment>

  

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
