import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Contribute extends Component {
  constructor() {
    super();
    this.state = {
      adult: {
        ageGroup: "",
        title: "",
        body: "",
        image: "",
        video: "",
      }
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="adult-container">
        <nav className="adult-nav">
          <nav1>
            <Link to="/"><button value="child" className="home-btn">Home</button></Link>
          </nav1>
        </nav>
        <main className="cont">
          {/* below is test submission code */}
          <div>
            {/* <button onClick={() => this.setState({adult: { body: "changed" }},
           () => {
             if(this.props.createAdultSeed) {
               this.props.createAdultSeed(this.state.adult);
             }
           })}>change local state</button> */}
            <h1>Adults test</h1>
            <form onSubmit={(e) => {
              e.preventDefault();
              if (this.props.createAdultSeed) {

                this.props.createAdultSeed(this.state.adult);
              }
            }}>
              <div>
                Title: <input placeholder="required" onChange={(e) => {
                  const adult = { title: e.target.value };
                  this.setState({
                    adult: Object.assign(this.state.adult, adult)
                  });
                }} />
              </div>
              <div>
                Body: <input placeholder="required" onChange={(e) => {
                  const adult = { body: e.target.value };
                  this.setState({
                    adult: Object.assign(this.state.adult, adult)
                  });
                }} />
              </div>
              <div>
                Image: <input placeholder="optional" onChange={(e) => {
                  const adult = { image: e.target.value };
                  this.setState({
                    adult: Object.assign(this.state.adult, adult)
                  });
                }} />
              </div>
              <div>
                Video: <input placeholder="optional" onChange={(e) => {
                  const adult = { video: e.target.value };
                  this.setState({
                    adult: Object.assign(this.state.adult, adult)
                  });
                }} />
              </div>
              <button>Create</button>
            </form>
          </div>

          {/* <form>
            Age group:
            <br/>
            <input type="radio" name="ageGroup" id=""/>Child
            <br/>
            <input type="radio" name="ageGroup" id=""/>Adolescent 
            <br/>
            <input type="radio" name="ageGroup" id=""/>Adult
            <p></p>
            Title: <input type="text" name="title"/>
            <p></p>
            Body: <input type="text" name="body"/>
            <p></p>
            Image: <input type="text" name="image"/>
            <p></p>
            Video: <input type="text" name="video"/>
          </form> */}
        </main>
      </div>
    )
  }

}

export default Contribute;