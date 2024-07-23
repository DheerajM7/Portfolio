import React from 'react';
import './intro.css';
import bg from '../../assets/bg.png';
import bg2 from '../../assets/bg2.png';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Dheeraj</span> <br />Frontend Developer</span>
            <p className="introPara">I am a skilled frontend developer with experience in creating <br /> visually appealing and user friendly websites.</p>
            <Link><button className="btn"><img src={btnImg} alt="hireme" className="hireMeImg" />Hire Me</button></Link>
        </div>
        <img src={bg} alt="pic1" className="bg"></img>
        <img src={bg2} alt="pic2" className="bgbase"></img>
    </section>
  )
}

export default Intro;