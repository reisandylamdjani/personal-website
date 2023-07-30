import { Container, Row, Col } from "react-bootstrap"
import Logo from "../assets/img/HD_File.png"
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/github-mark-white.svg'

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    {/* <Col sm={6}>
                        <img src={Logo} alt="Logo"/>
                    </Col> */}
                    <Col sm={12} className="text-center text-sm-end">
                        <div className="social-icon">
                        <a href="https://www.linkedin.com/in/reisandylamdjani/"><img src={navIcon1} alt="LinkedIn" /></a>
                        <a href="https://github.com/reisandylamdjani"><img src={navIcon2} alt="GitHub" /></a>
                        </div>
                        <p class="text-white">CopyRight 2023. All Right Reserved by Reisandy Lamdjani</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}