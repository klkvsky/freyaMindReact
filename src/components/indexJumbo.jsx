import { Link } from "react-router-dom";

export default function IndexJumbo() {
  return (
    <div className="flex flex-col px-[20px] lg:w-[1200px] lg:mx-auto lg:mt-[70px]">
      <div className="flex flex-row items-center justify-start h-[100px] w-full gap-[18px] cursor-pointer z-50">
        <Link
          to="/"
          className="flex flex-row items-center justify-start h-[100px] w-full gap-[18px] cursor-pointer z-50"
        >
          <img
            loading="lazy"
            src="https://static.tildacdn.com/tild3932-3266-4636-a530-386632646232/logo_Recurso_3.svg"
            className="h-[45px] w-[92px] lg:w-[106px] lg:h-[52px]"
          />
          <span className="text-[13px] lg:text-[16px] font-bold uppercase w-6/12 lg:w-[228px] leading-[1.35]">
            Онлайн психотерапия для женщин
          </span>
        </Link>

        <ul className="hidden lg:flex flex-row items-center jusitfy-between uppercase text-[18px] font-light lg:w-[712px] leading-[28px] gap-[45px] ml-auto whitespace-nowrap">
          <Link
            to="/aboutus"
            className="hover:scale-125 transition-all duration-500"
          >
            О нас
          </Link>
          <Link
            to="/therapy"
            className="hover:scale-125 transition-all duration-500"
          >
            Цена
          </Link>
          <Link
            to="/eatingdisorder"
            className="hover:scale-125 transition-all duration-500"
          >
            Помогаем
          </Link>
          <Link
            to="/livestream"
            className="hover:scale-125 transition-all duration-500"
          >
            Онлайн События
          </Link>
          <Link
            to="/contactus"
            className="hover:scale-125 transition-all duration-500"
          >
            Свяжитесь с нами
          </Link>
        </ul>
      </div>
      <div className="flex flex-row items-end lg:items-center justify-start gap-[18px] lg:mt-[60px] lg:gap-[25px]">
        <img
          loading="lazy"
          src="https://static.tildacdn.com/tild6238-6130-4433-a239-396534626433/logo__2Recurso_4.svg"
          className="h-[70px] w-[70px] lg:w-[95px] lg:h-[94px]"
        />
        <span className="text-[13px] font-light mt-[50px] uppercase w-6/12 lg:text-[26px] lg:normal-case lg:w-[457px] lg:leading-8 lg:mt-0">
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
        {/* <div className="bg-neutral-100 h-[442px] w-[309px] mt-[20px] lg:-mt-[213px]" /> */}
        <div className="relative">
          <img
            loading="lazy"
            src="https://thumb.tildacdn.com/tild3032-6639-4839-b961-396233373831/-/format/webp/de9305181d8acc2ab1c4.png"
            className="w-[310px] h-[443px] scale-[140%] lg:scale-100 mt-[110px] lg:w-[500px] lg:h-[670px] lg:-mt-[230px] translate-x-[70px] object-cover"
          />
          <img
            loading="lazy"
            src="https://thumb.tildacdn.com/tild3731-3138-4539-b761-636638626634/-/cover/854x1226/center/center/-/format/webp/3664060e5ea466260835.png"
            className="w-[427px] h-[613px] object-cover absolute -top-[215px] right-[100px] peer hover:opacity-0 z-10 transition-all duration-500 hidden lg:block"
          />
          <img
            loading="lazy"
            src="https://thumb.tildacdn.com/tild3634-3833-4432-a161-633334616334/-/format/webp/c6407f443914501330ba.png"
            className="w-[750px] h-[497px] absolute bottom-[40px] right-[65px] lg:-top-[205px] lg:right-[165px] object-cover  object-right lg:opacity-0 lg:peer-hover:opacity-100 transition-all duration-500"
          />
        </div>
      </div>
      <img
        loading="lazy"
        src="https://static.tildacdn.com/tild3263-3532-4036-b138-323763383136/Arrow_down.svg"
        className="w-[50px] h-[25px] mt-[35px] mx-auto lg:-mt-[50px] lg:w-[80px] lg:h-[41px] lg:object-contain"
      />
    </div>
  );
}
