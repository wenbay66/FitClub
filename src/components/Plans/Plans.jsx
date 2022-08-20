import React from 'react';
import { plansData } from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';
import './Plans.css';

const Plans = () => {

  return (
    <div className="plans-container">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{gap:'2rem'}}>
        <span className='stroke-text'>READY TO START</span>        
        <span>YOUR JOURNEY</span>        
        <span className='stroke-text'>NOW WITHUS</span>        
      </div>

      {/* plans card */}
      <div className="plans">
        {plansData.map((plan, index) => {
          return (
            <div className="plan" key={index}>
              {plan.icon}
              <span>{plan.name}</span>
              <span>{plan.price}</span>
              
              <div className="features">
                {plan.features.map((feature, index) => (
                  <div className="feature" key={index}>
                    <img src={whiteTick} alt="" />                    
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div>
                <span>See more benefits -></span>
              </div>
              <button className="btn">Join Now</button>
            </div>
          )
        })}
      </div>
    </div>
  )
};

export default Plans;