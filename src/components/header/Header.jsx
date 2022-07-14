import React from 'react';
import "./header.css"
import Logo from "../../assets/logo.png"
import {Link} from 'react-scroll'

const Header = () => {

    const changeForm = () => {
        const menuIcon = document.getElementById("myID");
        const menuLinks = document.getElementById("sidebar")
        
        
            if(menuIcon.classList.contains("open"))
                menuIcon.classList.remove("open")
            else{
                menuIcon.classList.add("open")
            }

            if(menuLinks.classList.contains('open'))
                menuLinks.classList.remove("open")
            else{
                menuLinks.classList.add("open")
            }
        }

        // REBOOT MENU BURGER AND SIDEBAR SYSTEM
  window.addEventListener('resize', ()=> {
    const menuLinks = document.getElementById("sidebar")
    const menuIcon = document.getElementById("sidebar");

    if(window.innerWidth > 980 ) {
        menuLinks.classList.remove("open")
        menuIcon.classList.remove("open")
    }
}, true);

      


    return (
        <div className='header'>
            <img className='logo' src={Logo} alt='Logo fitness' />
           
                <ul className='header-menu' id="sidebar">
                    <li>
                        <Link
                            to='hero'
                            span={true}
                            smooth={true}
                            onClick={changeForm}
                        >Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='programs'
                            span={true}
                            smooth={true}
                            onClick={changeForm}
                        >Programs
                        </Link>
                    </li>
                    <li>
                        <Link
                        to='plans'
                        span={true}
                        smooth={true}
                        onClick={changeForm}
                        >Plans
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='testimonials'
                            span={true}
                            smooth={true}
                            onClick={changeForm}
                        >Testimonials
                        </Link>
                    </li>
                    {/**
                    
                    <li>
                    <Link
                    to='reasons'
                    span={true}
                    smooth={true}
                    >Why choose us ?
                    </Link>
                    </li>
                    */}
                    </ul>
       
                    <div className='left' onClick={changeForm}>
                    <div className='burger'  id="myID">
                    <div className='barre'></div>
                    </div>
                    </div>
                    </div>
                    );
                };
                
                export default Header;