import React from 'react';
import './splash.css';

const Splash = (props) => {
  console.log(props)
  return (
    <div>
      <div id="master" className="wrapper">
        <section className="item1">
          <h1>Welcome To Project-Seed</h1>
          <p>A community driven, knowledge and experience sharing platform</p>
          <p>Please Select Student's Age</p>
          <div className="btnContainer">
            <button value="infant" onClick={(e) => console.log(e.target.value)} className="btn">Infant</button>
            <button value="toddler" onClick={(e) => console.log(e.target.value)} className="btn">Toddler</button>
            <button value="child" onClick={(e) => console.log(e.target.value)} className="btn">Child</button>
            <button value="adolescent" onClick={(e) => console.log(e.target.value)} className="btn">Adolescent</button>
            <button value="adult" onClick={(e) => console.log(e.target.value)} className="btn">Adult</button>
          </div>
        </section>
      </div >
    </div >
  )
}

export default Splash;
