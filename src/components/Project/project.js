import './project.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/animatedLetters'
import { useState, useEffect } from 'react'
import React, { Component }  from 'react';

const Project    = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('title-animate-hover')
        }, 3000);
        return () => clearTimeout(timer);
      }, []);

    return (
        <div>
            <div className = 'project-page'>
                <div className='project-text-container'>
                    <div className = "project-title">
                        <span className={`${letterClass} _15`}>P</span>
                        <span className={`${letterClass} _16`}>r</span>
                        <span className={`${letterClass} _17`}>o</span>
                        <span className={`${letterClass} _18`}>j</span>
                        <span className={`${letterClass} _19`}>e</span>
                        <span className={`${letterClass} _19`}>c</span>
                        <span className={`${letterClass} _19`}>t</span>
                    </div>
                </div>

                <div className = 'project-description-textbox-container'>
                    <div className='project-description-textbox'>

                    </div>
                </div>
            </div>
            <Loader type="pacman"></Loader>
        </div>
    )
}
export default Project