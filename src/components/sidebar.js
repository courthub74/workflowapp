import React from 'react';
import './sidebar.css';
import Calendar from './images/calendar';

const Sidebar = () => {
    return (

        <div className='Sidebar'>
            <h2>Workflow Center</h2>
                <ul className='list-down'>
                    <div>
                        <img src={Calendar} alt="calendar"/>
                        <li>calendar</li>
                    </div>
                    <li>notes</li>
                    <li>tasks</li>
                    <li>spreadsheet</li>
                </ul>
        </div>
        
    )
}

export default Sidebar;