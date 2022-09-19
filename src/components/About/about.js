import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/animatedLetters'
import './about.scss'
import { faAngular, faHtml5, faJsSquare, faCss3, faReact, faJava } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import React, { Component }  from 'react';
import pic from '../../assets/images/IMG_6370.HEIC'
import Slideshow from './slideshow'

const About = () => {
    const slides = [
        {url: "https://raw.githubusercontent.com/monsterlessonsacademy/monsterlessonsacademy/221-react-image-slider/public/image-1.jpg", title: "wall1"},
        { url : "https://raw.githubusercontent.com/monsterlessonsacademy/monsterlessonsacademy/221-react-image-slider/public/image-2.jpg", title: "boat" },
        { url: "https://github.com/reisandylamdjani/personal-website/blob/phase-one-website/src/assets/images/DSC09020.JPG", title: "forest" },
        // { url: "http://localhost:3000/image-4.jpg", title: "city" },
        // { url: "http://localhost:3000/image-5.jpg", title: "italy" },
      ];

    const containerStyles = {
    width: "1000px",
    height: "280px",
    margin: "0 auto",
    };
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('title-animate-hover')
        }, 3000);
        return () => clearTimeout(timer);
      }, []);

    return (
        <>
            <div className='container about-page'>
                {/* <img src ={pic}/> */}
                <div> Hello</div>
                <div 
                    style={containerStyles}>
                    <Slideshow slides={slides}/>
                </div>
                <div className='about-me-text-zone'>
                    <div class = "about-me-title">
                        <span className={`${letterClass} _15`}>A</span>
                        <span className={`${letterClass} _16`}>b</span>
                        <span className={`${letterClass} _17`}>o</span>
                        <span className={`${letterClass} _18`}>u</span>
                        <span className={`${letterClass} _19`}>t</span>
                        <span className={`${letterClass} _20`}> </span>
                        <span className={`${letterClass} _21`}>M</span>
                        <span className={`${letterClass} _22`}>e</span>
                    </div>
                    <div class = "paragraph-text">
                        I am an incoming Fourth Year student at the University of California, San Diego. I am currently majoring in Computer Engineering.
                        Some of my interests include Hardware, Embedded Software, Web Development,
                        and GPU Programming. As a person, I am very hardworking and enjoy learning. I also enjoy spending time with family and friends doing various activities such as hiking, playing sports,
                        or going to the gym.
                    </div>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon = {faAngular} color = "#DD0031" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon = {faHtml5} color = "#F06529" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon = {faCss3} color = "#28A4D9" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon = {faReact} color = "#5ED4F4" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon = {faJsSquare} color = "#EFD81D" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon = {faJava} color = "#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type = "pacman" />
        </>
        

    )
}

export default About
