import React from "react";

import DignityForm from "../components/digForm.jsx";

export default function DignityPopup(props) {

  const [messageVisible, setMessageVisible] = React.useState(false);

  const closePopup = () => {
    props.toggle(false);
    setMessageVisible(false);
  }

  return (
    <section className={props.isVisible ? "dignity-popup" : "dignity-popup dignity-popup-hidden"}>
      <div className="popup__box">
        <button className="popup__close__btn" onClick={
          ()=> {
            closePopup();
          }
        }
        >
          <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 1L29.5 29" stroke="black" strokeWidth="2"/>
            <path d="M29.5 1L1.5 29" stroke="black" strokeWidth="2"/>
          </svg>
        </button>
        <div className="popup-container">
          { messageVisible
              ? <div>Вы успешно зарегистрировались, ждем вас!</div>
              :  <div>
                <h2 className="popup__heading">Я хочу участвовать во встрече</h2>
                <DignityForm toggleMsg={setMessageVisible}/>
              </div> }
        </div>
      </div>
    </section>
  );
}
