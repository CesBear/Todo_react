import React, { Component } from 'react';
import '../App.css';
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import {Route} from "react-router-dom";
import HeroComponent from "./ParallaxHome";
import Header from "./Header";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <div>
          <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/" component={HeroComponent} />
                <Route exact path="/home" component={Home}/>
                <Route exact path="/today"/>
                <Route exact path="/list"/>
                <Route exact path="/list/id::"/>
            </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
