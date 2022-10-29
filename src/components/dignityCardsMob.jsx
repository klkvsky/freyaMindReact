import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import OpenCardButton from "./openCardButton.jsx";


export default function DignityCardsMob(props) {

    const openPopup = () => {
        props.openPopup(true);
    }

    return (
        <section style={{height:"1000px"}}>


            <Swiper style={{width: "300px"}}
                slidesPerView={1}
                loop={true}
            >
                <OpenCardButton />
                <SwiperSlide style={{width:"300px"}} >
                    <div style={{backgroundColor:"red"}}>
                        <h3 className="card__announce-front">Как экспату справиться с чувством вины</h3>

                    </div>
                </SwiperSlide>
                <SwiperSlide style={{width:"300px"}}>
                    <div style={{backgroundColor:"grey"}}>
                        <h3 className="card__announce-back">Как экспату справиться с чувством вины</h3>
                        <div className="card__description">Вы чувствуете себя предателем, потому что пришлось оставить родителей, друзей и любимый город? Знайте, что вы берете на себя слишком много ответственности. Вы не причастны к тем обстоятельствам, которые вынудили вас покинуть страну.Терапия поможет прожить чувство вины, осознать ее разрушительное влияние.<p className="card__speaker">Спикер: Наталья Гладских</p></div>
                        <button
                            onClick={ () => {
                                openPopup();
                            }}
                        >Присоединиться</button>
                    </div>
                </SwiperSlide>
            </Swiper>


        </section>
    )
}
