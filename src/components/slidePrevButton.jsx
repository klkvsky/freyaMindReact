import  React  from 'react';
import { useSwiper } from 'swiper/react';

export default function SlidePrevButton() {
  const swiper = useSwiper();
  console.log(swiper)
  return (
      <button className='slider__btn__prev' onClick={() => swiper.slidePrev()}><svg width="20" height="38" viewBox="0 0 20 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 1L1 19L19 37" stroke="black"/>
      </svg></button>
  );
}
