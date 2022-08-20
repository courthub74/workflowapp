import React from 'react';
import './sidebar.css';


const Sidebar = () => {
    return (

        <div className='Sidebar'>

            <div className='NavHeading'>
                <h2>Workflow Center</h2>
            </div>

            

                <ul className='list-down'>
                    <div className='calendar'>
                        
                        <li><a href='#'>calendar</a></li>
                    </div>

                    <div className='notes'>
                        <li><a href='#'>notes</a></li>
                    </div>

                    <div className='tasks'>
                        <li><a href='#'>tasks</a></li>
                    </div>

                    <div className='spreadsheet'>
                        <li><a href='#'>spreadsheet</a></li>
                    </div>

                </ul>
        </div>
        
    )
}

export default Sidebar;