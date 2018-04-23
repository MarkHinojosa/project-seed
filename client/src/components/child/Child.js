import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './child.css'

class Child extends Component {

  componentDidMount() {
    this.props.loadChildren();
  }

  render() {
    const listImages = this.props.state.child.map((instance) => {
      const imageUrl = instance.image;
      const uniqueId = instance._id;
      const summary = instance.title;
      return (
        <div className="entryDiv" key={uniqueId}>
          <Link to={"/child/" + uniqueId}><img className="child-img" src={imageUrl} alt="child" /></Link>
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

export default Child;