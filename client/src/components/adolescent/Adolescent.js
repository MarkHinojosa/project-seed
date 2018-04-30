import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './adolescent.css'

class Adolescent extends Component {
  componentDidMount() {
    this.props.loadAdolescents();
  }
  render() {
    const listImages = this.props.state.adolescent.map((instance) => {
      const imageUrl = instance.image;
      const uniqueId = instance._id;
      const summary = instance.title;
      return ( 
        <div className="list-entry" key={uniqueId}>
        <Link to={"/adolescent/" + uniqueId}><img className="list-img" src={imageUrl} alt="adolescent" /></Link>
        <h2>{summary}</h2>
      </div>
      )    
    });

    return (
      <div className="adol-container">
        <nav className="adol-nav">
          <nav1>
            <Link to="/"><button value="child" className="home-btn">Home</button></Link>
            <Link to="/contribute"><button value="child" className="contribute-btn">Contribute</button></Link>
          </nav1>
        </nav>
        <main className="cont">
          {listImages}
        </main>
      </div>
    )
  }
}

export default Adolescent; 