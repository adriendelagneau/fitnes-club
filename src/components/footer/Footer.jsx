import React from 'react';
import "./footer.css";

import { toast } from "react-toastify";

import logo from "../../assets/logo.png";
import { Phone } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';

const Footer = () => {
    return (
        <div className='footer-container' id="footer">
            <hr />
            <div className='footer'>
                <div className='logo-f'>
                    <img src={logo} alt="logo fitness" />
                </div>
                <div className='social-links'>
                    <GitHubIcon className='social-icon' sx={{fontSize: "4rem"}}/>
                    <InstagramIcon className='social-icon' sx={{fontSize: "4rem"}}/>
                    <LinkedInIcon className='social-icon' sx={{fontSize: "4rem"}}/>
                </div>
                <div>
                    <div className='phone-box' style={{display: 'flex'}}>
                        <div >
                            <Phone sx={{fontSize: "2rem", color: "white"}}/>
                        </div>
                        <div className='phone'>06 10 10 47 28 </div>
                    </div>
                    <div className='mail-box' onClick={() => window.location = 'mailto:fit-club@gmail.com'}>
                        <div>
                            <EmailIcon sx={{fontSize: "2rem", color: "white"}}/>
                        </div>
                        <div className='mail'>fit-club@gmail.com </div>
                    </div>



                    <div className='location-box' >
                    <div>
                        <PlaceIcon sx={{fontSize: "2rem", color: "white"}}/>
                    </div>
                    <a className='location' href="https://www.openstreetmap.org/#map=17/47.64871/-2.75969&layers=H" target="_blank" rel="noreferrer">Nous trouvez</a> 
                 
                </div>


                </div>
            </div>
            <div className='blur blur-footer-1'></div>
            <div className='blur blur-footer-2'></div>
        </div>
    );
};

export default Footer;