import React, { Component } from "react";
import {
  Routes,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./container/Home";
import MobileLegends from "./container/MobileLegends/MobileLegends";
import FreeFire from "./container/FreeFire/FreeFire";




class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <header className="main-header">
            <div className="container">
              <nav className="main-navbar">
              <h1 className="title"><NavLink to="/">Check Username</NavLink></h1>
                <ul className="header">
                  <li key="1"><NavLink to="/">Home</NavLink></li>
                  <li key="2"><NavLink exact="true" to="/mobilelegends">Mobile Legends</NavLink></li>
                  <li key="3"><NavLink to="/freefire">Freefire</NavLink></li>
                </ul>
              </nav>
            </div>
            <div className="content container">
              <Routes>
                  <Route exact="true" path="/" element={<Home />}/>
                  <Route exact="true" path="/mobilelegends" element={<MobileLegends />}/>
                  <Route exact="true" path="/freefire" element={<FreeFire />}/>
              </Routes>
            </div>
          </header>
        </div>
        </HashRouter>
    );
  }
}

export default Main;