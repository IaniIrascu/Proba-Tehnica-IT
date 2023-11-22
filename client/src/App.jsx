import "./App.css";
import "./index.css"
import React, { useRef, useEffect, useState } from "react";
import Navbar from "./components/myNavbar";
import Footer from "./components/myFooter"

function App() {
  return(
    <body>
    <div> 
      <Navbar/>
    </div>
    <div style={{width: "100%"}}>
      <Footer/>
    </div>
  </body>
  );
}

export default App;