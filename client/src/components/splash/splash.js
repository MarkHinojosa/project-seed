import React from 'react';
import './splash.css';
import { Link } from "react-router-dom";

const Splash = (props) => {
  return (
      <div className="wrapper">
        <section1 className="item1">
          <h1>Welcome To Project-Seed</h1>
          <p>A community driven, knowledge and experience sharing platform</p>
          <p>Please Select Student's Age Group</p>
          <div className="btnContainer">
            {/* <Link to="/infant"><button value="infant" className="btn">Infant</button></Link>
            <Link to="/toddler"><button value="toddler" className="btn">Toddler</button></Link> */}
            <Link to="/child"><button value="child" className="btn">Child</button></Link>
            <Link to="/adolescent"><button value="adolescent" className="btn">Adolescent</button></Link>
            <Link to="/adult"><button value="adult" className="btn">Adult</button></Link>
            <br/>
            <p>Or to contribute an idea:</p>
            <Link to="/contribute"><button value="contribute" className="btn">Contriubute</button></Link>
          </div>         
        </section1>
      </div>
  )
}

export default Splash;
