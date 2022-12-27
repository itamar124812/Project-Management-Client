import "../styles/App.css";
import React, { Component } from "react";
import Board from "./Board";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../appFlow/Register"
class App extends Component {
  render() {
    return (
      <div className="App">
              <div className="Header">React Trello Clone</div>
    <Router>
      <Routes>
       // <Route exact path="/register" element={<Register />} />
        <Route exact path="/board" element={<Board />} />
      </Routes>
    </Router>
      </div>
    );
  }
}

export default App;
