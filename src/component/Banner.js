import {Row, Container,Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { useEffect, useState } from "react";
import "animate.css"
import TrackVisibility from "react-on-screen"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Computer Engineer", "Food Lover", "Gamer"];
    const [text, setText] = useState('');
    // How fast each letter comes out
    const [delta, setDelta] = useState(200 - Math.random() * 50);
    // Transition between each word
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        
        setText(updatedText);
        if(isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if(!isDeleting && updatedText == fullText) {
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({isVisible}) => 
                            <div className={isVisible ? "animate__animated animate__backInLeft" : ""}>
                                {/* <span className="tagline">Welcome to my Portfolio</span> */}
                                <h1>{`Hi I'm Reisandy, `}<span className="wrap">{text}</span></h1>
                                <p>Student at University of California, San Diego</p>
                                <button onClick={() => console.log('connect')}>Let's Connect!<ArrowRightCircle size={25}/></button>
                            </div>
                        }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        {/* <img src={face} alt="Header Img"/> */}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}