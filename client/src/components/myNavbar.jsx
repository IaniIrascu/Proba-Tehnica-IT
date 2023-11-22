import logo from "../pngs/logoPollIt.png";
import '../componentStyles/myNavbar.css';

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg"
      style={
        { backgroundColor: '#FFFFFF' ,  
        boxShadow: "0 0.3px 13px #021B2C" ,
        width: "100%"}}>

        <a className="navbar-brand navbarImg" href="#">
          <img src={logo}/>
        </a>
        <div className="navbar-nav ml-auto" id="navbarSupportedContent">
          <a className="nav-link navbarTextStyle" href="#login" >Login      </a>
          <a className="nav-link navbarTextStyle" href="#register" >     Register</a>
        </div>
      </nav>
    );
  }
  

export default Navbar;