import React from 'react';
import "./reasons.css";
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import nb from "../../assets/nb.png"
import addidas from "../../assets/adidas.png"
import nike from "../../assets/nike.png"
import tick from "../../assets/tick.png"

const Reasons = () => {
    return (
        <div className='reasons' id="reasons">
            <div className='left-reasons'>
                <div className='grid-box-1'>
                    <img src={image1} alt="" />
                </div>
                <div className='grid-box-2'>
                    <div className='grid-box-3'>
                        <img src={image2} alt="" />
                    </div>
                    <div className='grid-box-4'>
                        <div className='grid-box-5'>
                            <img src={image3} alt="" />
                        </div>
                        <div className='grid-box-6'>
                            <img src={image4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='right-reasons'>
                <span>quelques raisons</span>
                <div>
                    <span className='stroke-text'>pourquoi </span>
                    <span>nous choisir ?</span>
                </div>
                <div className='details-reasons'>
                    <div>
                        <img src={tick} alt='' />
                        <span>PLUS DE 140 COACHS EXPERTS</span>
                    </div>
                    <div>
                        <img src={tick} alt='' />
                        <span>ENTRAÎNEMENT PLUS INTELLIGENT ET PLUS RAPIDE </span>
                    </div>
                    <div>
                        <img src={tick} alt='' />
                        <span>PROGRAMMES GRATUIT PUR LES NOUVEAUX MEMBRES</span>
                    </div>
                    <div>
                        <img src={tick} alt='' />
                        <span>DES PARTENAIRES FIABLES</span>
                    </div>
                </div>
                <span style={{color: `var(--gray)`, fontSize: 'normal'}}>NOS PARTENAIRES</span>
                <div className='partners'>
                    <img src={nb} alt='nb'/>
                    <img src={addidas} alt='addidas'/>
                    <img src={nike} alt='nike'/>
                </div>
            </div>
        </div>
    );
};

export default Reasons;