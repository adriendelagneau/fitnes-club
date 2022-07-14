import React from 'react';
import "./footer.css"

import logo from "../../assets/logo.png";
import { Phone } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <div className='footer-container' id="footer">
            <hr />
            <div className='footer'>
                <div className='logo-f'>
                    <img src={logo} alt="" />
                </div>
                <div className='social-links'>
                    <GitHubIcon sx={{fontSize: "4rem",color:"white" ,"&:hover": { color: `var(--orange)` } }}/>
                    <InstagramIcon sx={{fontSize: "4rem",color:"white" ,"&:hover": { color: `var(--orange)` } }}/>
                    <LinkedInIcon sx={{fontSize: "4rem",color:"white" ,"&:hover": { color: `var(--orange)` } }}/>
                </div>
                <div>
                    <div style={{display: 'flex'}}>
                        <div >
                            <Phone sx={{fontSize: "2rem",color:"white"  }}/>
                        </div>
                        <div style={{color: "aliceblue", fontSize: "2rem", paddingLeft: "1.5rem"}}>06 10 10 47 28 </div>
                    </div>
                    <div className='toto' style={{display: 'flex', marginTop: '1rem' }} onClick={() => window.location = 'mailto:fit-club@gmail.com'}>
                        <div>
                            <EmailIcon sx={{fontSize: "2rem",color:"white"  }}/>
                        </div>
                        <div style={{color: "aliceblue", fontSize: "2rem" ,paddingLeft: "1.5rem"}}>fit-club@gmail.com </div>
                    </div>
                </div>
            </div>
            <div className='blur blur-footer-1'></div>
            <div className='blur blur-footer-2'></div>
        </div>
    );
};

export default Footer;