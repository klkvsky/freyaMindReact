import React from "react";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import  SlideNextButton from "./slideNextButton.jsx";
import SlidePrevButton from "./slidePrevButton.jsx";

export default function DignitySlider() {
    return (
        <section className="slider-quotes">
            <div className="wrapper slider-wrap">
            <h2 className="slider__heading" >Что с нами происходит</h2>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                >
                    <SlidePrevButton/>
                    <SwiperSlide>
                        <div className="slide-box slide-box1">
                            <div className="slide-quote">
                                <div className="slide__author">
                                    <div className="author__placeholder"></div>    
                                    <p className="author">
                                        Михаил, 35лет
                                    </p>
                                </div>
                                <div className="expression">
                                    <p className="expression__text">
                                    "Я устал чувствовать себя виноватым в том, что я не поддерживаю".
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-box slide-box2">
                            <div className="slide-quote">
                                <div className="slide__author">
                                    <div className="author__placeholder"></div>    
                                    <p className="author">
                                        Егор, 31 год
                                    </p>
                                </div>
                                <div className="expression">
                                    <p className="expression__text">
                                        “Я забыл, когда говорил о будущем, мне не с кем общаться”.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-box slide-box3">
                            <div className="slide-quote">
                                <div className="slide__author">
                                    <div className="author__placeholder"></div>    
                                    <p className="author">
                                        Вера, 22 года
                                    </p>
                                </div>
                                <div className="expression">
                                    <p className="expression__text">
                                        “Я боюсь говорить, что я русская”
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-box slide-box4">
                            <div className="slide-quote">
                                <div className="slide__author">
                                    <div className="author__placeholder"></div>    
                                    <p className="author">
                                        Анна, 26 лет
                                    </p>
                                </div>
                                <div className="expression">
                                    <p className="expression__text">
                                        “Я устала плакать от новостей и обсуждать их каждый день”.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SlideNextButton />
                </Swiper>
            </div>
        </section>
    )
}
