import { Link } from "react-router-dom";

export default function IndexJumbo() {
  return (
    <div className="flex flex-col px-[20px] lg:w-[1200px] lg:mx-auto lg:mt-[70px]">
      <div
        className="flex flex-row items-center justify-start h-[100px] w-full gap-[18px] cursor-pointer z-50"
      >
        <Link to="/" className="flex flex-row items-center justify-start h-[100px] w-full gap-[18px] cursor-pointer z-50">
          <img
            src="https://static.tildacdn.com/tild3932-3266-4636-a530-386632646232/logo_Recurso_3.svg"
            className="h-[45px] w-[92px] lg:w-[106px] lg:h-[52px]"
          />
          <span className="text-[13px] lg:text-[16px] font-bold uppercase w-6/12 lg:w-[228px]">
            Онлайн психотерапия для женщин
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
      <div className="flex flex-row items-end lg:items-center justify-start gap-[18px] lg:mt-[60px]">
        <img
          src="https://static.tildacdn.com/tild6238-6130-4433-a239-396534626433/logo__2Recurso_4.svg"
          className="h-[70px] w-[70px] lg:w-[95px] lg:h-[94px]"
        />
        <span className="text-[13px] font-light uppercase w-6/12 lg:text-[26px] lg:normal-case lg:w-[457px] lg:leading-8">
          Европейский опыт психотерапии у тебя в кармане
        </span>
      </div>
      <div className="mt-[28px] lg:mt-[62px] lg:flex lg:flex-row lg:items-start">
        <a className="text-[43px] font-light leading-[42px] lg:text-[57px] lg:leading-[57px]">
          Время<strong> </strong>решать
          <br />
          проблемы — СЕЙЧАС.
          <br />И мы знаем, как
          <br />
          вам помочь!
        </a>
        <div className="bg-neutral-100 h-[442px] w-[309px] mt-[20px] lg:-mt-[213px]" />
      </div>
      <img
        src="https://static.tildacdn.com/tild3263-3532-4036-b138-323763383136/Arrow_down.svg"
        className="w-[50px] h-[25px] mt-[35px] mx-auto lg:mt-[125px] lg:w-[80px] lg:h-[41px] lg:object-contain"
      />
    </div>
  );
}
