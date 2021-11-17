import React, {useEffect, useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'

export default function Slider(props) {
    const { handleClose } = props;
    const [slideIndex, setSlideIndex] = useState(1);
    const timeoutRef = React.useRef(null);
    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }
    
    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => nextSlide(),
          5000
        );
        return () => {
            resetTimeout();
          };
    }, [slideIndex]);
      

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} 
                        />
                        { obj.hasButton ? (
                            <div onClick={handleClose} className="slider_button">
                                Підпишись на оновлення
                            </div>
                        ) : null}
                        { obj.subTitle ? 
                        (<div className="banner_text">
                            <span>{obj.subTitle}</span>
                        </div>) : null }
                        

                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 3}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}
