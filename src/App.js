import React from 'react';
import './App.css';
import UserBoard from './Components/UserBoard/UserBoard'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <UserBoard />
      </Router>
    </React.Fragment>
  );
}

export default App;
