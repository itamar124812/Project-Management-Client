import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./appFlow/Register";
import { GithubUserToServer } from './appFlow/githubRegister';

function App() {
  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route path="/registerWithGithub"  element={<GithubUserToServer/>}/>
      </Routes>
    </Router>
    </div>
  );
}


export default App;
