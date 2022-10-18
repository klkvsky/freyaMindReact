import { Link } from "react-router-dom";
import Feedback from "../components/feedbackComponent";
export default function IndexJumbo() {
  return (
    <div className="flex flex-col lg:w-[1200px] lg:mx-auto lg:mt-[70px]">
      <nav className="flex flex-row items-center justify-start h-[140px] w-full gap-[18px] cursor-pointer z-50 px-[20px]">
        <Link
          to="/"
          className="cursor-pointer z-50 font-bold text-[42px] text-white lg:flex flex-row items-center justify-start gap-[50px] lg:text-[60px] lg:-ml-[19px] lg:-mt-[25px] lg:uppercase lg:gap-[30px]"
        >
          <img
            src="https://static.tildacdn.com/tild3533-3535-4537-a338-356262353638/Freya_Logo.svg"
            className="hidden lg:block lg:w-[104px] lg:h-[51px]"
          />
          Цена
        </Link>

        <ul className="hidden lg:flex flex-row items-center jusitfy-between uppercase text-[18px] font-light lg:w-[712px] leading-[28px] gap-[45px] ml-auto whitespace-nowrap lg:text-white pb-[50px] -mr-[30px]">
          <Link to="/aboutus" >
            О нас
          </Link>
          <Link to="/therapy" className="font-bold">Цена</Link>
          <Link to="/eatingdisorder">РПП</Link>
          <Link to="/livestream">Онлайн События</Link>
          <Link to="/contactus">Свяжитесь с нами</Link>
        </ul>
      </nav>
      <div className="flex flex-col">
        <img
          src="https://thumb.tildacdn.com/tild3433-3834-4161-b566-306162353937/-/format/webp/d9275728-6251-4827-b.png"
          className="w-screen h-[54.8vh] object-cover absolute top-0 left-0 lg:w-[calc(100vw-72px)] lg:left-[32px] lg:h-[889px]"
        />
      </div>
    </div>
  );
}
