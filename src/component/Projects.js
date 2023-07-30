import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
// import colorSharp2 from "../assets/img/color-sharp.png";
import initialCar from "../assets/img/initialCar.jpg";
import final from "../assets/img/finalCarSetup.jpg";
import leftGesture from "../assets/img/IMG_8458.png"
import "animate.css"
import TrackVisibility from "react-on-screen"

export const Projects = () => {
    const projects = [
          {
            title: "Initial Car Design",
            description: "Initial Car design with minimal attachments",
            imgUrl: initialCar,
          },
          {
            title: "Left Hand Gesture Detection Tracker",
            description: "Using Google Mediapipe, we were able to create different gestures that corresponded to different commands",
            imgUrl: leftGesture,
          },
          {
            title: "Final Car Design",
            description: "Final Car design with all attachments",
            imgUrl: final,
          }
    ];
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {({isVisible}) => 
                            <div className={isVisible ? "animate__animated animate__fadeInDown" : ""}>
                                <h2>Projects</h2>
                                <p>Below are projects that I have completed at school or personally</p>
                                <Tab.Container id="project-tabs" defaultActiveKey="first">
                                    <Nav variant="pills" className="nav-pills mb-5 justif-content-center align-items-center"
                                    id="pills-tab">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">UCSD RoboCar Jetson Nano
                                            </Nav.Link>
                                        </Nav.Item>
                                        {/* <Nav.Item>
                                            <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                        </Nav.Item> */}
                                    </Nav>
                                    <Tab.Content>
                                        <a href="https://github.com/UCSD-ECEMAE-148/winter-2023-final-project-team-15">
                                            ECE 148: Intro to Autonomous Vehicle
                                        </a>
                                        <Tab.Pane eventKey="first">
                                            <Row>
                                                {
                                                    projects.map((project, index) => {
                                                        return (
                                                            <ProjectCard
                                                            key={index}
                                                            {...project}/>
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                        {/* <Tab.Pane eventKey="second"> Loren Ipsum</Tab.Pane>
                                        <Tab.Pane eventKey="third"> Loren Ipsum</Tab.Pane> */}
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        }
                    </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-image-right" src={colorSharp2}></img> */}
        </section>
    )
}