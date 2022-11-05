import React from "react";

import DignityIntro from "../components/dignityIntro.jsx";
import DignitySlider from "../components/dignitySlider.jsx";
import DignityCards from "../components/dignityCards.jsx";
import DignityMeet from "../components/dignityMeet.jsx";
import DignitySpeakers from "../components/dignitySpeakers.jsx";
import DignitySpeakersDesktop from "../components/dignitySpeakersDesktop.jsx";
import DignityInvite from "../components/dignityInvite.jsx";
import DignityPopup from "../components/dignitPopup.jsx";
import DignityCardsMob from "../components/dignityCardsMob.jsx";
import DignityTimer from "../components/digTimer.jsx";

export default function Dignity() {
    const [popupVisible, setPopupVisible] = React.useState(false);
    const [defaultPageWidth, setDefaultPageWidth] = React.useState(window.innerWidth);
    const bp = 1124;
    React.useEffect(() => {
        const windowResizer = () => setDefaultPageWidth(window.innerWidth);
        window.addEventListener("resize", windowResizer);
        return () => {
            window.removeEventListener("resize", windowResizer);
        };
    }, []);


    return(
        <section>
            <DignityTimer date={new Date('tue, 1 nov 2022 18:00:00')}  openPopup={setPopupVisible}/>
            <DignityIntro openPopup={setPopupVisible}/>
            <DignitySlider />
            {defaultPageWidth > bp
                ? <DignityCards openPopup={setPopupVisible}/>
                : <DignityCardsMob openPopup={setPopupVisible}/>
            }
            <DignityMeet openPopup={setPopupVisible}/>
            {defaultPageWidth > bp
                ? <DignitySpeakersDesktop openPopup={setPopupVisible}/>
                : <DignitySpeakers openPopup={setPopupVisible}/>
            }
            <DignityInvite />
            <DignityPopup isVisible={popupVisible} toggle={setPopupVisible}/>
        </section>
    )
}
