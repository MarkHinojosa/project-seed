import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './adult.css'

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
        <div className="entryDiv">
          <Link key={uniqueId} to={"/adult/" + uniqueId}><img className="imr" src={imageUrl} alt="adult" /></Link>
          <h2>{summary}</h2>
        </div>
      )
    });

    return (
      <div>
        <h3>Recommended</h3>
        <section>
        {listImages}
        </section>
      </div>
    )
  }
}

export default Adult;