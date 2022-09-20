import './sidebar.scss'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faFile, faComputer } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import React from 'react';
import { useState } from 'react'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);
    return (
        <div className='nav-bar'>
        <nav>
            <NavLink 
                exact = "true" 
                activeclassname = "active"
                className = "home-link" 
                to ="/home">
                <FontAwesomeIcon icon = {faHome} color = "#4d4d4e" />
            </NavLink>
            <NavLink 
                activeclassname = "active" 
                className = "about-link" 
                to ="/about">
                <FontAwesomeIcon icon = {faUser} color = "#4d4d4e" />
            </NavLink>
            <NavLink
                activeclassname = "active"
                className = "project-link"
                to = "/project">
                <FontAwesomeIcon icon = {faComputer} color = "#4d4d4e" />
            </NavLink>
            <NavLink 
                activeclassname = "active" 
                className = "contact-link" 
                to ="/contact">
                <FontAwesomeIcon icon = {faEnvelope} color = "#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                    target = "_blank"
                    rel = "noreferrer"
                    href = "https://www.linkedin.com/in/reisandylamdjani/">
                    <FontAwesomeIcon icon = {faLinkedin} color = "#4d4d4e" />
                </a>
            </li>
            <li>
                <a 
                    target = "_blank"
                    rel = "noreferrer"
                    href = "https://github.com/reisandylamdjani">
                    <FontAwesomeIcon icon = {faGithub} color = "#4d4d4e" />
                </a>
            </li>
            <li>
                <a 
                    target = "_blank"
                    rel = "noreferrer"
                    href = "https://bit.ly/ReisandyLamdjaniResume">
                    <FontAwesomeIcon icon={faFile} color = "#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
    )
}

export default Sidebar