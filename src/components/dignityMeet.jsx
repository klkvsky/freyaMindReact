import React from "react";
import effectStar from "../assets/Website Assets/Dignity/Meet/Vector (11).svg"

export default function DignityMeet(props) {

    const openPopup = () => {
        props.openPopup(true)
    }

    return (
        <section className="meet">
            <div className="wrapper meet-wrap">
                <div className="meet__promo">
                    <h2 className="meet__promo__heading">Что вы получите от встреч</h2>
                    <div>
                        <button className="meet__promo__btn"
                            onClick={ ()=>{
                                openPopup();
                            }}
                        >ПРИСОЕДИНИТЬСЯ К ВСТРЕЧЕ</button>
                        <p className="meet__promo__caption">Мы напомним вам о ней за 1 час до эфира</p>
                    </div>
                </div>
                <ul className="meet__effects">
                    <li className="meet__effect">
                        <img className="meet__effect__star" loading="lazy" src={effectStar}/>
                        <p className="meet__effect__text1">поймете, куда двигаться, чтобы справиться с проблемой</p>
                    </li>
                    <li className="meet__effect">
                        <p className="meet__effect__text2">найдете своего специалиста и разберетесь с проблемой </p>
                    </li>
                    <li className="meet__effect">
                        <p className="meet__effect__text3">решите свою проблему благодаря инсайтам от встречи</p>
                    </li>
                </ul>
            </div>
        </section>

    )
}
