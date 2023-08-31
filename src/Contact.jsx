import React, { useState } from "react";

const Contact =()=>{

    const[data,setData]=useState({
        fullname:"",
        phone:"",
        email:"",
        message:"",
    });

    const formSubmit =()=>{
      alert(
        `My name is ${data.fullname}. My phone number is ${data.phone}. My Email is ${data.email}.
        My message is ${data.message}   `
      );
    };

    const inputEvent =(event)=>{
       const{name,value} =event.target;
       setData((preVal) =>{
           return{
            ...preVal,
            [name]: value,
           }
       })
           
    };
      return(
        <>
            <div className=" my-5">
                <h1 className=" text-center"> Contact Us</h1>
            </div>
            <div className=" container contact-div">
                 <div className=" row">
                    <div className=" col-md-6 col-10 mx-auto">
                    
                        <form onSubmit={formSubmit}>
  <div class="form-group">
    <label for="exampleFormControlInput1">FullName</label>
    <input type="text" onChange={inputEvent} name="fullname" value={data.fullname} class="form-control" id="exampleFormControlInput1" placeholder="Enter your Name"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Phone Number</label>
    <input type="number" onChange={inputEvent} name="phone" value={data.phone}  class="form-control" id="exampleFormControlInput1" placeholder="Mobile number"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email Address</label>
    <input type="email" onChange={inputEvent} name="email" value={data.email}  class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" name="message" value={data.message}  onChange={inputEvent} id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div className=" col-12 mt-3">
  <button class="btn btn-outline-primary" type="submit">Submit Form</button>
  </div>
</form>
                        
                    </div>
                 </div>
            </div>
        </>
      );
};

export default Contact;