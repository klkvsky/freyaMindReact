import React from "react";

import DignityIntro from "../components/dignityIntro.jsx";
import DignitySlider from "../components/dignitySlider.jsx";
import DignityCards from "../components/dignityCards.jsx";
import DignityMeet from "../components/dignityMeet.jsx";
import DignitySpeakers from "../components/dignitySpeakers.jsx";
import DignityInvite from "../components/dignityInvite.jsx";
import DignityPopup from "../components/dignitPopup.jsx";

export default function Dignity() {
    const [popupVisible, setPopupVisible] = React.useState(false)
    return(
        <section>
            <div><p>Check</p></div>
            <DignityIntro openPopup={setPopupVisible}/>
            <DignitySlider />
            <DignityCards openPopup={setPopupVisible}/>
            <DignityMeet openPopup={setPopupVisible}/>
            <DignitySpeakers />
            <DignityInvite />
            <DignityPopup isVisible={popupVisible} toggle={setPopupVisible}/>
        </section>
    )
}
