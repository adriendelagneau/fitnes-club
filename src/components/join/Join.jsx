import React, { useRef } from 'react';
import "./join.css"
import emailjs from '@emailjs/browser'


const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <div className='join' id="join-us">
          <div className='left-join'>
          <hr />
            <div>
                <span className='stroke-text'>READY TO</span>
                <span> LEVEL UP</span>
            </div>
            <div>
            <span >YOUR BODY</span>
            <span className='stroke-text'> WITH US ?</span>
        </div>
          </div>
          <div className='right-join'>
            <form ref={form} className='email-container' onSubmit={sendEmail}>
                <input type="email" name="user_email" placeholder='Enter Your Email'/>
                <button className='btn btn-join' >Join Now</button>
            </form>
          </div>  
        </div>
    );
};

export default Join;