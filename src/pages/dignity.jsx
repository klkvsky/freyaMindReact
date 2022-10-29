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
    const [popupVisible, setPopupVisible] = React.useState(false)
    return(
        <section>
            <DignityTimer date={new Date('tue, 1 nov 2022 18:00:00')}  openPopup={setPopupVisible}/>
            <DignityIntro openPopup={setPopupVisible}/>
            <DignitySlider />
            {window.innerWidth > 1124
                ? <DignityCards openPopup={setPopupVisible}/>
                : <DignityCardsMob openPopup={setPopupVisible}/>
            }
            <DignityMeet openPopup={setPopupVisible}/>
            {window.innerWidth > 1124
                ? <DignitySpeakersDesktop openPopup={setPopupVisible}/>
                : <DignitySpeakers openPopup={setPopupVisible}/>
            }
            <DignityInvite />
            <DignityPopup isVisible={popupVisible} toggle={setPopupVisible}/>
        </section>
    )
}
