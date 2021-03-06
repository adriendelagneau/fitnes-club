import React, { useState} from 'react';
import "./join.css"

import { toast } from "react-toastify";


const Join = () => {
   const [email, setEmail] = useState("")

   const regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');



    const getNewEmailForMyCollecton = (e) => {
        e.preventDefault();
        if(regex.test(email)){
          toast(`Nous allons prendre contact avec vous au plus vite ...`)
          setEmail("")
        }else{
          toast.success("email invalid")
        }
      };

    return (
        <div className='join' id="join-us">
          <div className='left-join'>
          <hr />
            <div>
                <span >PRET </span>
                <span className='stroke-text'>A</span>
            </div>
            <div>
              <span className='stroke-text'>NOUS </span>
              <span>REJOINDRE</span>

          </div>
          </div>
          <div className='right-join'>
            <form  className='email-container' onSubmit={getNewEmailForMyCollecton}>
                <input 
                  type="email" 
                  name="user_email" 
                  placeholder='Votre email'
                  value={email}
                  onChange={(e) => setEmail( e.target.value)}
                  
                />
                <button className='btn btn-join' >Evoyer</button>
            </form>
          </div>  
        </div>
    );
};

export default Join;