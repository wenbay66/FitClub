import React from 'react';
import './Hero.css';
import Header from '../Header/Header';

import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import { motion } from 'framer-motion';

const Hero = () => {

  const transition = {type: 'spring', duration: 3}

  return (
    <div className="hero">

      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* the-best-ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{left: '238px'}}
            whileInView={{left: '8px'}}
            transition={{...transition, tpye: 'tween'}}
          >

          </motion.div>
          <span>the best fitness club in the town</span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape</span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptas iusto 
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className='hero-buttons'>
          <button className='btn'>Get Start</button>
          <button className='btn'>Learn more</button>
        </div>

      </div>
      <div className="right-h">
        <button className='btn'>Join Now</button>

        <motion.div 
          className="heart-rate"
          initial={{right: '-1rem'}}
          whileInView={{right: '4rem'}}
          transition={transition}
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero images */}
        <img src={hero_image} className='hero-image' alt="" />
        <motion.img 
        src={hero_image_back} 
        className='hero-image-back' 
        initial={{right: '11rem'}}
        whileInView={{right: '20rem'}}
        transition={transition}
        alt="" 
        />

        {/* calories */}
        <motion.div 
          className="calories"
          initial={{right: '37rem'}}
          whileInView={{right: '28rem'}}
          transition={transition}
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
};

export default Hero;