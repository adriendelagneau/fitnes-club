import React, { useState } from 'react';
import "./testimonials.css"
import {testimonialsData} from "../../data/testimonialsData"

import {motion} from 'framer-motion'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Testimanials = () => {

    const transition = { type: "spring", duration: 3}
    const [selected, setSelected] = useState(0)
    const tLength = testimonialsData.length

    return (
        <div className='testimonials'>
           <div className='left-testi'>
                <span>Testimonials</span>
                <span className='stroke-text'>Que disent ils</span>
                <span> a propos de nous</span>
                <motion.span
                    key={selected}
                    initial={{ opacity: 0, x: 100}}
                    animate= {{ opacity: 1, x:0}}
                    exit={{opacity: 0, x: -100}}
                    transition={transition}
                >
                    {testimonialsData[selected].review}
                </motion.span>
                <span>
                    <span style={{color: `var(--orange)`}}>
                       {testimonialsData[selected].name}
                    </span>{" "}
                    - {testimonialsData[selected].status}
                </span>
           </div>
           <div className='right-testi'>
                <motion.div
                        initial={{ opacity: 0, x: -100}}
                        transition={{...transition, duration: 2}}
                        whileInView={{ opacity: 1, x: 0}}
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100}}
                    transition={{...transition, duration: 2}}
                    whileInView={{ opacity: 1, x: 0}}
                    ></motion.div>
                    <motion.img 
                        src={testimonialsData[selected].image} 
                        alt="" 
                        key={selected}
                        initial={{ opacity: 0, x: 100}}
                        animate= {{ opacity: 1, x:0}}
                        exit={{opacity: 0, x: -100}}
                        transition={transition}
                        />
                <div className='arrows'>
                    <ArrowBackIcon
                        style={{fontSize: "2rem", color: "aliceblue"}}
                        onClick={() => {
                            selected===0 
                                ? setSelected(tLength -1) 
                                : setSelected((prev) => prev -1) 
                        }}/>
                    <ArrowForwardIcon 
                        style={{fontSize: "2rem", color: "aliceblue"}}
                        onClick={() => {
                            selected===tLength -1
                                ? setSelected(0) 
                                : setSelected((prev) => prev +1) 
                        }}/>
                </div>
           </div>
        </div>
    );
};

export default Testimanials;