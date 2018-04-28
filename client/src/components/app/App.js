import React, { Component } from 'react';
import SplashContainer from '../../containers/SplashContainer';
import './app.css';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import InfantContainer from '../../containers/InfantContainer';
import AdolescentContainer from '../../containers/AdolescentContainer';
import AdultContainer from '../../containers/AdultContainer';
import ChildContainer from '../../containers/ChildContainer';
import ToddlerContainer from '../../containers/ToddlerContainer';
import  ChildSeedContainer from '../../containers/ChildSeedContainer';
import  AdultSeedContainer from '../../containers/AdultSeedContainer';
import  AdolescentSeedContainer from '../../containers/AdolescentSeedContainer';
import ContributeContainer from '../../containers/ContributeContainer';




class App extends Component {
  render() {
      return (
        <BrowserRouter>
          <div id="topLevelMain">
            <Switch className="grid-container">
              <Route exact path="/infant" component={InfantContainer} />
              <Route exact path="/toddler" component={ToddlerContainer} />
              <Route exact path="/child" component={ChildContainer} />
              <Route exact path="/child/:id" component={ChildSeedContainer} />
              <Route exact path="/adolescent" component={AdolescentContainer} />
              <Route exact path="/adolescent/:id" component={AdolescentSeedContainer} />              
              <Route exact path="/adult" component={AdultContainer} />
              <Route exact path="/adult/:id" component={AdultSeedContainer} />
              <Route exact path="/contribute" component={ContributeContainer} />                                                                                    
              <Route exact path="/" component={SplashContainer} />              
            </Switch>
          </div>
        </BrowserRouter>
      )
    }
  }

export default App;
