import React from "react";

function Navbar() {

    return (
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
        <a className="navbar-brand" href="#">
          <img src="./logo.png" className="img-fluid" alt="30" />
        </a>




  
        <div className="navbar-nav ml-auto" id="navbarSupportedContent">
          <a className="nav-link" href="#login">Login <span className="sr-only">(current)</span></a>
          <a className="nav-link" href="#register">Register</a>
        </div>
      </nav>
    );
  }
  
  
  

export default Navbar;