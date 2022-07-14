import React from 'react';
import "./programs.css"
import {programsData} from "../../data/programsData" 
import rightArrow from "../../assets/rightArrow.png"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Link} from 'react-scroll'

const Programs = () => {
    return (
        <div className='programs' id="programs">

        <div className='blur programs-blur-1'></div>
        <div className='blur programs-blur-2'></div>
        
            {/* header */}
            <div className='programs-header'>
                <span className='stroke-text'>Explore our</span>
                <span>Programs</span>
                <span className='stroke-text'>to shape you</span>
            </div>

            <div className='programs-categories'>
                {programsData.map((p) => (
                    <div className='category'>
                        {p.image}
                        <span>{p.heading}</span>
                        <span>{p.details}</span>
                        <Link
                            to='footer'
                            span={true}
                            smooth={true}
                        >
                        <div className='join-now'>
                                <span>Join Now</span>
                                <ArrowForwardIcon style={{color: "aliceblue", fontSize: "2rem"}}/>
                                </div>
                                </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Programs;