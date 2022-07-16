import React from 'react';
import "./programs.css"
import {programsData} from "../../data/programsData" 
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Link} from 'react-scroll'

const Programs = () => {
    return (
        <div className='programs' id="programs">

            <div className='blur programs-blur-1'></div>
            <div className='blur programs-blur-2'></div>
            
            {/* header */}
            <div className='programs-header'>
                <span className='stroke-text'>Decouvrez nos</span>
                <span style={{ color: "aliceblue"}}>Programmes</span>
                <span className='stroke-text'>d'entrainement</span>
            </div>

            <div className='programs-categories'>
                {programsData.map((p, i) => (
                    <div className='category' key={i}>
                        {p.image}
                        <span>{p.heading}</span>
                        <span>{p.details}</span>
                        <Link
                            to='footer'
                            smooth={true}
                        >
                            <div className='join-now'>
                                <span>Rejoigner nous</span>
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