import React from "react";
import { useState, useEffect } from "react";

export default function DignityTimer({date, ...props}) {
    const [finishTime] = useState(date.getTime());
    const [[diffDays, diffH, diffM, diffS], setDiff] = useState([0, 0, 0, 0]);
    const [tick, setTick] = useState(false);
    const [isTimeout, setIsTimeout] = useState(false);
    const [timerId, setTimerID] = useState(0);
  
    useEffect(() => {
      const diff = (finishTime - new Date()) / 1000;
      if (diff < 0) {
        setIsTimeout(true);
        return;
      }
      setDiff([
        Math.floor(diff / 86400), // дни
        Math.floor((diff / 3600) % 24),
        Math.floor((diff / 60) % 60),
        Math.floor(diff % 60)
      ]);
    }, [tick, finishTime]);
  
    useEffect(() => {
      if (isTimeout) clearInterval(timerId);
    }, [isTimeout, timerId]);
  
    useEffect(() => {
      const timerID = setInterval(() => {
        setTick(!tick);
      }, 1000);
      setTimerID(timerID);
      return () => clearInterval(timerID);
    }, [tick]);

    const openPopup = () => {
      props.openPopup(true)
    }
  
    return (
      <div className="timer-line">
        <div className="timer-wrap">
            <p className="timer__description">До начала встречи еще есть время, пора записаться</p>
            <div className="timer__time">
                    {diffDays>0
                        ? <div className="timer__days">{diffDays} :<p className="timer__days__text">дня</p></div>
                        : <div></div>
                    }
                    <div className="timer__hours">
                        {diffH.toString().padStart(2, "0")} :
                        <p className="timer__hours__text">часов</p>
                    </div>
                    <div className="timer__hours">
                        {diffM.toString().padStart(2, "0")} :
                        <p className="timer__hours__text">минут</p>
                    </div>
                    <div className="timer__hours">
                        {diffS.toString().padStart(2, "0")} 
                        <p className="timer__hours__text">секунд</p>
                    </div>
            </div>
            <button className="timer__btn"
              onClick={ ()=>{
                openPopup();
              }}>
                <span className="timer__btn__text">Присоединиться!</span>
                <svg className="timer__btn__svg" width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.399412 15L7.39941 8L0.399414 0.999999" stroke="black"/>
                </svg>
              </button>
        </div>
      </div>
    );
 };
