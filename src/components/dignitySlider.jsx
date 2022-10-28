import React from "react";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import  SlideNextButton from "./slideNextButton.jsx";
import SlidePrevButton from "./slidePrevButton.jsx";

export default function DignitySlider() {
    return (
        <section>
            <h2>Что с нами происходит</h2>

            <Swiper
                slidesPerView={1}
                loop={true}
            >
                <SlidePrevButton/>
                <SwiperSlide>
                    <div>
                        <div>
                            <div>
                                <img/>
                                <p>
                                    Михаил, 35лет
                                </p>
                            </div>
                            <div>
                                <p>
                                   "Я устал чувствовать себя виноватым в том, что я не поддерживаю".
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div>
                            <div>
                                <img/>
                                <p>
                                    Егор, 31год
                                </p>
                            </div>
                            <div>
                                <p>
                                    "Я забыл, когда говорил о будущем, мне не с кем общаться".
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div>
                            <div>
                                <img/>
                                <p>
                                    Вера, 22года
                                </p>
                            </div>
                            <div>
                                <p>
                                    "Я боюсь говорить, что я русская".
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div>
                            <div>
                                <img/>
                                <p>
                                    Анна, 26лет
                                </p>
                            </div>
                            <div>
                                <p>
                                    "Я устала плакать от новостей и обсуждать их каждый день".
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SlideNextButton />
            </Swiper>

        </section>
    )
}
