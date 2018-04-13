import React, { Component } from 'react';
import './adultSeed.css'
class AdultSeed extends Component {

  componentDidMount() {
    this.props.loadAdultSeed(this.props.match.params.id);
  }

  render() {
    console.log(this.props);
    const { title, body, image, likes } = this.props.seed.adultSeed;

    return (
      <div>
        <section>
          <grid-item><h1>{title}</h1></grid-item>
          <grid-item><img src={image} alt="" /></grid-item>
          <grid-item><p>{body}</p></grid-item>
          <grid-item><div>Likes: {likes}</div></grid-item>
        </section>
      </div>
    )
  }
}

export default AdultSeed;