import React, { useRef } from 'react';
import "./join.css"
import emailjs from '@emailjs/browser'
import { toast } from "react-toastify";


const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        toast(`Nous allons prendre contact avec vous au plus vite ...`)
      };

    return (
        <div className='join' id="join-us">
          <div className='left-join'>
          <hr />
            <div>
                <span className='stroke-text'>PRET A</span>
                <span> TONNIFIER</span>
            </div>
            <div>
              <span >VOTRE CORP</span>
              <span className='stroke-text'> AVEC NOUS ?</span>
          </div>
          </div>
          <div className='right-join'>
            <form ref={form} className='email-container' onSubmit={sendEmail}>
                <input type="email" name="user_email" placeholder='Votre email'/>
                <button className='btn btn-join' >Evoyer</button>
            </form>
          </div>  
        </div>
    );
};

export default Join;