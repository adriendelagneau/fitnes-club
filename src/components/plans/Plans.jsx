import React from 'react'
import "./plans.css"
import {plansData} from "../../data/plansData"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {Link} from 'react-scroll'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Plans() {
  return (
    <div className='plans-container' id="plans">

      <div className='blur plans-blur-1'></div>
      <div className='blur plans-blur-2'></div>
    
      <div className='programs-header' style={{gap: '2rem'}}>
      
        <span style={{color: 'aliceblue'}}>PRET A </span>
        <span className='stroke-text'> COMMENCER</span>
        <span style={{color: 'aliceblue'}}>L'AVENTURE</span>
        <span className='stroke-text'>AVEC NOUS</span>
      </div>

      {/* plans card */}
      <div className='plans'>
        {plansData.map((p, i) => (
          <div className='plan' key={i}>
            {p.icon}
            <span>{p.name}</span>
            <span>{p.price} €</span>

            <div className='features'>
              {p.features.map((f, j) => (
                <div className='feature' key={j}>
                  <CheckCircleIcon />
                  <span key={i}>{f}</span>
                </div>
              ))}
            </div>
            <div >
                <span className='benefits'>Plus d'informations... <ArrowDownwardIcon style={{fontSize: "1.4rem", paddingLeft: "1rem"}}/></span>
            </div>
            <Link
              to='footer'
              smooth={true}
            >
              <div
                className='btn'
                style={{color: "black"}}
                >
                Rejoigner nous
                </div>
              </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Plans