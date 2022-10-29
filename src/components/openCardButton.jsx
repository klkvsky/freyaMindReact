import  React  from 'react';
import { useSwiper } from 'swiper/react';

export default function OpenCardButton() {
  const swiper = useSwiper();
  console.log(swiper)
  return (
      <button className='card__nextcard__btn' onClick={() => swiper.slideNext()}>
        <svg width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 15L29 8L22 0.999999" stroke="black"/>
          <path d="M0 8H29.5" stroke="black"/>
        </svg>
      </button>
  );
}
