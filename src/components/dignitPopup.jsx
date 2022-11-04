import React from "react";

import DignityForm from "../components/digForm.jsx";
import DignityForm2 from "./dignityForm2.jsx";

export default function DignityPopup(props) {
  const [messageVisible, setMessageVisible] = React.useState(false);

  const closePopup = () => {
    props.toggle(false);
    setMessageVisible(false);
  };

  return (
    <section
      className={
        props.isVisible ? "dignity-popup" : "dignity-popup dignity-popup-hidden"
      }
    >
      <div className="popup__box ">
        <button
          className="popup__close__btn"
          onClick={() => {
            closePopup();
          }}
        >
          <svg
            width="31"
            height="30"
            viewBox="0 0 31 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1.5 1L29.5 29" stroke="black" strokeWidth="2" />
            <path d="M29.5 1L1.5 29" stroke="black" strokeWidth="2" />
          </svg>
        </button>
        <div className="popup-container">
          {messageVisible ? (
            <div style={{ paddingTop: "120px" }}>
              <p className="popup__heading" style={{ position: "relative" }}>
                <svg
                  className="star-mob1"
                  width="50"
                  height="46"
                  viewBox="0 0 50 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.1519 19.5866L28.8278 19.5256L28.7563 19.2037L25.0001 2.30439L21.2437 19.2039L21.1722 19.5259L20.8481 19.5868L2.70442 23.0001L20.8481 26.4134L21.1722 26.4744L21.2437 26.7963L25 43.6956L28.7563 26.7962L28.8278 26.4743L29.1519 26.4133L47.2956 23.0001L29.1519 19.5866Z"
                    fill="#FCD68D"
                    stroke="black"
                  />
                </svg>
                <svg
                  className="star-mob2"
                  width="32"
                  height="28"
                  viewBox="0 0 32 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.6283 12.1154L18.3044 12.0574L18.2295 11.737L16 2.19711L13.7705 11.7371L13.6956 12.0575L13.3717 12.1155L2.83886 14.0001L13.3717 15.8846L13.6956 15.9426L13.7705 16.263L16 25.8029L18.2295 16.263L18.3044 15.9425L18.6283 15.8846L29.1612 14L18.6283 12.1154Z"
                    fill="#FCD68D"
                    stroke="black"
                  />
                </svg>
                Вы успешно зарегистрировались, ждем вас!
              </p>
            </div>
          ) : (
            <div>
              <h2 className="popup__heading">Я хочу участвовать во встрече</h2>
              <DignityForm2 toggleMsg={setMessageVisible} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
