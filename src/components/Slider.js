import React, { useState } from 'react';

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const goToPrevSlide = () => {
    const newSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  const goToNextSlide = () => {
    const newSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide">
        <ol className="carousel-indicators">
          <li className={currentSlide === 0 ? 'active' : ''} onClick={() => setCurrentSlide(0)}></li>
          <li className={currentSlide === 1 ? 'active' : ''} onClick={() => setCurrentSlide(1)}></li>
          <li className={currentSlide === 2 ? 'active' : ''} onClick={() => setCurrentSlide(2)}></li>
        </ol>
        <div className="carousel-inner">
          <div className={`carousel-item ${currentSlide === 0 ? 'active' : ''} ${currentSlide === 0 ? 'fade-in' : 'fade-out'}`}>
            <div className='WebSlide'>
              <div className='WebSlideItemLeft'>
                <div>
                  <h1 className='WebSlideHead'>Web Development</h1>
                </div>
                <div>
                  <h5 className='WebSlideSubHead'>Our Expertise in Web Development</h5>
                </div>
                <div>
                  <p className='WebSliderPara'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 15s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                  </p>
                </div>
              </div>
              <div>
                <img className='ImWebSlide' src='webSlide.png' alt='Web Development' />
              </div>
            </div>
          </div>
          <div className={`carousel-item ${currentSlide === 1 ? 'active' : ''} ${currentSlide === 1 ? 'fade-in' : 'fade-out'}`}>
            <div className='WebSlide'>
              <div className='WebSlideItemLeft'>
                <div>
                  <h1 className='MobileSlideHead'>Mobile Development</h1>
                </div>
                <div>
                  <h5 className='WebSlideSubHead'>Our Expertise in Mobile Development</h5>
                </div>
                <div>
                  <p className='WebSliderPara'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 15s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                  </p>
                </div>
              </div>
              <div>
                <img className='ImWebSlide' src='' alt='Mobile Development' />
              </div>
            </div>
          </div>
          <div className={`carousel-item ${currentSlide === 2 ? 'active' : ''} ${currentSlide === 2 ? 'fade-in' : 'fade-out'}`}>
            <div className='WebSlide'>
              <div className='WebSlideItemLeft'>
                <div>
                  <h1 className='DataSlideHead'>Data Science</h1>
                </div>
                <div>
                  <h5 className='WebSlideSubHead'>Our Expertise in Data Science</h5>
                </div>
                <div>
                  <p className='WebSliderPara'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 15s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                  </p>
                </div>
              </div>
              <div>
                <img className='ImWebSlide' src='' alt='Data Science' />
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev y-3" href="#carouselExampleIndicators" role="button" onClick={goToPrevSlide}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next y-3s" href="#carouselExampleIndicators" role="button" onClick={goToNextSlide}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
