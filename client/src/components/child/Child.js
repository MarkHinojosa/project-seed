import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Child extends Component {

  componentDidMount() {
    this.props.loadChildren();
  }

  render() {
    const listImages = this.props.state.child.map((instance) => {
      const imageUrl = instance.image;
      const uniqueId = instance._id;
      return (
        <div key={uniqueId}>
          <Link to={"/child/" + uniqueId}><img src={imageUrl} alt="child" /></Link>
        </div>
      )
    });

    return (
      <div>
        {listImages}
      </div>
    )
  }
}

export default Child;