import { Link } from "react-router-dom";

export default function IndexJumbo() {
  return (
    <div className="flex flex-col lg:w-[1200px] lg:mx-auto lg:mt-[70px]">
      <div className="flex flex-row items-center justify-start h-[140px] w-full gap-[18px] cursor-pointer z-50 px-[20px]">
        <Link
          to="/"
          className="cursor-pointer z-50 font-bold text-[42px] text-white"
        >
          <img
            src="https://static.tildacdn.com/tild3932-3266-4636-a530-386632646232/logo_Recurso_3.svg"
            className="h-[45px] w-[92px] lg:w-[106px] lg:h-[52px]"
          />
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
          src="https://thumb.tildacdn.com/tild3735-3764-4632-a665-353537633231/-/format/webp/123.png"
          className="w-screen h-[710px] object-cover object-[75%_50%] absolute top-0 left-0"
        />

        <div className="relative z-10 px-[20px] mt-[230px]">
          <h1 className="text-[30.5px] font-bold">
            РПП — ЭТО <br />
            НЕ НАВСЕГДА!
          </h1>

          <p className="text-[16px] w-5/6">
            Да, это проблема. И ее можно решить вместе с FREYA
          </p>
        </div>

        <img
          src="https://static.tildacdn.com/tild6665-3435-4032-a235-373532663730/Frame.svg"
          className="w-screen h-auto relative z-20 scale-[400%] mr-[190px] mt-6"
        />
      </div>
    </div>
  );
}
