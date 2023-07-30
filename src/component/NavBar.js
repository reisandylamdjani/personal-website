import {Nav, Container} from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import {useEffect, useState} from 'react';
import logo from '../assets/img/personal-photo.jpg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/github-mark-white.svg'
import resume from '../assets/img/Reisandy_Lamdjani_Resume.pdf'

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img className="rounded-circle"  src={logo} alt="Logo" width="300" height="300"/> 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                    onClick={() => onUpdateActiveLink('home')}>
                        Home
                    </Nav.Link>
                    <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'}
                    onClick={() => onUpdateActiveLink('project')}>
                        Projects
                    </Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                    onClick={() => onUpdateActiveLink('skills')}>
                        Skills
                    </Nav.Link>
                </Nav>
                <span className='navbar-text'>
                    <div className='social-icon'>
                        <a href="https://www.linkedin.com/in/reisandylamdjani/"><img src={navIcon1} alt="LinkedIn" /></a>
                        <a href="https://github.com/reisandylamdjani"><img src={navIcon2} alt="GitHub" /></a>
                    </div>
                    <button className='vvd'>
                        {/* <span>Let's Connect!</span> */}
                        <a href={resume} download="Resume" className='text-white'>Download Resume</a>
                    </button>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  )
}