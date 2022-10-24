import LogoWhite from "../assets/Website Assets /logo-white.svg";
import JumboImage from "../assets/Website Assets /About Us Page/Section 1/About-Us-Background.webp";
//
import { Link } from "react-router-dom";

export default function IndexJumbo() {
  return (
    // <div className="flex flex-col lg:max-w-[1200px] lg:mx-auto lg:mt-[70px] bg-[#CCCC9F]">
    <div className="flex flex-col lg:pt-[70px] bg-[#CCCC9F] lg:w-[1200px] lg:mx-auto px-[20px]">
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
          <span className="text-[13px] lg:text-[60px] font-bold uppercase w-6/12 lg:w-[228px] leading-[1.35] text-white">
            О нас
          </span>
        </Link>

        <ul className="hidden lg:flex flex-row items-center jusitfy-between uppercase text-[18px] font-light lg:w-[712px] leading-[28px] gap-[45px] ml-auto whitespace-nowrap text-white">
          <Link
            to="/aboutus"
            className="hover:scale-125 transition-all duration-500 font-bold"
          >
            О нас
          </Link>
          <Link
            to="/therapy"
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
            className="hover:scale-125 transition-all duration-500"
          >
            Свяжитесь с нами
          </Link>
        </ul>
      </nav>
      <div className="flex flex-row items-end lg:items-center justify-start gap-[18px] lg:mt-[60px] lg:max-w-[1400px] lg:mx-auto">
        <img
          loading="lazy"
          src={JumboImage}
          className="w-screen h-[54.8vh] object-cover absolute top-0 left-0 lg:right-0 lg:mx-auto lg:w-[1400px] lg:h-[836px]"
        />
        <div className="flex flex-col relative bg-light-green lg:bg-transparent w-full mt-[35.8vh] px-[20px] pb-[125px] lg:mt-[470px] ">
          <div className="bg-white w-min pl-[39px] pr-[18px] py-[35px] text-[32px] font-bold text-dark-green absolute -top-[80px] right-0 rounded-tl-[40px] leading-[42px] lg:w-[594px] lg:h-[258px] lg:rounded-tl-[80px] lg:text-[40px] lg:pl-[70px] lg:py-[45px] lg:right-[185px] lg:-top-[120px] lg:leading-[50px]">
            <h1>КОГНИТИВНО-ПОЕВЕДЕНЧЕСКАЯ ТЕРАПИЯ И ВЫ:</h1>
          </div>
          <p className="text-[16px] text-dark-green font-semibold scale-[129%] mt-[160px] w-5/6 mx-auto text-center lg:scale-100 lg:text-[18px] lg:mt-[80px] lg:ml-[190px]">
            Почему стоит выбрать терапию вместе с нами?
          </p>
          <div className="lg:ml-[60px] lg:flex lg:flex-row lg:items-start lg:justify-start lg:gap-[65px] lg:max-w-[1045px] lg:mx-auto ">
            <div>
              <div className="bg-dark-green w-[89px] h-[6px] mt-[100px] scale-[129%] ml-[8px] lg:w-[88px] lg:scale-100 lg:h-[6px] lg:ml-0 lg:mt-[115px]"></div>

              <p className="text-[14px] text-dark-green font-semibold scale-[129%] mt-[55px] w-4/6 ml-[30px] lg:text-[26px] lg:leading-[40px] lg:scale-100 lg:w-[460px] lg:ml-0 lg:mt-[30px] ">
                В нашей психотерапевтической практике мы используем один из
                самых эффективных и научно доказанных методов -
                когнитивно-поведенческую психотерапию.
              </p>
            </div>
            <div>
              <h1 className="text-dark-green text-[16px] font-medium mt-[110px] border-[1px] border-dark-green w-fit rounded-[100%] scale-[129%] px-[30px] py-[15px] ml-auto mr-[20px] lg:ml-0 lg:scale-100 lg:text-[26px] lg:px-[20px] lg:py-[10px] lg:border-[2px] lg:mt-[150px]">
                Что это значит?
              </h1>

              <p className="text-[14px] text-dark-green font-medium scale-[129%] mt-[55px] w-9/12 ml-auto mr-[40px] text-right lg:ml-[10px] lg:text-left lg:text-[23px] lg:scale-100 lg:w-11/12 lg:leading-[31px] lg:mt-[34px] ">
                Основа данного подхода — <br /> учение о том, что именно образ
                мышления определяет нашу жизнь. Не сами ситуации расстраивают
                или пугают нас, а то, что мы о них думаем. Именно от наших
                мыслей зависит, какие эмоции мы испытываем, как себя ведем и на
                что опираемся.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
