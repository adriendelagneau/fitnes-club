import React from 'react'
import "./plans.css"
import {plansData} from "../../data/plansData"
import whiteTick from "../../assets/whiteTick.png"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {Link} from 'react-scroll'

function Plans() {
  return (
    <div className='plans-container' id="plans">

    <div className='blur plans-blur-1'></div>
    <div className='blur plans-blur-2'></div>
    
      <div className='programs-header' style={{gap: '2rem'}}>
        <span className='stroke-text'>READY TO START</span>
        <span style={{color: 'aliceblue'}}>YOUR JOURNEY</span>
        <span className='stroke-text'>NOW WITHUS</span>
      </div>

      {/* plans card */}
      <div className='plans'>
        {plansData.map((p, i) => (
          <div className='plan' key={i}>
            {p.icon}
            <span>{p.name}</span>
            <span>{p.price} €</span>

            <div className='features'>
              {p.features.map((f, i) => (
                <div className='feature'>
                  <img src={whiteTick} alt='' />
                  <span key={i}>{f}</span>
                </div>
              ))}
            </div>
            <div >
                <span className='titi'>See more benefits... <ArrowDownwardIcon style={{fontSize: "1.4rem", paddingLeft: "1rem"}}/></span>
            </div>
            <Link
              to='footer'
              span={true}
              smooth={true}
            >
            <div
              className='btn'
              style={{color: "black"}}
              >
              Join Now
              </div>
              </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Plans