import React, { useState} from 'react';
import "./header.css"
import Logo from "../../assets/logo.png"
import {Link} from 'react-scroll'

const Header = () => {

    const [showLinks, setShowLinls] = useState(false)

    const handleLinks = () => {
        setShowLinls(!showLinks)
    }

      
    return (
        <div className='header'>
            <img className='logo' src={Logo} alt='Logo fitness' />
           
                <ul className={`header-menu ${showLinks ? "open" : "close"}`}   id="sidebar">
                    <li>
                        <Link
                            to='hero'
                            smooth={true}
                            onClick={handleLinks}
                        >Accueil
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='programs'
                            smooth={true}
                            onClick={handleLinks}
                        >Programmes
                        </Link>
                    </li>
                    <li>
                        <Link
                        to='plans'
                        smooth={true}
                        onClick={handleLinks}
                        >Abonnements
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='testimonials'
                            smooth={true}
                            onClick={handleLinks}
                        >Vos avis
                        </Link>
                    </li>
                    {/***/}
                    </ul>
       
                    <div className='left' onClick={handleLinks}>
                    <div className={` burger ${showLinks ? "open" : "close"}`}  id="myID">
                    <div className='barre'></div>
                    </div>
                    </div>
                    </div>
                    );
                };
                
                export default Header;