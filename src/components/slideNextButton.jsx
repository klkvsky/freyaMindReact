import  React  from 'react';
import { useSwiper } from 'swiper/react';

export default function SlideNextButton() {
  const swiper = useSwiper();
  return (
      <button className='slider__btn__next' onClick={() => swiper.slideNext()}>
      <svg width="20" height="38" viewBox="0 0 20 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 37L19 19L1 0.999998" stroke="black"/>
      </svg>
      </button>
  );
}
