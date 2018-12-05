import React, { Component } from 'react';
import '../App.css';
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import Route from "react-router-dom/es/Route";
import HeroComponent from "./home";
import Header from "./Header";
import CustomFooter from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
          <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/" component={HeroComponent} />
                <CustomFooter/>
            </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
