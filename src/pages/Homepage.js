import React from 'react';
import './homepage.css';
import Sidebar from '../components/sidebar';
import Courdevelops from '../images/courdevelops.png';

function Homepage() {
  return (
    <div className='body'>

      <Sidebar/>

        <div className='headerhome'>

          <div className='logospace'>
            <img className='logo' src={Courdevelops} alt="Logo"/>
          </div>
          
          <p>'Blank' you've logged into the workflow machine</p>
          <div className='recents'>check out your recents</div>
        </div>
        
    </div>
  )
}

export default Homepage;