import { Helmet } from "react-helmet";
//
import { Link } from "react-router-dom";
//
import Navbar from "../components/navbar";
import IndexJumbo from "../components/indexJumbo";
//
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//
import grid1 from "../assets/Website Assets/Home Page/Section 2/grid_1.svg";
import grid2 from "../assets/Website Assets/Home Page/Section 2/grid_2.svg";
import grid3 from "../assets/Website Assets/Home Page/Section 2/grid_3.svg";
import grid4 from "../assets/Website Assets/Home Page/Section 2/grid_4.svg";
import grid5 from "../assets/Website Assets/Home Page/Section 2/grid_5.svg";
import grid6 from "../assets/Website Assets/Home Page/Section 2/grid_6.svg";
//
import diamondURL from "../assets/Website Assets/Home Page/Section 3/Diamond.svg";
import separatorURL from "../assets/Website Assets/Home Page/Section 3/Separator.svg";
//
import sectionIcon from "../assets/Website Assets/Home Page/Section 4/Section 4.1.svg";
import itemIcon from "../assets/Website Assets/Home Page/Section 4/Bullet 1.svg";
import Arrow from "../assets/Website Assets/Home Page/Section 4/Arrow.svg";
import BackgroundSection from "../assets/Website Assets/Home Page/Section 4/BackgroundOld.svg";
//
import ins1 from "../assets/Website Assets/Home Page/Section 5/Institution 1.svg";
import ins2 from "../assets/Website Assets/Home Page/Section 5/Institution 2.svg";
import ins3 from "../assets/Website Assets/Home Page/Section 5/Institution 3.svg";
import ins4 from "../assets/Website Assets/Home Page/Section 5/Institution 4.svg";
//
import sunIcon from "../assets/Website Assets/Home Page/Section 6/Separator 1.svg";
//
import test1_mobile from "../assets/Website Assets/Home Page/Section 6/Testimonials/Test1_Mobile.svg";
import test1_desktop from "../assets/Website Assets/Home Page/Section 6/Testimonials/Test1_Desktop.jpg"

import test2_mobile from "../assets/Website Assets/Home Page/Section 6/Testimonials/Test2_mobile.webp";
import test2_desktop from "../assets/Website Assets/Home Page/Section 6/Testimonials/Test2_Desktop.jpg"

import test3_mobile from "../assets/Website Assets/Home Page/Section 6/Testimonials/Test3_mobile.png";
import test3_desktop from "../assets/Website Assets/Home Page/Section 6/Testimonials/Test3_Desktop.jpg"
// 
import AnastasiaURL from "../assets/Website Assets/Home Page/Section 7/Anastasia.svg"
import MargoURL from "../assets/Website Assets/Home Page/Section 7/Margo.svg"
import TherapystListIcon from "../assets/Website Assets/Home Page/Section 7/Bullet.svg"
// 
import MainFooterText from "../assets/Website Assets/Home Page/Section 8/mainText.svg"
import FooterSunIcon from "../assets/Website Assets/Home Page/Section 8/Asset.svg"
// 
import FooterLogo from "../assets/Website Assets/Home Page/footerLogo.svg"


export default function Home() {
  return (
    <div className="w-screen overflow-hidden">
      <Helmet>
        <title>Freya Mind</title>
      </Helmet>
      <Navbar />
      <main>
        <IndexJumbo />
        <div className="flex flex-col bg-light-green min-h-screen mt-[50px]">
          <h1 className="text-[26px] font-bold uppercase text-dark-green mt-[90px] text-center lg:text-[26px] lg:normal-case lg:mt-[190px]">
            Если вы...
          </h1>
          <div className="grid grid-cols-3 grid-rows-2 gap-[10px] px-[10px] mt-[27px] mb-[115px] lg:w-[1000px] lg:mt-[150px] lg:mb-[370px] lg:mx-auto lg:grid-cols-3">
            <img
              loading="lazy"
              src={grid1}
              className="h-full col-span-2 lg:col-span-1 aspect-square lg:h-auto lg:w-[335px] lg:mt-[13px] lg:-ml-[4.5px]"
            />
            <div className="grid grid-row-2 gap-[10px] lg:col-span-2 lg:flex lg:flex-row lg:items-center">
              <img
                loading="lazy"
                src={grid2}
                className="w-full aspect-square object-fill bg-white lg:w-[307px] lg:h-[334px] lg:bg-transparent lg:-mt-6"
              />
              <img
                loading="lazy"
                src={grid3}
                className="w-full aspect-square object-fill lg:w-[335px] lg:-ml-[1.2px]"
              />
            </div>
            <div className="grid grid-row-2 gap-[10px] lg:flex lg:flex-row lg:items-center lg:col-span-2">
              <img
                loading="lazy"
                src={grid4}
                className="w-full aspect-square object-fill bg-white lg:w-[307px] lg:h-[334px] lg:bg-transparent"
              />
              <img
                loading="lazy"
                src={grid5}
                className="w-full aspect-square object-fill lg:w-[335px] lg:-mt-[27px] lg:-ml-1"
              />
            </div>
            <img
              loading="lazy"
              src={grid6}
              className="h-full col-span-2 lg:col-span-1 aspect-square lg:w-[307px] lg:h-[334px] bg-white"
            />
          </div>
        </div>
        <div className="flex flex-col p-2 lg:mt-[290px]">
          <div className="relative lg:w-[1000px] lg:mx-auto">
            <div className="flex flex-col gap-[12px] mt-[65px] absolute top-[8px] left-0 w-full z-10 lg:top-[20px] lg:gap-[30px]">
              <div className="w-full bg-light-green h-[10px] lg:w-[1000px] lg:h-[25px]" />
              <div className="w-full bg-light-green h-[10px] lg:w-[1000px] lg:h-[25px]" />
            </div>
            <h1 className="text-[18px] font-bold text-center mt-[60px] z-50 relative leading-[22px] lg:text-[47px] lg:leading-[52px]">
              Когнитивно-поведенческая терапия
              <br />
              поможет решить вашу проблему.
            </h1>
            <img
              loading="lazy"
              src={diamondURL}
              className="w-[75px] h-[70px] mx-auto my-[70px] lg:w-[130px] lg:h-[115px] lg:mt-[135px] lg:mb-[90px]"
            />
            <h1 className="text-[18px] font-bold text-center mt-[60px] z-50 relative leading-[22px] w-11/12 mx-auto lg:text-[30px] lg:leading-[38px] lg:w-[643px]">
              Уже за 1О сеансов <br /> вы ощутите качественные изменения как в
              мыслях, так и в жизни
            </h1>
            <img
              loading="lazy"
              src={separatorURL}
              className="mt-[70px] w-10/12 mx-auto lg:w-[730px] lg:h-[60px]"
            />
            <h1 className="text-[18px] font-semibold text-dark-green text-center my-[70px] lg:text-[30px] lg:leading-[38px] lg:w-[1027px]">
              <b className="font-bold">
                Когнитивно-поведенческая терапия (КПТ){" "}
              </b>{" "}
              — <br />
              один из самых эффективных и научно-доказанных методов работы с
              психологическими вопросами
            </h1>
          </div>
        </div>
        <div className="flex flex-col bg-dark-green min-h-screen mt-[50px] p-[15px] mb-[30px] relative z-0 lg:mt-[200px]">
          <div className="flex flex-row gap-[10px] mt-[105px] items-start lg:w-[840px] lg:mx-auto">
            <img
              loading="lazy"
              src={sectionIcon}
              className="w-[30px] aspect-square lg:w-[81px] lg:h-[74px]"
            />
            <div className="flex flex-col gap-[15px]">
              <h1 className="text-[#d2d79d] font-semibold text-[18px] lg:text-[33px] lg:leading-[41px]">
                КПТ РАБОТАЕТ С ОБРАЗОМ МЫШЛЕНИЯ И ВНУТРЕННИМИ УСТАНОВКАМИ
              </h1>
              <h2 className="text-white font-semibold font-[18px] lg:text-[33px] lg:leading-[41px]">
                Именно это влияет на наши эмоции, поступки и ощущения: изменив
                мысли и фокус внимания, мы начинаем смотреть на себя и мир
                по-другому
              </h2>
            </div>
          </div>
          <h1 className="text-white font-semibold text-center mt-[70px] lg:text-[33px] lg:w-[860px] lg:mx-auto lg:mt-[115px]">
            КПТ ПОМОГАЕТ ОБРЕСТИ ПСИХОЛОГИЧЕСКУЮ ГАРМОНИЮ:
          </h1>
          <div className="relative grid grid-items-center mt-[30px]">
            <div className="absolute -top-0.5 -right-[15px] bg-light-green w-[360px] h-[30px] rounded-l-full z-0 lg:hidden"></div>
            <h1 className="text-center z-10 relative text-dark-green text-[18px] font-semibold lg:bg-light-green lg:text-[40px] lg:w-[843px] lg:h-[67px] lg:rounded-full lg:mx-auto lg:mt-[60px]">
              ВЫ ПРИДЁТЕ ОТ
            </h1>
          </div>
          <div className="flex flex-col mt-[30px] gap-[20px] realtive z-10 lg:w-[860px] lg:mx-auto lg:mt-[60px]">
            <div className="flex flex-row gap-[15px] lg:gap-[25px] items-center">
              <img
                loading="lazy"
                src={itemIcon}
                className="w-[16px] aspect-square lg:w-[32px]"
              />
              <p className="text-white font-semibold text-[18px] lg:text-[28px]">
                Я не достоиН любви
              </p>
            </div>
            <div className="flex flex-row gap-[15px] lg:gap-[25px] items-center">
              <img
                loading="lazy"
                src={itemIcon}
                className="w-[16px] aspect-square lg:w-[32px]"
              />
              <p className="text-white font-semibold text-[18px] lg:text-[28px]">
                Другие лучше меня
              </p>
            </div>
            <div className="flex flex-row gap-[15px] lg:gap-[25px] items-start">
              <img
                loading="lazy"
                src={itemIcon}
                className="w-[16px] aspect-square lg:w-[32px]"
              />
              <p className="text-white font-semibold text-[18px] lg:text-[28px]">
                В будущем меня не ждет ничего хорошего
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-[30px] mt-[30px] realtive z-10 lg:mt-[65px] lg:gap-[70px]">
            <img
              loading="lazy"
              src={Arrow}
              className="w-[20px] h-[13px] lg:w-[40px] lg:h-[23px]"
            />
            <img
              loading="lazy"
              src={Arrow}
              className="w-[20px] h-[13px] lg:w-[40px] lg:h-[23px]"
            />
            <img
              loading="lazy"
              src={Arrow}
              className="w-[20px] h-[13px] lg:w-[40px] lg:h-[23px]"
            />
          </div>
          <div className="relative grid grid-items-center mt-[35px] z-10">
            <div className="absolute -top-0.5 -left-[15px] bg-light-green w-[365px] h-[30px] rounded-r-full z-0 lg:hidden"></div>
            <h1 className="text-center z-10 relative text-dark-green text-[18px] font-semibold lg:bg-light-green lg:text-[40px] lg:w-[843px] lg:h-[67px] lg:rounded-full lg:mx-auto lg:mt-[60px]">
              К ПОНИМАНИЮ, ЧТО:
            </h1>
          </div>
          <div className="flex flex-col mt-[30px] gap-[20px] relative z-10 lg:w-[860px] lg:mx-auto lg:mb-[220px]">
            <div className="flex flex-row gap-[15px] items-center">
              <img
                loading="lazy"
                src={itemIcon}
                className="w-[16px] aspect-square lg:w-[32px]"
              />
              <p className="text-white font-semibold text-[18px] lg:text-[28px]">
                Со мной все хорошо
              </p>
            </div>
          </div>
          <img
            loading="lazy"
            src={BackgroundSection}
            className="absolute -bottom-20 left-0 w-full z-0 lg:-z-20 lg:-top-[30px]"
          />
          <img
            loading="lazy"
            src={BackgroundSection}
            className="absolute -bottom-20 -left-[0px] w-full -z-20 hidden lg:block"
          />
        </div>
        <div className="flex flex-col mt-[165px] lg:mt-[200px]">
          <h1 className="text-dark-green text-[23px] font-bold text-center w-1/2 mx-auto lg:text-[30px]">
            КПТ-ПОДХОД РЕКОМЕНДУЮТ:
          </h1>
          <div className="grid grid-cols-2 grid-items-center w-full lg:mt-[185px] lg:flex lg:flex-row lg:items-center lg:justify-between lg:w-[1190px] lg:mx-auto">
            <div className="border-r-[1px] border-b-[1px] border-[#eee] grid grid-items-center p-[10px] lg:border-none lg:relative">
              <h4 className="text-[#9aa56d] text-[15px] font-semibold absolute -top-[65px]">
                Всемирная организация здравоохранения
              </h4>
              <img
                loading="lazy"
                src={ins1}
                className="w-4/6 mx-auto my-auto lg:w-[330px] lg:h-[100px]"
              />
            </div>
            <div className="w-[5px] h-[80px] bg-light-green hidden lg:flex" />
            <div className="border-b-[1px] border-[#eee] grid grid-items-center p-[10px] lg:border-none lg:relative">
              <h4 className="text-[#9aa56d] text-[15px] font-semibold absolute -top-[60px] whitespace-nowrap">
                Красный крест
              </h4>
              <img
                loading="lazy"
                src={ins2}
                className="w-1/2 my-auto mx-auto lg:w-[101px] lg:h-[109px]"
              />
            </div>
            <div className="w-[5px] h-[80px] bg-light-green hidden lg:flex" />
            <div className="border-r-[1px] border-b-[1px] border-[#eee] grid grid-items-center p-[10px] lg:border-none lg:relative">
              <h4 className="text-[#9aa56d] text-[15px] font-semibold absolute -top-[61px] w-full text-center">
                <span className="mx-auto">ООН</span>
              </h4>
              <img
                loading="lazy"
                src={ins3}
                className="w-1/2 mx-auto my-auto lg:w-[108px] lg:h-[108px]"
              />
            </div>
            <div className="w-[5px] h-[80px] bg-light-green hidden lg:flex" />
            <div className="border-b-[1px] border-[#eee] grid grid-items-center p-[10px] lg:border-none lg:relative">
              <h4 className="text-[#9aa56d] text-[15px] font-semibold absolute -top-[65px] whitespace-nowrap">
                Американская ассоциация психологов
              </h4>
              <img
                loading="lazy"
                src={ins4}
                className="w-1/2 my-auto mx-auto lg:w-[260px] lg:h-[100px]"
              />
            </div>
            {/* <div className="border-r-[1px] border-[#eee] grid grid-items-center p-[10px] lg:hidden lg:border-none">
              <img
                loading="lazy"
                src="https://static.tildacdn.com/tild6661-6534-4139-b963-346265643561/apaRecurso_3.svg"
                className="w-1/2 my-auto mx-auto"
              />
            </div> */}
          </div>
        </div>
        <div className="flex flex-col relative mt-[80px] bg-[#e6e6e6] z-0 lg:mt-[165px]">
          <Link
            to="/aboutus"
            className="bg-dark-green w-[260px] rounded-full h-[40px] text-white font-semibold text-[14px] mx-auto scale-[120%] -mt-[5%] relative z-10 lg:w-[520px] lg:h-[61px] lg:scale-100 lg:text-[22px] lg:-mt-[30px] grid place-items-center"
          >
            ПОДРОБНЕЕ О КПТ И О НАС
          </Link>
          <div className="flex flex-row justify-between items-center -mt-[20px] lg:px-[56px] lg:-mt-[30px]">
            <div className="bg-dark-green h-[7px] lg:h-[4px] w-[15px] lg:w-[300px]"></div>
            <div className="bg-dark-green h-[7px] lg:h-[4px] w-[15px] lg:w-[300px]"></div>
          </div>
          <img
            loading="lazy"
            src={sunIcon}
            className="w-[162px] aspect-square -mt-[81px] mx-auto scale-[129%] relative z-0 lg:w-[343px] lg:-mt-[165px] lg:scale-100"
          />
          <div className="relative mt-[145px] lg:w-[1000px] lg:mx-auto">
            <h1 className="text-[20px] font-semibold text-center scale-[129%] w-4/5 mx-auto z-10 relative leading-[26px] lg:text-[44px] lg:scale-100 lg:w-full">
              МЫ ПОМОЖЕМ ТЕБЕ, КАК ПОМОГЛИ ИМ
            </h1>
            <div className="absolute top-[15px] -right-[75px] bg-white h-[13px] w-screen z-0 scale-[129%] lg:scale-100 lg:w-[1000px] lg:h-[25px] lg:right-0"></div>
          </div>
          <div className="flex p-[23px] mt-[20px] lg:mt-[55px]">
            <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={50}
              slidesPerView={1}
              navigation={window.innerWidth > 1024}
              loop={true}
              pagination={{ clickable: true }}
              className="w-full mb-[75px] lg:w-[1000px] lg:mx-auto"
            >
              <SwiperSlide>
                <img
                  loading="lazy"
                  src={test1_mobile}
                  alt=""
                  className="mb-[45px] lg:hidden"
                />
                <img
                  loading="lazy"
                  src={test1_desktop}
                  className="lg:h-[308px] lg:w-[860px] hidden lg:flex mx-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  loading="lazy"
                  src={test2_mobile}
                  alt=""
                  className="mb-[45px] lg:hidden"
                />
                <img
                  loading="lazy"
                  src={test2_desktop}
                  className="lg:h-[308px] lg:w-[860px] hidden lg:flex mx-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  loading="lazy"
                  src={test3_mobile}
                  alt=""
                  className="mb-[45px] lg:hidden"
                />
                <img
                  loading="lazy"
                  src={test3_desktop}
                  className="lg:h-[308px] lg:w-[860px] hidden lg:flex mx-auto"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="relative mt-[95px] lg:w-[1000px] lg:mx-auto lg:mt-[155px]">
          <h1 className="text-[20px] font-semibold text-center scale-[129%] w-4/5 mx-auto z-10 relative leading-[26px] lg:text-[44px] lg:scale-100 lg:w-full">
            ПОЗНАКОМЬТЕСЬ С НАМИ УЖЕ СЕЙЧАС
          </h1>
          <div className="absolute top-[12px] -right-[75px] bg-light-green h-[13px] w-screen z-0 scale-[129%] lg:scale-100 lg:w-[1000px] lg:h-[25px] lg:left-0 lg:top-[15px]"></div>
        </div>
        <div className="flex flex-col p-[20px] mt-[80px] lg:w-[1020px] lg:mx-auto lg:grid lg:grid-cols-2 lg:p-0">
          <div>
            <h1 className="text-dark-green text-[30px] font-bold lg:text-[35px]">
              Анастасия Петрова
            </h1>
            <h2 className="text-dark-green text-[23px] font-bold lg:text-[23px] lg:mt-[25px]">
              психолог-консультант
            </h2>
            <p className="text-[18.3px] font-normal mt-[15px] leading-[23.76px] lg:text-[18px] lg:w-[375px] lg:mt-[35px]">
              «Я помогу вам в вопросах отношений и брака, взаимоотношений с
              родителями и окружением. Вы обретете навыки уверенного поведения,
              общения, самоопределения и принятия решений. Для меня важно только
              одно – ваше психическое и физическое здоровье».
            </p>
            <div className="flex flex-row gap-[15px] items-start mt-[26px] lg:gap-[10px] lg:mt-[50px]">
              <img
                loading="lazy"
                src={TherapystListIcon}
                className="w-[18px] scale-[129%] aspect-square lg:scale-100 lg:w-[17px]"
              />
              <p className="font-bold text-[18px] -mt-1 lg:w-[383px] leading-[23.76px]">
                Степень магистра по психологии. <br /> 6 лет практики личной
                психотерапии.
              </p>
            </div>
            <div className="flex flex-row gap-[15px] items-start mt-[10px] lg:gap-[10px] lg:mt-[25px]">
              <img
                loading="lazy"
                src={TherapystListIcon}
                className="w-[18px] scale-[129%] aspect-square lg:scale-100 lg:w-[17px]"
              />
              <p className="font-bold text-[18px] -mt-1 lg:w-[434px] leading-[23.76px]">
                Член Ассоциации когнитивно-поведенческих психотерапевтов России.
              </p>
            </div>
          </div>
          <img
            loading="lazy"
            src={AnastasiaURL}
            className="mt-[35px] lg:min-w-[545px] lg:aspect-square lg:mt-0"
          />
          {/* <button className="w-[285px] h-[36px] bg-dark-green border-2 border-dark-green text-white text-[10px] font-semibold leading-[15px] rounded-full scale-[129%] mx-auto mt-[33px] hover:bg-white hover:text-dark-green transition-all lg:w-[463px] lg:h-[65px] lg:text-[15px] lg:scale-100 lg:col-start-2 lg:mt-[65px]">
            ЗАПИСАТЬСЯ НА БЕСПЛАТНОЕ ЗНАКОМСТВО
          </button> */}
        </div>
        <div
          className="flex flex-col p-[20px] mt-[80px] mb-[140px] lg:mb-0 lg:w-[1020px] lg:mx-auto lg:grid lg:grid-cols-2 lg:p-0 lg:gap-[100px] lg:mt-[150px]"
          style={{ direction: "rtl" }}
        >
          <div style={{ direction: "ltr" }}>
            <h1 className="text-dark-green text-[32px] font-bold lg:text-[35px]">
              Марго Хановски
            </h1>
            <h2 className="text-dark-green text-[23px] -mt-[5px] font-bold lg:text-[23px] lg:mt-[25px]">
              Клинический психолог
            </h2>
            <p className="text-[18.6px] font-normal mt-[20px] leading-[23.76px] lg:text-[18px] lg:w-[375px] lg:mt-[35px]">
              « В терапии со мной вы сможете разобраться в таких проблемах, как
              тревожность, низкая самооценка, депрессия. Я использую только
              научно доказанные методы, все используемые техники понятны и
              прозрачны, направлены на эффективное, но в то же время деликатное
              разрешение ваших проблем ».
            </p>

            <div className="flex flex-row gap-[15px] items-start mt-[36px] lg:gap-[10px] lg:mt-[50px]">
              <img
                loading="lazy"
                src={TherapystListIcon}
                className="w-[18px] scale-[129%] aspect-square lg:scale-100 lg:w-[17px]"
              />
              <p className="font-bold text-[18px] -mt-1 lg:w-[383px] leading-[23.76px]">
                Специалитет по клинической психологии, 2 года личной
                психотерапии
              </p>
            </div>
            <div className="flex flex-row gap-[15px] items-start mt-[10px] lg:gap-[10px] lg:mt-[25px]">
              <img
                loading="lazy"
                src={TherapystListIcon}
                className="w-[18px] scale-[129%] aspect-square lg:scale-100 lg:w-[17px]"
              />
              <p className="font-bold text-[18px] -mt-1 lg:w-[395px] leading-[23.76px]">
                Практика с 2018 года под супервизией, а также постоянные
                повышения квалификации в Ассоциации когнитивно-поведенческих
                терапевтов России
              </p>
            </div>
          </div>
          <img
            loading="lazy"
            src={MargoURL}
            className="mt-[35px] lg:min-w-[544px] lg:aspect-square lg:mt-0"
          />

          {/* <button className="w-[285px] h-[36px] bg-dark-green border-2 border-dark-green text-white text-[10px] font-semibold leading-[15px] rounded-full scale-[129%] mx-auto mt-[33px] hover:bg-white hover:text-dark-green transition-all lg:w-[463px] lg:h-[65px] lg:text-[15px] lg:scale-100 lg:col-start-2 lg:-mt-[100px]">
            ЗАПИСАТЬСЯ НА БЕСПЛАТНОЕ ЗНАКОМСТВО
          </button> */}
        </div>

        <div className="w-full grid place-items-center lg:mt-[100px] lg:mb-[200px]">
          {/* <button className="w-[285px] h-[36px] bg-dark-green border-2 border-dark-green text-white text-[10px] font-semibold leading-[15px] rounded-full scale-[129%] mx-auto mt-[33px] hover:bg-white hover:text-dark-green transition-all lg:w-[463px] lg:h-[65px] lg:text-[15px] lg:scale-100 lg:mt-[65px] uppercase">
            Наши терапевты
          </button> */}

          <a className=" w-[260px] rounded-full h-[40px] text-white font-semibold text-[14px] mx-auto scale-[120%] relative z-10 lg:w-[520px] lg:h-[61px] lg:scale-100 lg:text-[22px]  bg-dark-green border-2 border-dark-green leading-[15px] -mt-[80px] mb-[50px] hover:bg-white hover:text-dark-green transition-all lg:mt-[65px] uppercase grid place-items-center" href="https://bystro.freyamind.com/our-therapists" target="_blank">
            Наши терапевты
          </a>
        </div>
        <div className="bg-dark-green grid place-items-center h-[560px] lg:mt-[180px] lg:h-[563px]">
          <div className="relative w-[271px] lg:w-[923px] h-[57px] scale-[129%] lg:scale-100">
            <img
              loading="lazy"
              src={MainFooterText}
              className="w-[271px] lg:w-[923px] lg:z-10 relative"
            />
            <img
              loading="lazy"
              src={FooterSunIcon}
              className="w-[130px] aspect-square absolute bottom-[30px] right-0 lg:w-[535px] lg:-bottom-[100px] lg:-right-[140px] lg:z-0"
            />
          </div>
        </div>
      </main>
      <footer className="bg-dark-green text-white border-t-2 lg:border-t-0 border-white/10 p-[15px] lg:pb-[104px] lg:pt-[50px]">
        <div className="lg:flex lg:flex-row-reverse lg:w-[1070px] lg:mx-auto lg:gap-[115px]">
          <ul className="mt-[40px] flex flex-col gap-[10px] text-[14px] font-light lg:text-[18px] lg:whitespace-nowrap">
            <li>
              <Link to="/"> Главная страница </Link>
            </li>
            <li>
              <Link to="/aboutus"> О нас </Link>
            </li>
            <li>
              <Link to="/pricing"> Терапия </Link>
            </li>
            <li>Статьи</li>
            <li>Тесты</li>
            <li>
              <div className="flex items-center justify-start gap-6 w-full h-[26px] mt-[10px]">
                <a
                  href="https://www.instagram.com/freya.mind_/?hl=es-la"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-[26px] aspect-auto fill-white"
                  >
                    <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                    <circle cx="16.806" cy="7.207" r="1.078"></circle>
                    <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                  </svg>
                </a>
                <a href="https://t.me/freya_mind_bot" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-[26px] aspect-auto fill-white"
                  >
                    <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path>
                  </svg>
                </a>
              </div>
            </li>
          </ul>
          <p className="text-[15px] pr-5 font-light mt-[20px] lg:text-[18px]">
            Важный момент. "Freya" — это не скорая психологическая помощь. Если
            у вас серьезные, угрожающие вашей жизни проблемы, которые требуют
            немедленного решения, вам лучше обратиться в{" "}
            <a
              href="http://freyamind.com/freetherapy/"
              className="text-[#d2d793] underline decoration-[#d2d793]"
            >
              какую-либо из этих организаций.
            </a>
            <br />
            <br />
            Регистрация на сайте означает согласие с{" "}
            <Link
              to="/privacy"
              className="text-[#d2d793] underline decoration-[#d2d793]"
            >
              пользовательским соглашением.
            </Link>
            Политика в отношении обработки и{" "}
            <Link
              to="/personal"
              className="text-[#d2d793] underline decoration-[#d2d793]"
            >
              {" "}
              защиты персональных данных{" "}
            </Link>
            .
          </p>
          <div className="lg:w-[400px]">
            <img
              loading="lazy"
              src="https://static.tildacdn.com/tild3533-3535-4537-a338-356262353638/Freya_Logo.svg"
              className="w-[80px] h-[40px] scale-[129%] mt-[65px] ml-4 lg:scale-100 lg:w-[124px] lg:h-[51px] lg:mt-4 lg:ml-0"
            />
            <p className="mt-[15px] font-light text-[16px] lg:text-[18px] lg:whitespace-nowrap lg:ml-2">
              © Freya 2022
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
