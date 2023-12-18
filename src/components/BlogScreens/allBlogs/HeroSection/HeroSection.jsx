import React from 'react'
import classes from "./HeroSection.module.css"
import HeroImage from '../../../../assets/images/heroBg.png'
import RightArrow from '../../../../assets/images/right-icon.gif'
import Wrapper from '../../../shared/Wrapper/Wrapper'
import { Link, useNavigate } from 'react-router-dom'
const HeroSection = ({move}) => {
    
  return (
    <section className={classes.heroBg}>
        <Wrapper>
        <div className={classes.heroMainBox}>
            <div className={classes.heroText}>
                    <h1>NeoCura Blogs</h1>
                    <p>Personal Stories. Expert Perspectives.</p>
                    <button onClick={move}className={classes.button}>Exlpore Our Blogs
                    <img src={RightArrow} /></button>
            </div>
            <img src={HeroImage} alt="hero pic" className={classes.heroPic}/>
        </div>
        </Wrapper>
    </section>
  )
}

export default HeroSection;