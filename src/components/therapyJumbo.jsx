import { Link } from "react-router-dom";
import Feedback from "../components/feedbackComponent";
//
import LogoWhite from "../assets/Website Assets/logo-white.svg";
import JumboImage from "../assets/Website Assets/Price Page/ARK_4119.jpg";
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
          {/* <span className="text-[45px] lg:text-[60px] font-bold uppercase w-6/12 lg:w-[228px] leading-[1.35] text-white">
            Цена
          </span> */}
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
            className="hover:scale-125 transition-all duration-500 font-bold"
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
            className="hover:scale-125 transition-all duration-500"
          >
            Свяжитесь с нами
          </Link>
        </ul>
      </nav>
      <div className="flex flex-col lg:max-w-[1556px] lg:mx-auto">
        <img
          loading="lazy"
          src={JumboImage}
          className="w-screen h-[54.8vh] object-cover absolute object-[75%,50%] lg:object-center top-0 left-0 lg:right-0 lg:max-w-[1648px] lg:mx-auto lg:h-[889px]"
        />
      </div>
    </div>
  );
}
