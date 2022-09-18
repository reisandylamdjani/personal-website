import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import './home.scss'
import {useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/animatedLetters';
import { useEffect } from 'react';
import Logo from '../Logo/logo';
import Loader from 'react-loaders';
import React, { Component }  from 'react';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'R', 'e', 'i', 's', 'a', 'n', 'd', 'y']
    //const jobArray = ['C', 'o', 'm','p', 'u', 't', 'e', 'r', ' ',
                   // 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r']

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('home-animate-hover')
        }, 4000);
        return () => clearTimeout(timer);
      }, []);

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>

                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    
                    <span className={`${letterClass} _15`}> </span>
                    <span className={`${letterClass} _16`}>R</span>
                    <span className={`${letterClass} _17`}>e</span>
                    <span className={`${letterClass} _18`}>i</span>
                    <span className={`${letterClass} _19`}>s</span>
                    <span className={`${letterClass} _20`}>a</span>
                    <span className={`${letterClass} _21`}>n</span>
                    <span className={`${letterClass} _22`}>d</span>
                    <span className={`${letterClass} _23`}>y</span>

                    <span className={`${letterClass} _15`}> </span>
                    <span className={`${letterClass} _16`}>L</span>
                    <span className={`${letterClass} _17`}>a</span>
                    <span className={`${letterClass} _18`}>m</span>
                    <span className={`${letterClass} _19`}>d</span>
                    <span className={`${letterClass} _20`}>j</span>
                    <span className={`${letterClass} _21`}>a</span>
                    <span className={`${letterClass} _22`}>n</span>
                    <span className={`${letterClass} _23`}>i</span>
                    <br />
                    <span className={`${letterClass} _15`}>C</span>
                    <span className={`${letterClass} _16`}>o</span>
                    <span className={`${letterClass} _17`}>m</span>
                    <span className={`${letterClass} _18`}>p</span>
                    <span className={`${letterClass} _19`}>u</span>
                    <span className={`${letterClass} _20`}>t</span>
                    <span className={`${letterClass} _21`}>e</span>
                    <span className={`${letterClass} _22`}>r</span>
                    <span className={`${letterClass} _23`}> </span>
                    <span className={`${letterClass} _15`}>E</span>
                    <span className={`${letterClass} _16`}>n</span>
                    <span className={`${letterClass} _17`}>g</span>
                    <span className={`${letterClass} _18`}>i</span>
                    <span className={`${letterClass} _19`}>n</span>
                    <span className={`${letterClass} _20`}>e</span>
                    <span className={`${letterClass} _21`}>e</span>
                    <span className={`${letterClass} _22`}>r</span>

                    </h1>
                    <h2> Student at University of California, San Diego</h2>
                    <Link to= "/contact" className = 'flat-button'>CONTACT ME</Link>
                </div>
                <Logo>Go Tritons!</Logo>
            </div>
            <Loader type = "pacman" />
        </>
        
    )
}

export default Home