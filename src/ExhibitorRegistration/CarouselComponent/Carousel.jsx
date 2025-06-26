import React, { useState } from "react";
import "./Carousel.css";

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="carousel-container">
            <div className="carousel-slide">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
            </div>
            <button className="carousel-button prev" onClick={prevSlide}>❮</button>
            <button className="carousel-button next" onClick={nextSlide}>❯</button>
            <div className="carousel-dots">
                {images.map((_, i) => (
                    <span
                        key={i}
                        className={`dot ${i === currentIndex ? "active" : ""}`}
                        onClick={() => setCurrentIndex(i)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
