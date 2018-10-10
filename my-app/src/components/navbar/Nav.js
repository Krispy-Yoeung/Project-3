import React from "react";


const Navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="navbar static-top">
        <ul className="navbar-nav">
        <li className="nav-item">
        <a className="navbar-brand" href="/">Title</a>
        </li>
        <li className="nav-item">
        <a className="navbar-brand" href="/">Home</a>
        </li>
        <li className="nav-item">
        <a className="navbar-brand" href="/login">Login</a>
        </li>
        <li className="nav-item">
        <a className="navbar-brand" href="/signup">SignUp</a>
        </li>
        </ul>
    </div>
    </nav>

    
)
 

export default Navbar;
