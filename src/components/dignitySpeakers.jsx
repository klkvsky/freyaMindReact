import React from "react";
import therapist1 from "../assets/Website Assets/Dignity/Speakers/therapist1.png";
import therapist2 from "../assets/Website Assets/Dignity/Speakers/therapist2.png";
import therapist3 from "../assets/Website Assets/Dignity/Speakers/therapist3.png";
import backdrop from "../assets/Website Assets/Dignity/Speakers/backdrop.png";
import backdrop2 from "../assets/Website Assets/Dignity/Speakers/backdrop2.png";
import backdrop3 from "../assets/Website Assets/Dignity/Speakers/backdrop3.png";

import sunSvg from "../assets/Website Assets/Dignity/Speakers/Group 613.svg"



export default function DignitySpeakers() {

    const [isHovVisible, setIsHovVisible] = React.useState(true);

    const toggleHover = () => {
        if (isHovVisible === true) {
            setIsHovVisible(false);
        } else if (isHovVisible === false) {
            setIsHovVisible(true);
        }
    }

    const [isHovVisible2, setIsHovVisible2] = React.useState(true);

    const toggleHover2 = () => {
        if (isHovVisible2 === true) {
            setIsHovVisible2(false);
        } else if (isHovVisible2 === false) {
            setIsHovVisible2(true);
        }
    }

    const [isHovVisible3, setIsHovVisible3] = React.useState(true);

    const toggleHover3 = () => {
        if (isHovVisible3 === true) {
            setIsHovVisible3(false);
        } else if (isHovVisible3 === false) {
            setIsHovVisible3(true);
        }
    }

    return (
        <section className="speakers">
            <div className="wrapper">
                <ul className="speakers-list">
                    <li className="speaker">
                        <div className="speaker__container">
                            <img loading="lazy" src={therapist1} alt="therapist"/>
                            <div className={isHovVisible ? "overlay__visible" : "speaker__overlay"} >
                                <img className="speaker__education" loading="lazy" src={backdrop2} alt="info" />
                            </div>
                        </div>
                        <div className="speaker__name">Екатерина Быстрова</div>
                        {window.innerWidth > 1123 ? "" :
                            <button className="speaker__btn" onClick={
                            ()=>{toggleHover()}}
                        ><svg width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 15L29 8L22 0.999999" stroke="black"/>
                        <path d="M0 8H29.5" stroke="black"/>
                        </svg></button>}


                    </li>
                    <li className="speaker">
                        <div className="speaker__container">
                            <img loading="lazy" src={therapist2} alt="therapist"/>
                            <div className={isHovVisible2 ? "overlay__visible" : "speaker__overlay"}>
                                <img className="speaker__education"loading="lazy" src={backdrop} alt="info" />
                            </div>
                        </div>
                        <div className="speaker__name">Мария Домбровская</div>
                        {window.innerWidth > 1123 ? "" :
                            <button className="speaker__btn" onClick={
                            ()=>{toggleHover2()}}
                        ><svg width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 15L29 8L22 0.999999" stroke="black"/>
                        <path d="M0 8H29.5" stroke="black"/>
                        </svg></button>}
                    </li>
                    <li className="speaker">
                        <div className="speaker__container">
                            <img loading="lazy" src={therapist3} alt="therapist"/>
                            <div className={isHovVisible3 ? "overlay__visible" : "speaker__overlay"}>
                                <img className="speaker__education"loading="lazy" src={backdrop3} alt="info" />
                            </div>
                        </div>
                        <div className="speaker__name">Наталья Гладских</div>
                        {window.innerWidth > 1123 ? "" :
                            <button className="speaker__btn" onClick={
                            ()=>{toggleHover3()}}
                        ><svg width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 15L29 8L22 0.999999" stroke="black"/>
                        <path d="M0 8H29.5" stroke="black"/>
                        </svg></button>}
                    </li>
                    <h1 className="speakers__heading">Спикеры</h1>
                </ul>
            </div>
            <img className="speakers__svg1" loading="lazy" src={sunSvg}/>
            <img className="speakers__svg" loading="lazy" src={sunSvg}/>
        </section>
    )
}
