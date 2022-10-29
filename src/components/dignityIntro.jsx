import React from "react";

import logoHeader from "../assets/Website Assets/Dignity/Intro/logo.png"

export default function DignityIntro(props) {

    const openPopup = () => {
        props.openPopup(true)
    }

    return (
        <section className="intro">
            <div className="wrapper intro-wrap">
                <div className="intro__logo-container">
                    <a href="" className="intro__logo">
                        <img loading="eager"
                             src={logoHeader} alt="logo" />
                    </a>
                </div>
                <div>
                    <h1 className="intro__heading">Дышать свободно, думать ясно</h1>
                    <p className="intro__paragraph">Livestreams с психологами для экспатов из России</p>
                    <button className="intro__btn"
                        onClick={ () => {
                            openPopup();
                        }}
                    >Присоединиться!</button>
                </div>
            </div>
        </section>
    )
}
