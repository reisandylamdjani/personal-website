// import React from "react";
// import Button from "@material-ui/core/Button";
// import MobileStepper from "@material-ui/core/MobileStepper";
// import Paper from "@material-ui/core/Paper";
// import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
// import Typography from "@material-ui/core/Typography";
// import { useTheme } from "@material-ui/core/styles";
// import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";

// const MyCollection = [
// {
// 	label: "First Picture",
// 	imgPath:
// "https://media.geeksforgeeks.org/wp-content/uploads/20210208000010/1.png",
// },
// {
// 	label: "Second Picture",
// 	imgPath:
// "https://media.geeksforgeeks.org/wp-content/uploads/20210208000009/2.png",
// },
// {
// 	label: "Third Picture",
// 	imgPath:
// "https://media.geeksforgeeks.org/wp-content/uploads/20210208000008/3.png",
// },
// ];

// const Slideshow = () => {
// const CollectionSize = MyCollection.length;
// const theme = useTheme();
// const [index, setActiveStep] = React.useState(0);

// const goToNextPicture = () => {
// 	setActiveStep((prevActiveStep) => prevActiveStep + 1);
// };

// const goToPrevPicture = () => {
// 	setActiveStep((prevActiveStep) => prevActiveStep - 1);
// };

// return (
// 	<div
// 	style={{
// 		marginLeft: "40%",
// 	}}
// 	>
// 	<h2>How to Create Image Slider in ReactJS?</h2>
// 	<div
// 		style={{
// 		maxWidth: 400,
// 		flexGrow: 1,
// 		}}
// 	    >
// 		<Paper
// 		square
// 		elevation={0}
// 		style={{
// 			height: 50,
// 			display: "flex",
// 			paddingLeft: theme.spacing(4),
// 			backgroundColor: theme.palette.background.default,
// 			alignItems: "center",
// 		}}
// 		>
// 		<Typography>{MyCollection[index].label}</Typography>
// 		</Paper>
// 		<img
// 		src={MyCollection[index].imgPath}
// 		style={{
// 			height: 255,
// 			width: "100%",
// 			maxWidth: 400,
// 			display: "block",
// 			overflow: "hidden",
// 		}}
// 		alt={MyCollection[index].label}
// 		/>
// 		<MobileStepper
// 		variant="text"
// 		position="static"
// 		index={index}
// 		steps={CollectionSize}
// 		nextButton={
// 			<Button
// 			size="small"
// 			onClick={goToNextPicture}
// 			disabled={index === CollectionSize - 1}
// 			>
// 			Next
// 			{theme.direction !== "rtl" ? (
// 				<KeyboardArrowRight />
// 			) : (
// 				<KeyboardArrowLeft />
// 			)}
// 			</Button>
// 		}
        
// 		/>
//         {/* <MobileStepper
// 		variant="text"
// 		position="static"
// 		index={index}
// 		steps={CollectionSize}
// 		prevButton={
// 			<Button
// 			size="small"
// 			onClick={goToPrevPicture}
// 			disabled={index === CollectionSize - 1}
// 			>
// 			Prev
// 			{theme.direction !== "rtl" ? (
// 				<KeyboardArrowRight />
// 			) : (
// 				<KeyboardArrowLeft />
// 			)}
// 			</Button>
// 		}></MobileStepper> */}
// 	</div>
// 	</div>
// );
// };

// export default Slideshow;
import { useState } from "react";

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

const Slideshow = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow