import React from 'react';
import { NavLink } from 'react-router-dom';
import Contact from './Contact';

const Footer =() =>{
    let year = new Date().getFullYear();
   return(
    <> 
     <div className='footer'>  
          <div className='footer1'>
               <ul>
                <li><NavLink  to="/">Home</NavLink> </li>
                <li><NavLink  to="/about">About</NavLink></li>
                <li><NavLink   to="/service">Services</NavLink></li>
                <li><NavLink   to="contact"> Contact</NavLink></li>
               </ul>
          </div>
          <div>
            <div className='footer2'>
               <p> © Copyright {year} Designed by no one  </p>
            </div>
          </div>
      </div>
    </>
   );
};

export default Footer;