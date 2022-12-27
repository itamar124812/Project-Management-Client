import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./appFlow/Register";
function App() {
  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
