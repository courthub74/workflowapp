import React from 'react';
import './loginsidebar.css';

const Loginsidebar = () => {
    return (

        <div className='loginsidebar'>

            <div className='NavHeading'>
                <h2>Workflow Center</h2>
            </div>


            <div className='annonymouslogin'>
                <p>Annonymous</p>
                <button className='annonbutton'>Login</button>
            </div>
        </div>
    )
} 

export default Loginsidebar;