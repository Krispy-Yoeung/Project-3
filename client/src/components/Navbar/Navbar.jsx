import React from "react"
import { Link } from 'react-router-dom';
import Auth from '../../modules/Auth';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light col-md-12 header">
  App Name
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNav">
       <ul className="navbar-nav ml-auto">
       <li>
       <a className="nav-link">h</a>
       </li>
         {Auth.isUserAuthenticated() ?(
           
         <li className="nav-item nav-buttons">
           <a className="nav-link">s</a>

           <a className="nav-link">s</a>
         </li>
         ): 
         <div>
         <li className="nav-item nav-buttons">
         <a className="nav-link">s</a>
         </li>
         <li className="nav-item nav-buttons">
           <a className="nav-link">s</a>
         </li>
         </div>
         }
       </ul>
     </div>
</nav>
); 

export default Navbar;