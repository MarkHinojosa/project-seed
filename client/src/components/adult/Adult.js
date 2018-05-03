import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './adult.css';

class Adult extends Component {
  componentDidMount() {
    this.props.loadAdults();
  }
  render() {
    const listImages = this.props.state.adult.map((instance) => {
      const imageUrl = instance.image;
      const uniqueId = instance._id;
      const summary = instance.title;
      return (
        <div className="list-entry">
          <Link key={uniqueId} to={"/adult/" + uniqueId}><img className="list-img" src={imageUrl} alt="adult" /></Link>
          <h2>{summary}</h2>
        </div>
      )
    });

    return (
      <div className="adult-container">
        <nav className="adult-nav">
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

export default Adult;