import React from "react";

import logoFooter from "../assets/Website Assets/Dignity/Invite/Слой 1 (1).svg";
import invitation from "../assets/Website Assets/Dignity/Invite/Group 614.svg";
import invitationText from "../assets/Website Assets/Dignity/Invite/Group 612.svg"

export default function DignityInvite() {

    return (
        <section className="invitation">
            <img className="invitation__svg" loading="lazy" src={invitation} alt="invitation"/>
            <div className="wrapper invitation-wrap">
                <div><img className="invitation__heading" loading="lazy" src={invitationText} alt="invitation"/></div>
                <p className="invitation__description">Вы получите инструменты для быстрой адаптации на новом месте за 3 сессии по 90 минут.</p>
                <a className="invitation__btn" href="https://t.me/freya_mind_bot">Записаться</a>
                <p className="invitation__caption">До начала встречи еще есть время, пора записаться</p>
            </div>
            <img className="invitation__logo" loading="lazy" src={logoFooter} alt="logo"/>
        </section>

    )
}
