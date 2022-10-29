import React from "react";

import therapist1 from "../assets/Website Assets/Dignity/Speakers/therapist1.png";
import therapist2 from "../assets/Website Assets/Dignity/Speakers/therapist2.png";
import therapist3 from "../assets/Website Assets/Dignity/Speakers/therapist3.png";
import backdrop from "../assets/Website Assets/Dignity/Speakers/backdrop.png";
import backdrop2 from "../assets/Website Assets/Dignity/Speakers/backdrop2.png";
import backdrop3 from "../assets/Website Assets/Dignity/Speakers/backdrop3.png";

import sunSvg from "../assets/Website Assets/Dignity/Speakers/Group 613.svg"


export default function DignitySpeakers() {

    const [isHovVisible, setIsHovVisible] = React.useState(false);

    const toggleHover = () => {
        if (isHovVisible === true) {
            setIsHovVisible(false);
        } else if (isHovVisible === false) {
            setIsHovVisible(true);
        }
        console.log(isHovVisible)
    }

    return (
        <section className="speakers">
            <div className="wrapper">
                <ul className="speakers-list">
                    <li className="speaker">
                        <div className="speaker__container">
                            <img loading="lazy" src={therapist1} alt="therapist"/>
                            <div className="speaker__overlay" >
                                <img className="speaker__education" loading="lazy" src={backdrop2} alt="info" />
                            </div>
                        </div>
                        <div className="speaker__name">Екатерина Быстрова</div>
                        {window.innerWidth > 1123 ? "" :
                            <button onClick={
                            ()=>{toggleHover()}}
                        >arrooooooooooooooooooooooooooooooow</button>}


                    </li>
                    <li className="speaker">
                        <div className="speaker__container">
                            <img loading="lazy" src={therapist2} alt="therapist"/>
                            <div className="speaker__overlay">
                                <img className="speaker__education"loading="lazy" src={backdrop} alt="info" />
                            </div>
                        </div>
                        <div className="speaker__name">Мария Домбровская</div>
                    </li>
                    <li className="speaker">
                        <div className="speaker__container">
                            <img loading="lazy" src={therapist3} alt="therapist"/>
                            <div className="speaker__overlay">
                                <img className="speaker__education"loading="lazy" src={backdrop3} alt="info" />
                            </div>
                        </div>
                        <div className="speaker__name">Наталья Гладских</div>
                    </li>
                    <h1 className="speakers__heading">Спикеры</h1>
                </ul>
            </div>
            <img className="speakers__svg1" loading="lazy" src={sunSvg}/>
            <img className="speakers__svg" loading="lazy" src={sunSvg}/>
        </section>
    )
}
