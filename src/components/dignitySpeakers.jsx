import React from "react";

export default function DignitySpeakers() {

    return (
        <section className="speakers">
            <div className="wrapper">
                <ul className="speakers-list">
                    <li className="speaker">
                        <div className="speaker__container">
                            <img src="/src/assets/Website Assets/Dignity/Speakers/Asset 1@144x 1.png" alt="therapist"/>
                            <div className="speaker__overlay">
                                <img className="speaker__education" src="/src/assets/Website Assets/Dignity/Speakers/Asset 6@144x 1 (1).png" alt="info"  />
                            </div>
                        </div>
                        <div className="speaker__name">Екатерина Быстрова</div>
                    </li>
                    <li className="speaker">
                        <div className="speaker__container">
                            <img src="/src/assets/Website Assets/Dignity/Speakers/Asset 3@144x 1.png" alt="therapist"/>
                            <div className="speaker__overlay">
                                <img className="speaker__education" src="/src/assets/Website Assets/Dignity/Speakers/Asset 6@144x 1.png" alt="info" />
                            </div>
                        </div>
                        <div className="speaker__name">Мария Домбровская</div>
                    </li>
                    <li className="speaker">
                        <div className="speaker__container">
                            <img src="/src/assets/Website Assets/Dignity/Speakers/Asset 2@144x 1.png" alt="therapist"/>
                            <div className="speaker__overlay">
                                <img className="speaker__education" src="/src/assets/Website Assets/Dignity/Speakers/Asset 6@144x 1 (2).png" alt="info" />
                            </div>
                        </div>
                        <div className="speaker__name">Наталья Гладских</div>
                    </li>
                    <h1 className="speakers__heading">Спикеры</h1>
                </ul>
            </div>
            <img className="speakers__svg" src="/src/assets/Website Assets/Dignity/Speakers/Group 613.svg"/>
        </section>
    )
}
