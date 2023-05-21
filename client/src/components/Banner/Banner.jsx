import { useEffect, useRef, useState } from 'react';
import './Banner.css';
const Banner = () => {
    const [activeSlideIndex, setIndex] = useState(0);
    const [sliderHeight, setSliderHeight] = useState(0);
    const slideCount = 4;
    const sliderContainer = useRef();
    let timer = useRef()
    useEffect(() => {
        timer.current = setInterval(() => changeSlide('up'), 4000);
        return () => {
            clearInterval(timer.current);
        }
    })

    function changeSlide(direction) {
        setSliderHeight(sliderContainer.current.clientHeight);
        if (timer.current) {
            clearInterval(timer.current);
        }
        if (direction === 'up') {
            if (activeSlideIndex === slideCount - 1) {
                setIndex(0);
            } else {
                setIndex(activeSlideIndex + 1);
            }
        }
        else if (direction === 'down') {
            if (activeSlideIndex === 0) {
                setIndex(slideCount - 1);
            } else {
                setIndex(activeSlideIndex - 1);
            }
        }
        timer.current = setInterval(() => changeSlide('up'), 4000)
    }
    return (
        <section ref={sliderContainer} className="slider-container">
            <div className="left-slide" style={{ transform: `translateY(${activeSlideIndex * sliderHeight}px)` }}>
                <div style={{ backgroundColor: '#d75f43' }}>
                    <h1>The Red Planet.</h1>
                    <p>Where Dreams Conquer the Universe, Humanity's Next Horizon</p>
                </div>
                <div style={{ backgroundColor: '#252e33' }}>
                    <h1>Reusability.</h1>
                    <p>From Landings to Launches: SpaceX Rockets, Unleashing a New Era in Space Innovation.</p>
                </div>
                <div style={{ backgroundColor: '#584685' }}>
                    <h1>Milky Way.</h1>
                    <p>Discover the Milky Way: Where Stars Paint the Sky.</p>
                </div>
                <div style={{ backgroundColor: '#003061' }}>
                    <h1>Explore.</h1>
                    <p>Making Humanity Multiplanetary.</p>
                </div>
            </div>
            <div className="right-slide" style={{ transform: `translateY(-${activeSlideIndex * sliderHeight}px)` }}>
                <div
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')" }}>
                </div>
                <div
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531160492875-2a09eb0cd73b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80')" }}>
                </div>
                <div
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1634175735590-b2ed7b02d143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1460&q=80')" }}>
                </div>
                <div
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1630694093867-4b947d812bf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1315&q=80')" }}>
                </div>
                {/* first div in left-slide goes with last div in right-slide  */}
            </div>
            <div className="action-buttons">
                <button className="down-button" onClick={() => changeSlide('down')}>
                    <i className="fas fa-arrow-down"></i>
                </button>
                <button className="up-button" onClick={() => changeSlide('up')}>
                    <i className="fas fa-arrow-up"></i>
                </button>
            </div>
        </section>
    )
}
export default Banner;