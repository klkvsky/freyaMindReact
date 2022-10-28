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
                                <div className="speaker__education">
                                    <p className="education">Образование</p>
                                    <p>Московский городской психолого-педагогический университет, факультет клинической психологии, нейро и патопсихологии</p>
                                </div>
                                <div className="speaker__quote"></div>
                            </div>
                        </div>
                    </li>
                </ul>
                <h1 className="speakers__heading"></h1>
            </div>
            <img className="speakers__svg" src="/src/assets/Website Assets/Dignity/Speakers/Group 613.svg"/>
        </section>
    )
}
