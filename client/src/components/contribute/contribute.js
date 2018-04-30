import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./contribute.css"
class Contribute extends Component {
  constructor() {
    super();
    this.state = {
      ageGroup: "",
      title: "",
      body: "",
      image: "",
      video: "",
    }
  }

  render() {
    return (
      <div className="adult-container">
        <nav className="adult-nav">
          <nav1>
            <Link to="/"><button value="child" className="home-btn">Home</button></Link>
          </nav1>
        </nav>
        <main className="cont">
          <div>
            <h2>Thank you!</h2>
            <form onChange={(e) => {
              const ageSelected = e.target.value;
              this.setState({
                ageGroup: ageSelected
              });
            }}>
              Age group:
            <br />
              <input type="radio" name="ageGroup" id="" value="child" />Child
            <br />
              <input type="radio" name="ageGroup" id="" value="adolescent" />Adolescent
            <br />
              <input type="radio" name="ageGroup" id="" value="adult" />Adult
            </form>
            <p></p>
            <form onSubmit={(e) => {
              console.log(this.state)
              e.preventDefault();
              if (this.state.ageGroup === "child" && this.props.createChildSeed) {
                this.props.createChildSeed(this.state);
              }
              if (this.state.ageGroup === "adolescent" && this.props.createAdolescentSeed) {
                console.log("made it to adolescent ")
                this.props.createAdolescentSeed(this.state);
              }
              if (this.state.ageGroup === "adult" && this.props.createAdultSeed) {
                this.props.createAdultSeed(this.state);
              }
            }}>
              <div>
                Title: <input placeholder="required" onChange={(e) => {
                  const title = e.target.value;
                  this.setState({
                    title: title
                  });
                }} />s
              </div>
              <div>
                <p></p>
                Body: <textarea placeholder="required" onChange={(e) => {
                  const body = e.target.value;
                  this.setState({
                    body: body
                  });
                }} />
              </div>
              <div>
                <p></p>
                Image: <input placeholder="optional" onChange={(e) => {
                  const image = e.target.value;
                  this.setState({
                    image: image
                  });
                }} />
              </div>
              <div>
                <p></p>
                Video: <input placeholder="optional" onChange={(e) => {
                  const video = e.target.value;
                  this.setState({
                    video: video
                  });
                }} />
              </div>
              <p></p>
              <button>Submit</button>
            </form>
          </div>
        </main>
      </div>
    )
  }

}

export default Contribute;