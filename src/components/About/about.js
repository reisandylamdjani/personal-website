import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/animatedLetters'
import './about.scss'
import { faAngular, faHtml5, faJsSquare, faCss3, faReact, faJava } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import React from 'react';
import pic from '../../assets/images/test1.JPG'
import Slideshow from './slideshow'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
    const slides = [
        {url: "https://i.postimg.cc/6QW7hFPJ/IMG-6428.jpg", title: "soloPic"},
        {url: "https://i.postimg.cc/h4TmbF4v/IMG-6335.jpg", title: "koko's wedding" },
        {url: "https://i.postimg.cc/pdKvcBmf/IMG-6420.jpg", title: "halloweenPhotoshoot" },
        {url: "https://i.postimg.cc/nrHD8FfV/DSC8867.jpg", title: "The sea with rocks"},
        {url: "https://i.postimg.cc/HWRgPSwR/IMG-6397.jpg", title: "SDSnowboardTrip2021" },
        {url: "https://i.postimg.cc/Wb6Pb0q1/mammooth-Snowboard.jpg", title: "mammoothSnowboard" },
        {url: 'https://i.postimg.cc/Kcs7MTPm/test1.jpg', title: "The other sea" },
        {url: "https://i.postimg.cc/Mpqfv0sP/DSC09020.jpg", title: "SDHiking" },
        {url: "https://i.postimg.cc/y6yd87Ym/08b23248-05e7-4255-9af6-55c618a3cf3e.jpg", title: "halloweenPhotoshoot" }
      ];

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
                <Row>
                    <Col>
                        <div className='container-styles'>
                            <Slideshow slides={slides}/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md = {4}>
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
                    </Col>
                    <Col md={8}>
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
                    </Col>
                </Row>
            </div>
            <Loader type = "pacman" />
        </>
        

    )
}

export default About
