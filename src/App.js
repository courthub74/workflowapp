import './App.css';
// import Sidebar from './components/sidebar';
// import Loginsidebar from './components/loginsidebar';
import Loginpage from './pages/loginpage';
import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  // admin info
  // const adminUser = {
  //   username: "courdevelops",
  //   password: "SetuP12@9",
  // }

  // const [user, setUser] = useState({name: "", email: ""});
  // const [error, setError] = useState("");

  // const Login = details => {
  //   console.log(details);
  // }

  // const Logout = () => {
  //   console.log("Logout");
  // }

  return (
    <div className="App">

      <div className='body'>
        {/* <Loginsidebar/> */}
        <Loginpage/>
       
      </div>
    </div>
  );
}

export default App;
