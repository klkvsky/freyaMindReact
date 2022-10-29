import React from "react";
import SlidePrevButton from "./slidePrevButton.jsx";
import {Swiper, SwiperSlide} from "swiper/react";
import SlideNextButton from "./slideNextButton.jsx";

export default function DignityCardsMob(props) {

    const openPopup = () => {
        props.openPopup();
    }

    return (
        <section style={{height:"1000px"}}>
            <div className="cards-mobile-wrap">
                
            <Swiper style={{width: "300px"}}
                slidesPerView={1}
                loop={true}
            >
                <SwiperSlide style={{width:"300px"}} >
                    <div className="front front1">
                        <h3 className="card__announce-front">Как экспату справиться с чувством вины</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{width:"300px"}}>
                    <div style={{backgroundColor:"red"}} className="back">
                        <h3 className="card__announce-back">Как экспату справиться с чувством вины</h3>
                        <div className="card__description">Вы чувствуете себя предателем, потому что пришлось оставить родителей, друзей и любимый город? Знайте, что вы берете на себя слишком много ответственности. Вы не причастны к тем обстоятельствам, которые вынудили вас покинуть страну.Терапия поможет прожить чувство вины, осознать ее разрушительное влияние.<p className="card__speaker">Спикер: Наталья Гладских</p></div>
                        <button className="card__btn"
                                onClick={()=> {
                                    openPopup();
                                }}
                        >Присоединиться!</button>
                    </div>
                </SwiperSlide>
            </Swiper>

            <Swiper
                slidesPerView={1}
                loop={true}
            >
                <SwiperSlide>
                    <div className="front front2">
                        <h3 className="card__announce-front">Как не потерять самоуважение в новой стране</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="back">
                        <h3 className="card__announce-back">Как не потерять самоуважение в новой стране</h3>
                        <div className="card__description">Страшно говорить, откуда вы приехали, общаться на родном языке. Поиск работы идет медленно, друзей рядом нет или их мало. Кажется, что вы всегда будете в новой стране нежеланным гостем.И это пройдет. Период адаптации закончится, а терапия поможет пройти его быстрее.<p className="card__speaker">Спикер: Екатерина Быстрова</p>
                        </div>
                        <button className="card__btn"
                                onClick={()=> {
                                    openPopup();
                                }}
                        >Присоединиться!</button>
                    </div>
                </SwiperSlide>
            </Swiper>

            <Swiper
                slidesPerView={1}
                loop={true}
            >
                <SwiperSlide>
                    <div className="front front3">

                        <h3 className="card__announce-front">Почему нужно избегать токсичного окружения</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="back">
                        <h3 className="card__announce-back">Почему нужно избегать токсичного окружения</h3>
                        <div className="card__description">Как понять, что ваше окружение плохо на вас влияет? Если после общения резко портится настроение, падает мотивация, становится плохо физически, например, болит голова — бегите от таких людей.Терапия поможет быстро распознавать токсичность, выстраивать личные границы и экологично выходить из токсичного общения.<p className="card__speaker">Спикер: Мария Домбровская</p></div>
                        <button className="card__btn"
                                onClick={()=> {
                                    openPopup();
                                }}
                        >Присоединиться!</button>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>

        </section>
    )
}
