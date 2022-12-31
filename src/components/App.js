import "../styles/App.css";
import React, { Component } from "react";
import DashBoard from "./DashBoard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../appFlow/Register"
import { GithubUserToServer } from '../appFlow/githubRegister';
import { Login } from "../appFlow/Login";
import {Board} from "../components/Board";
import {Task} from "../components/Task";
import {FilteredTasksPage} from "../components/FilteredTasksPage"

function App() {
  return (
    <div className='App'>
    <Router>
      <Routes>
          <Route exact path="/task/" element={<Task/>} />
        <Route exact path="/board" element={<DashBoard/>} />
        <Route exact path="/board/:boardId" element={<Board/>} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/registerWithGithub"  element={<GithubUserToServer/>}/>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Login />} />
      <Route path="board/filtered-tasks" element={FilteredTasksPage} />



      </Routes>
    </Router>
    </div>
  );
}


export default App;