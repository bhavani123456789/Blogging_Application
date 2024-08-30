import React from 'react'

function Swiper() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
            <div className="col-12">
                <div className="swiper-container hero-slider">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="hero-content flex justify-content-center align-items-center flex-column">
                                <img src="images/slider.jpg" alt=""/>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="hero-content flex justify-content-center align-items-center flex-column">
                                <img src="images/slider.jpg" alt=""/>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="hero-content flex justify-content-center align-items-center flex-column">
                                <img src="images/slider.jpg" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="swiper-pagination"></div>

                    
                    <div className="swiper-button-next flex justify-content-center align-items-center">
                        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 44"><path d="M27,22L27,22L5,44l-2.1-2.1L22.8,22L2.9,2.1L5,0L27,22L27,22z"></path></svg></span>
                    </div>
                    <div className="swiper-button-prev flex justify-content-center align-items-center">
                        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 44"><path d="M0,22L22,0l2.1,2.1L4.2,22l19.9,19.9L22,44L0,22L0,22L0,22z"></path></svg></span>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="offset-lg-9 col-12 col-lg-3">
                    <a href="#">
                        <div className="yt-subscribe">
                            <img src="images/yt-subscribe.png" alt="Youtube Subscribe"/>
                            <h3>Subscribe</h3>
                            <p>To my Youtube Channel</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Swiper
