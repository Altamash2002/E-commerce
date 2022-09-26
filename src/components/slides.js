import "./slides.css";
import { useState } from "react";
import ShopBtn from "./shopBtn";

const Slides = (props) => {

    const [currentIndex,setCurrentIndex] = useState(0);

    const leftArrowStyles = {
        position : "absolute",
        top : "50%",
        transform : "translate(0, -50%)",
        left : "32px",
        fontSize : "60px",
        color : "#fff",
        zIndex : 1,
        cursor: "pointer",
        width: "fit-content",
        fontWeight : "900",
        opacity : 0.3
    };
    const rightArrowStyles = {
        position : "absolute",
        top : "50%",
        transform : "translate(0, -50%)",
        right : "32px",
        fontSize : "60px",
        color : "#fff",
        zIndex : 1,
        cursor: "pointer",
        width: "fit-content",
        fontWeight : "900",
        opacity : 0.3
    };


    const goToNext = () =>{
        const isLastSlide = currentIndex === props.sliders.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToPrevious = () =>{
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? props.sliders.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    // styling slides dots
    const dotContainerStyles = {
        display : "flex",
        justifyContent : "center",
        position : "absolute",
        bottom : "-30px"
    }
    var dotStyles = {
        margin : "0 3px",
        cursor : "pointer",
        fontSize : "20px"
    }
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    return (
        <div className="banner">
            {/* slides */}
            <div id="slides" className="row justify-content-around align-items-center container-fluid text-center">
                <div className="col-md-5 banner-div1 my-sm-0 my-5">
                    <h3>Latest Trendings</h3>
                    <h1>{props.sliders[currentIndex].title}</h1>
                    <p>Last call for upto {props.sliders[currentIndex].discount}</p>
                    <ShopBtn/>
                </div>
                <div className="col-md-5 banner-div2 my-sm-0 my-5">
                    <img id="banner-img-1" className="img-fluid" src={props.sliders[currentIndex].url} alt="" />
                </div>
                <div id="left-arrow" style={leftArrowStyles} onClick = {goToPrevious}>&lt;</div>
                <div id="right-arrow" style={rightArrowStyles} onClick = {goToNext}>&#62;</div>

                {/* slides dots */}
                <div style={dotContainerStyles}>
                    {
                        props.sliders.map(
                            (slide,slideIndex) => (
                                <div style={dotStyles} key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                                    &#9711;
                                </div>
                            )
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default Slides;