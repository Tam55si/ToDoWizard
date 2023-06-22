import React from 'react';
import './NavigationBar.css';

function NavigationBar() {
    return (
        <>
            <ul className='unorderedList'>
                <li><a class="active" href="/" style={{ fontSize: '22px', fontWeight: 'bold' }}>ToDoWizard</a></li>
                <li><a class="active" href="/" style={{ fontStyle: 'italic', fontSize: '17px', fontWeight: 'light', color: 'black' }}>  “ Unleash your productivity with ToDoWizard ”</a></li>


                {/* <li><a href="#about">About</a></li> */}
            </ul>
        </>
    )
}

export default NavigationBar
