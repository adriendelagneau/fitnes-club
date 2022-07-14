import React from 'react';
import Header from '../header/Header';
import "./hero.css"
import hero_img from "../../assets/hero_image.png";
import hero_img_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png"
import {motion} from "framer-motion"
import NumberCounter from 'number-counter'
import FavoriteIcon from '@mui/icons-material/Favorite';

const Hero = () => {

    const transition = {type: "spring", duration: 3}
    return (
        <div className='hero' id="hero">
            <div className='blur hero-blur'></div>
            
            <div className='left-hero'>
                <Header />
        {/* Best Ad*/}
                <div className='best-ad'>
                    <motion.div
                        initial={{left: '210px'}}
                        whileInView={{left: '8px'}}
                        transition={{...transition, type: 'tween'}}
                    >
                    </motion.div>
                    <span>the best fitness club in the town</span>
                </div>
        {/* Hero Heading */}
                <div className='hero-text'>
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                <div>
                <span>Ideal Body</span>
            </div>
        <div >
        <span>
        lorem5Pariatur pariatur velit id ut amet nisi 
        consequat non aliquip consequat ullamco ex 
        aliqua irure.
        pariatur velit id ut amet nisi 
        </span>
        </div>
        </div>
        {/* Figures */}
        <div className='figures'>
        <div>
        <span>
            <NumberCounter end={140} start={100} delay={4} prefix="+" />
        </span>
        <span>expert coachs</span>
        </div>
        <div>
        <span>
        <NumberCounter end={978} start={800} delay={4} prefix="+" />
        </span>
        <span>members joined</span>
        </div>
        <div>
        <span>
        <NumberCounter end={50} start={0} delay={2} prefix="+" />
        </span>
        <span>fitness programs</span>
        </div>
        </div>
        {/* Hero Buttons */}
        <div className='hero-buttons'>
        <button className='btn'>Get Started</button>
        <button className='btn'>Learn More</button>
        </div>
        </div>
        
        
        <div className='right-hero'>
        <button className='btn'>Join Now</button>
        <motion.div 
            initial={{ right: '-1rem'}}
            whileInView={{ right: '4rem'}}
            transition={transition}
            className='heart-rate'
        >
        <FavoriteIcon style={{ color: 'red', fontSize: '3rem', padding: "0 auto" }}/>
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                    </motion.div>
                    
                    {/* hero image */}
                    <img src={hero_img} alt="" className='hero-img'/>
                    <motion.img 
                        src={hero_img_back} 
                        alt="" 
                        className='hero-img-back'
                        initial={{ right: '15rem'}}
                        whileInView={{ right: '30rem'}}
                        transition={transition}
                        />
                    
                    {/* hero calories */}
                    <motion.div 
                        className='calories'
                        initial={{ right: '57rem'}}
                        whileInView={{ right: '48rem'}}
                        transition={transition}
                        >
                    <img src={Calories} alt="graphique" />
                    <div>
                    <span>Calories Burned</span>
                    <span>220 Kcal</span>
                    </div>
                    </motion.div>    
                    </div>
                    </div>
                    );
                };
                
                export default Hero;