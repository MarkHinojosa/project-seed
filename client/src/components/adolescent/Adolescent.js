import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Adolescent extends Component {
  componentDidMount() {
    this.props.loadAdolescents();
  }
  render() {
    const listImages = this.props.state.adolescent.map((instance) => {
      const imageUrl = instance.image;
      const uniqueId = instance._id;
      return ( 
        <div key={uniqueId}>
        <Link to={"/adolescent/" + uniqueId}><img src={imageUrl} alt="adolescent" /></Link>
      </div>
      )    
    });

    return (
      <div>
        adolescent component
      {listImages}
    </div>
    )
  }
}

export default Adolescent;