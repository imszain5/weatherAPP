import React from "react";
import { NavLink } from "react-router-dom";
import './index.css';

const About =()=>{
      return(
    <>
         <section id="header" className=" d-flex align-items-center">
            <div className="container-fluid nav-bg" >
                <div className="row">
                  <div className="col 10 mx-auto" >
                  <div className=" row">
                    <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">
                        <h1> Know About <strong className="navbar-brand">Us.</strong></h1>
                        <h2 className=" my-3">
                            We are the Team of Talented Developers
                        </h2>
                        <div className=" mt-3">
                              <NavLink to="/service" className=" btn btn-danger"> Information</NavLink>
                        </div>
                        <div className=" col-lg-6 order-1 order-lg-2 header-img img1">
                              <img src="logo192.png" alt="logo"/>
                        </div>
                    </div>
                </div>
                  </div>
                </div>  
            </div>     
        </section>
     </>
  );
};

export default About;