import React from 'react';
import Courdevelops from '../images/courdevelops.png';
import './loginpage.css';

function Loginpage() {
  return (
    <div className='body'>

        {/* LOGIN PAGE */}
        <div className='pagepart'>
          
          
          <div className='mainheader'>


            <img className='Courdevelops' src={Courdevelops} alt="Logo"/>
              <p className='headliner'>This is the Workflow Machine</p>


              <div className='loginfield'>
                  <div className='inputs'>
                      <p className='login'>Login</p>
                      <input className='user' placeholder='username' required></input>
                      <input className='password' placeholder='password' required></input>
                  </div>

                  <div className='submitbutton'>
                    <button className='submit'>Submit</button>
                  </div>

              </div>
          </div>

      </div>
    </div>
  )
}

export default Loginpage;