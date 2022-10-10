import { Link } from "react-router-dom";
import FeedbackComponent from "./feedbackComponent";

export default function IndexJumbo() {
  return (
    <div className="flex flex-col lg:w-[1200px] lg:mx-auto lg:mt-[70px]">
      <div className="flex flex-row items-center justify-start h-[140px] w-full gap-[18px] cursor-pointer z-50 px-[40px]">
        <Link
          to="/"
          className="flex flex-row items-center justify-start h-[100px] gap-[18px] cursor-pointer z-50 ml-[30px] w-[300px]"
        >
          <img
            src="https://static.tildacdn.com/tild3538-3364-4365-a534-616439623633/logoRecurso_1.svg"
            className="h-[45px] w-[92px] lg:w-[106px] lg:h-[52px] "
          />
          <span className="text-[30px] leading-8 text-white font-bold uppercase w-6/12">
            Свяжись с нами
          </span>
        </Link>

        <ul className="hidden lg:flex flex-row items-center jusitfy-between uppercase text-[18px] font-light lg:w-[712px] leading-[28px] gap-[45px] ml-auto whitespace-nowrap">
          <Link to="/aboutus">О нас</Link>
          <Link to="/therapy">Цена</Link>
          <Link to="/eatingdisorder">РПП</Link>
          <Link to="/livestream">Онлайн События</Link>
          <Link to="/contactus">Свяжитесь с нами</Link>
        </ul>
      </div>
      <div className="flex flex-col items-end lg:items-center justify-start gap-[18px] lg:mt-[60px]">
        <img
          src="https://static.tildacdn.com/tild6166-6663-4334-b636-363231386633/Dr-Anna.svg"
          className="w-screen h-[802px] object-cover absolute top-0 left-0 z-0"
        />

        <div className="flex flex-col z-10 relative mt-[160px]">
          <h1 className="text-[30px] font-semibold text-white text-center w-4/6 mx-auto">
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
