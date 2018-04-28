import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Contribute extends Component {

  render() {
    return (
      <div className="adult-container">
        <nav className="adult-nav">
          <nav1>
            <Link to="/"><button value="child" className="home-btn">Home</button></Link>
          </nav1>
        </nav>
        <main className="cont">
          <form>
            Age group:
            <br/>
            <input type="radio" name="ageGroup" id=""/>Child
            <br/>
            <input type="radio" name="ageGroup" id=""/>Adolescent 
            <br/>
            <input type="radio" name="ageGroup" id=""/>Adult
            <p></p>
            Title: <input type="text" name="title"/>
            <p></p>
            Body: <input type="text" name="body"/>
            <p></p>
            Image: <input type="text" name="image"/>
            <p></p>
            Video: <input type="text" name="video"/>
          </form>
        </main>
      </div>
    )
  }

}

export default Contribute;