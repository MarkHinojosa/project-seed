import React, { Component } from 'react';
import './style.css';
import { Link } from "react-router-dom";

class Adolescent extends Component {

  componentDidMount() {
    this.props.loadAdolescentSeed(this.props.match.params.id);
  }

  render() {
    const { title, body, image, likes, video } = this.props.seed.adolescentSeed;

    return (
      <div className="adol-seed-container">
        <nav className="adult-seed-nav">
          <nav1>
            <Link to="/"><button value="child" className="home-btn">Home</button></Link>
            <Link to="/adol"><button value="child" className="list-btn">List</button></Link>
            <Link to="/contribute"><button value="child" className="contribute-btn">Contribute</button></Link>
          </nav1>
        </nav>
        <article>
          <h1 className="adult-seed-title">{title}</h1>
          <img id="adult-seed-img" src={image} alt="" />
          <p>{body}</p>
          <div>Likes: {likes}</div>
        </article>
      </div>
    )
  }
}

export default Adolescent;