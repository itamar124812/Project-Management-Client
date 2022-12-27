import "../styles/App.css";
import React, { Component } from "react";
import Board from "./Board";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../appFlow/Register"
import { GithubUserToServer } from '../appFlow/githubRegister';

class App extends Component {
  render() {
    return (
      <div className="App">
              <div className="Header">Project</div>
    <Router>
      <Routes>
       // <Route exact path="/register" element={<Register />} />
        <Route exact path="/board" element={<Board />} />
        <Route path="/registerWithGithub"  element={<GithubUserToServer/>}/>
      </Routes>
    </Router>
      </div>
    );
  }
}

export default App;
