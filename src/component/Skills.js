import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <h5>Angular</h5>
                            <h5>SQL</h5>
                            <h5>C#</h5>
                            <h5>Java</h5>
                            <h5>CSS</h5>
                            <h5>HTML</h5>
                            <h5>Javascript</h5>
                            <h5>OpenCV</h5>
                            <h5>MongoDB</h5>
                            <h5>SAP</h5>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}