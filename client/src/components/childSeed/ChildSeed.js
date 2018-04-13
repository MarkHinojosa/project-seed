import React, { Component } from 'react';

class ChildSeed extends Component {

  componentDidMount() {
    this.props.loadChildSeed(this.props.match.params.id);
  }

  render() {
    const { title, body, image, likes } = this.props.seed.childSeed;

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

export default ChildSeed;