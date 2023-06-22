import React from 'react';
// import logo from './icon.png';
import {
    FaGithub,
    FaGlobe,
    FaLinkedin
} from 'react-icons/fa';
import './Footer.css';

function Footer() {
    return (
        <>
            {/* <div className="blockcode" style={{ background: '#537B5E', textAlign: 'center', padding: '4px' }}> */}


            <div className='footer' style={{ color: 'white' }}>
                <a href='/' style={{ textDecoration: 'none', color: 'white' }}>
                    {/* <img alt='logo' src={logo} style={{ width: '5%' }} /> */}
                    <span style={{ padding: '4px' }}>©ToDoWizard</span>
                </a>

                <div style={{ padding: '4px' }}>
                    <a style={{ padding: '4px', color: 'white' }} href='https://github.com/Tam55si' target="_blank" rel="noreferrer">
                        <FaGithub />
                    </a>
                    <a style={{ padding: '4px', color: 'white' }} href='https://www.linkedin.com/in/tanmoy-si-1a2329b4/' target="_blank" rel="noreferrer">
                        <FaLinkedin />
                    </a>
                    <a style={{ padding: '4px', color: 'white' }} href='https://tam55si-github-io.vercel.app/' target="_blank" rel="noreferrer">
                        <FaGlobe />
                    </a>
                </div>

            </div>


            {/* </div> */}

        </>
    )
}

export default Footer