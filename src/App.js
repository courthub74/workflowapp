import './App.css';
import Loginpage from './pages/loginpage';
import Homepage from './pages/Homepage';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
 
  return (
    <div className="App">

      <Router>
          <Routes>

              <Route path='/' element={<Loginpage/>} />
              <Route path='/home' element={<Homepage/>} />

          </Routes>
        
      </Router>
        
    </div>
  );
}

export default App;
