import React from "react";
import {Swiper, SwiperSlide, } from "swiper/react";
import  SlideNextButton from "./slideNextButton.jsx";
import SlidePrevButton from "./slidePrevButton.jsx";

export default function DignitySlider() {
    return (
        <section className="slider-quotes">
            <div className="wrapper slider-wrap">
            <h2 className="slider__heading" >Что с нами происходит</h2>
                <div className="slider-swiper-wrap">
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
                                        &laquo;Я&nbsp;устал чувствовать себя виноватым в&nbsp;том, что я&nbsp;не&nbsp;поддерживаю&raquo;.
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
                                        &laquo;Я&nbsp;забыл, когда говорил о&nbsp;будущем, мне не&nbsp;с&nbsp;кем общаться&raquo;.
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
                                        &laquo;Я&nbsp;боюсь говорить, что я&nbsp;русская&raquo;.
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
                                        &laquo;Я&nbsp;устала плакать от&nbsp;новостей и&nbsp;обсуждать их&nbsp;каждый день&raquo;.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SlideNextButton />
                </Swiper>
                </div>
            </div>
        </section>
    )
}
