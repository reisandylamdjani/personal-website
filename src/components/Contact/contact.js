import './contact.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/animatedLetters'
import { useState, useEffect } from 'react'
import React, { Component }  from 'react';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('title-animate-hover')
        }, 4000);
        return () => clearTimeout(timer);
      }, []);

    return (
        <div>
            <div className = 'container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <span className={`${letterClass} _15`}>C</span>
                        <span className={`${letterClass} _16`}>o</span>
                        <span className={`${letterClass} _17`}>n</span>
                        <span className={`${letterClass} _18`}>t</span>
                        <span className={`${letterClass} _19`}>a</span>
                        <span className={`${letterClass} _19`}>c</span>
                        <span className={`${letterClass} _19`}>t</span>
                        <span className={`${letterClass} _20`}> </span>
                        <span className={`${letterClass} _21`}>M</span>
                        <span className={`${letterClass} _22`}>e</span>
                    </h1>
                    <div class = "contact-me-text">
                        You can connect with me through lamdjani@gmail.com or simply fill out 
                        the form below.
                    </div>
                    <div className='contact-form'>
                        <form>
                            <ul>
                                <li className='half'>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        placeholder="Name" 
                                        required>
                                    </input>
                                </li>
                                <li className='half'>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        placeholder="Email" 
                                        required>
                                    </input>
                                </li>
                                <li>
                                    <input placeholder = "Subject" type = "text" name="subject" required>
                                    </input>
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND"></input>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="pacman"></Loader>
        </div>
    )
}

export default Contact