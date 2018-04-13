import React, { Component } from 'react';
import './style.css'

class Adolescent extends Component {

  componentDidMount() {
    this.props.loadAdolescentSeed(this.props.match.params.id);
  }

  render() {
    const { title, body, image, likes } = this.props.seed.adolescentSeed;

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

export default Adolescent;