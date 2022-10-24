import { Link } from "react-router-dom";
import FeedbackComponent from "./feedbackComponent";
//
import LogoWhite from "../assets/Website Assets /logo-white.svg";
import JumboImage from "../assets/Website Assets /Contact Us Page/Dr-Anna.svg";

export default function IndexJumbo() {
  return (
    <div className="flex flex-col lg:w-[1200px] lg:mx-auto lg:mt-[70px] px-[20px]">
      <nav className="flex flex-row items-center justify-start h-[100px] w-full gap-[18px] cursor-pointer z-50">
        <Link
          to="/"
          className="flex flex-row items-center justify-start h-[100px] w-full gap-[18px] cursor-pointer z-50"
        >
          <img
            loading="lazy"
            src={LogoWhite}
            className="h-[45px] w-[92px] lg:w-[106px] lg:h-[52px]"
          />
          <span className="text-[13px] lg:text-[25px] font-bold uppercase w-6/12 lg:w-[228px] leading-[1.35] text-white">
            Свяжитесь <br /> с нами
          </span>
        </Link>

        <ul className="hidden lg:flex flex-row items-center jusitfy-between uppercase text-[18px] font-light lg:w-[712px] leading-[28px] gap-[45px] ml-auto whitespace-nowrap text-white">
          <Link
            to="/aboutus"
            className="hover:scale-125 transition-all duration-500"
          >
            О нас
          </Link>
          <Link
            to="/pricing"
            className="hover:scale-125 transition-all duration-500"
          >
            Цена
          </Link>
          <a
            href="http://freyanow.com/anxiety"
            target="_blank"
            className="hover:scale-125 transition-all duration-500"
          >
            Помогаем
          </a>
          <a
            href="http://freyanow.com/affirmations"
            target="_blank"
            className="hover:scale-125 transition-all duration-500"
          >
            НАШИ НОВОСТИ
          </a>
          <Link
            to="/contactus"
            className="hover:scale-125 transition-all duration-500 font-bold"
          >
            Свяжитесь с нами
          </Link>
        </ul>
      </nav>
      <div className="flex flex-col items-end lg:items-center justify-start gap-[18px] lg:mt-[60px] lg:max-w-[1556px] lg:mx-auto">
        <img
          loading="lazy"
          src={JumboImage}
          className="w-screen h-[802px] object-cover absolute top-0 left-0 z-0 lg:right-0 lg:mx-auto lg:w-[1556px] lg:h-[835px] lg:object-[50%,10%] bg-neutral-100"
        />

        <div className="flex flex-col z-10 relative mt-[160px] lg:flex-row-reverse lg:gap-[160px] lg:mt-[35px] lg:ml-[130px]">
          <h1 className="text-[30px] font-semibold text-white text-center w-4/6 mx-auto lg:text-[52px] lg:leading-[65px] lg:text-left lg:w-5/12 lg:pt-[20px] lg:pl-[45px]">
            Мы здесь, чтобы помочь вам!
          </h1>
          <div className="-mt-[30px]">
            <FeedbackComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
