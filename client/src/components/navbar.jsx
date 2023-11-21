import logo from "../logo.png";
import '../index.css';

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#FFFFFF' }}>
        <a className="navbar-brand" href="#">
          <img className="navbarImg" src={logo} alt="30" />
        </a>
        <div className="navbar-nav ml-auto" id="navbarSupportedContent">
          <a className="nav-link navbarTextStyle" href="#login" >Login      </a>
          <a className="nav-link navbarTextStyle" href="#register" >     Register</a>
        </div>
      </nav>
    );
  }
  

export default Navbar;