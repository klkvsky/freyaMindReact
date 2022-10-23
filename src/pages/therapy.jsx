// import { useState, useRef } from "react";
//
import Navbar from "../components/navbar";
import TherapyJumbo from "../components/therapyJumbo";
import Feedback from "../components/feedbackComponent";

export default function About() {
  return (
    <div className="w-screen overflow-hidden">
      <Navbar />

      <main>
        <TherapyJumbo />

        {/* <div className="flex flex-row w-full items-center justify-center mt-[58vh] gap-[15px] lg:mt-[889px] lg:gap-[50px]">
          <img loading="lazy" 
            src="https://static.tildacdn.com/tild6337-3464-4332-b334-363938646638/00c4df6d-ee01-495d-b.svg"
            className="w-[65px] h-[59px] lg:w-[114px] lg:h-[104px]"
          />
          <img loading="lazy" 
            src="https://static.tildacdn.com/tild3733-3766-4537-b462-643730316233/2b8ea003-8218-489c-9.svg"
            className="h-[51px] aspect-square lg:h-[90px]"
          />
          <img loading="lazy" 
            src="https://static.tildacdn.com/tild3265-3365-4661-b439-313462623365/567ae009-ac59-4973-b.svg"
            className="h-[48px] aspect-square lg:h-[84px]"
          />
        </div>
        <h1 className="text-[18px] font-bold text-center mt-[30px] lg:text-[36px] lg:w-[1147px] lg:mx-auto">
          Вы не можете установить цену на психическое здоровье, но наши цены
          дают вам душевное спокойствие
        </h1>

        <p className="text-[14px] font-light text-center w-4/6 mx-auto mt-[95px] lg:text-[18px] lg:mt-[22px]">
          Встречи с психологом легко впишутся в ваш привычный график!
        </p>
        <p className="text-[14px] font-light text-center w-4/6 mx-auto mt-[25px] mb-[105px] lg:text-[18px] lg:mt-[0] lg:mb-[165px]">
          Мы также поможем решить проблемы в отношениях с едой и своим телом.{" "}
        </p> */}

        <div className="flex flex-col  min-h-screen text-black py-[110px] lg:mt-[700px] mt-[28vh]">
          <h1 className="text-[25px] font-semibold text-center uppercase lg:text-[40px]">
            Планы терапии
          </h1>

          <div className="lg:flex flex-row items-center justify-center gap-[30px] lg:w-[1020px] lg:mx-auto lg:mt-[100px]">
            <div
              style={{ boxShadow: "2px 2px 4px 5px rgba(171,171,171,0.2)" }}
              className="flex flex-col border-[1px] border-white bg-[#b7b77f] shadow-md w-[320px] mx-auto rounded-[15px] px-[20px] pt-[25px] pb-[20px] mt-[25px] lg:max-h-[551px] lg:mt-0"
            >
              <h1 className="text-[22px] font-semibold leading-7 text-white">
                НУЖНО ПОГОВОРИТЬ ПРЯМО СЕЙЧАС
              </h1>
              <p className="text-[14px] text-black font-semibold mt-[5px]">
                две первых сессии по цене одной
              </p>

              <div className="flex flex-row items-center justify-start border-[1px] border-white rounded-full w-full mt-[30px] pl-[12px] relative">
                <div className="absolute top-[45%] left-[7%]">
                  <div className="w-[75px] h-[2px] bg-[#858585] rotate-[30deg]" />
                  <div className="w-[75px] h-[2px] bg-[#858585] -rotate-[30deg]" />
                </div>
                <h2 className="text-[40px] font-semibold text-[#858585]">
                  €78
                </h2>
                <h2 className="text-[40px] font-semibold text-black ml-[12px]">
                  €39*
                </h2>
                <p className="text-black font-semibold text-[15px] ml-[3px]">
                  за 2 сессии
                </p>
              </div>

              <p className="text-black font-bold text-[14px] mt-[20px]">
                ПОЧУВСТВУЕТЕ СЕБЯ ЛУЧШЕ УЖЕ ПОСЛЕ ПЕРВОЙ ВСТРЕЧИ
              </p>

              <p className="text-[14px] text-black mt-[10px]">
                Для тех, кто решился на встречу с психологом, чтобы обсудить то,
                что беспокоит в данный момент. Наш специалист на связи в любое
                время, когда вам это нужно. Если что-то пойдет не так, его можно
                поменять.
              </p>

              <button className="bg-black rounded-full font-semibold text-[14px] w-[276px] min-h-[42px] mt-[50px] lg:mt-[50px] text-white">
                СТОИМОСТЬ ТАРИФА 39€
              </button>
              <p className="text-[12px] text-black mt-[10px]">
                **по промокоду “FRESHSTART” вы получите первые две сессии по
                цене одной.
              </p>
            </div>

            <div
              style={{ boxShadow: "2px 2px 4px 5px rgba(171,171,171,0.2)" }}
              className="flex flex-col border-[1px] border-white bg-[#edaf71] shadow-md w-[320px] mx-auto rounded-[15px] px-[20px] pt-[25px] pb-[20px] mt-[45px] lg:h-[551px] lg:mt-0"
            >
              <h1 className="text-[22px] font-semibold leading-7 text-white lg:w-5/6">
                РЕГУЛЯРНЫЕ СЕССИИ
              </h1>
              <p className="text-[14px] text-black font-semibold">
                встречи каждую неделю
              </p>

              <div className="flex flex-row items-center justify-start border-[1px] border-white rounded-full mt-[30px] pl-[12px] relative w-[200px]">
                <h2 className="text-[40px] font-semibold text-black ml-[12px]">
                  €29*
                </h2>
                <p className="text-black font-semibold text-[15px] ml-[3px]">
                  за сессию
                </p>
              </div>

              <p className="text-black font-bold text-[14px] mt-[20px]">
                СМОЖЕМ ИЗМЕНИТЬ ЖИЗНЬ К ЛУЧШЕМУ ЗА 10-20 СЕССИЙ
              </p>

              <p className="text-[14px] text-black mt-[10px] leading-4">
                Для тех, кому нужны регулярные встречи с психологом, чтобы
                решить волнующие проблемы, поднять качество жизни и прийти к
                гармонии с собой.
                <br />
                <br />
                Назначайте встречи со специалистом в удобное вам время раз в
                неделю с 25%-ой скидкой.
              </p>

              <button className="bg-black rounded-full font-semibold text-[14px] w-[276px] min-h-[42px] mt-[50px] lg:mt-[35px] text-white">
                СТОИМОСТЬ ТАРИФА 116€
              </button>
              <p className="text-[12px] text-black mt-[10px]">
                **при оплате четырехнедельного пакета
              </p>
            </div>

            <div
              style={{ boxShadow: "2px 2px 4px 5px rgba(171,171,171,0.2)" }}
              className="flex flex-col border-[1px] border-white bg-[#818a62] w-[320px] mx-auto rounded-[15px] px-[20px] pt-[25px] pb-[20px] mt-[45px] lg:h-[551px] lg:mt-0"
            >
              <h1 className="text-[22px] font-semibold leading-7 text-white">
                ИНТЕНСИВНАЯ ПРОРАБОТКА
              </h1>
              <p className="text-[14px] text-black font-semibold mt-[5px]">
                индивидуальный формат
              </p>

              <div className="flex flex-row items-center justify-start border-[1px] border-white rounded-full mt-[30px] pl-[12px] relative w-[200px]">
                <h2 className="text-[40px] font-semibold text-black ml-[12px]">
                  €24*
                </h2>
                <p className="text-black font-semibold text-[15px] ml-[3px]">
                  за сессию
                </p>
              </div>

              <p className="text-black font-bold text-[14px] mt-[20px]">
                С НАМИ ПРОБЛЕМА РЕШАЕТСЯ В РЕАЛЬНЫЕ СРОКИ
              </p>

              <p className="text-[14px] text-black mt-[10px]">
                Для тех, кому хочется более интенсивной работы с конкретной
                проблемой. Наши специалисты готовы работать с вами в
                индивидуальном формате, по вашему персональному графику с 40%-ой
                скидкой.
              </p>

              <button className="bg-black rounded-full font-semibold text-[14px] w-[276px] min-h-[42px] mt-[50px] lg:mt-[27px] text-white">
                СТОИМОСТЬ ТАРИФА 288€
              </button>
              <p className="text-[12px] text-black mt-[10px]">
                ** при оплате 12 сессий
              </p>
            </div>
          </div>

          <p className="text-[14px] font-light w-[310px] mx-auto mt-[55px] lg:text-[18px] lg:w-[558px] leading-5 text-center">
            Чтобы узнать больше, перейдите по ссылке ниже. Мы будем рады
            ответить на все ваши вопросы.
          </p>

          <button className="bg-black rounded-full font-semibold text-[14px] w-[276px] min-h-[42px] mt-[20px] text-white uppercase mx-auto">
            Узнать больше
          </button>

          <div
            style={{ boxShadow: "2px 2px 4px 5px rgba(171,171,171,0.2)" }}
            className="flex flex-col border-[1px] border-white bg-[#ebcf92] shadow-md w-[320px] mx-auto rounded-[15px] px-[20px] pt-[25px] pb-[20px] mt-[45px] lg:mt-[100px] lg:flex-row lg:w-[1019px] lg:h-[210px] lg:justify-between "
          >
            <div className="lg:w-[268px]">
              <h1 className="text-[22px] font-semibold leading-7 text-white lg:w-5/6">
                ГРУППОВАЯ ТЕРАПИЯ
              </h1>
              <p className="text-[14px] text-black font-semibold">
                Групповая терапия — мгновенные улучшения в отношениях
              </p>

              <div className="flex flex-row items-center justify-start border-[1px] border-white rounded-full mt-[30px] pl-[12px] relative w-[200px] lg:w-[172px] lg:mt-[10px] lg:pl-[0px] lg:h-[50px]">
                <h2 className="text-[40px] font-semibold text-black ml-[12px]">
                  €25
                </h2>
                <p className="text-black font-semibold text-[15px] ml-[3px]">
                  за <br /> сессию
                </p>
              </div>
            </div>
            <div className="lg:w-[255px]">
              <p className="text-black font-bold text-[14px] mt-[20px]">
                ЗАМЕТНЫЕ УЛУЧШЕНИЯ СОСТОЯНИЯ ЧЕРЕЗ 5-10 ВСТРЕЧ
              </p>

              <p className="text-[14px] text-black mt-[10px] leading-4">
                Улучшить взаимоотношения, научиться выстраивать границы,
                понимать себя в коллективе — лучшее, что может подарить вам
                групповая терапия
              </p>
            </div>
            <div className="lg:w-[276px]">
              <button className="bg-black rounded-full font-semibold text-[14px] w-[276px] min-h-[42px] mt-[50px] lg:mt-[35px] text-white">
                Приобрести
              </button>
              <button className="bg-white rounded-full font-semibold text-[14px] w-[276px] min-h-[42px] mt-[10px] text-black">
                Узнать больше
              </button>
              <p className="text-[12px] text-black mt-[10px] text-center">
                ** при оплате 12 сессий
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#5F6545] pt-[110px] pb-[190px]">
          <div className="flex flex-col items-center lg:flex-row gap-[40px] lg:max-w-[1010px] lg:mx-auto relative">
            <div className="lg:max-w-[281px] relative z-10">
              <h1 className="text-center lg:text-left text-[25px] font-bold uppercase lg:text-[46px] text-white whitespace-nowrap ">
                ДРУГИЕ ПРОДУКТЫ <br /> ФРЕЙЯ
              </h1>
              <p className="text-[16px] text-white w-[281px] mt-[10px] mx-auto">
                Улучшите каждую область жизни вместе с нашими специалистами
              </p>

              <button className="bg-white rounded-full font-semibold text-[14px] w-[276px] min-h-[42px] mt-[20px] text-black">
                Узнать больше
              </button>
            </div>
            <div
              style={{ boxShadow: "2px 2px 4px 5px rgba(171,171,171,0.2)" }}
              className="flex flex-col border-[1px] border-white bg-[#e3d89d] shadow-md w-[320px] mx-auto rounded-[15px] px-[20px] pt-[25px] pb-[20px] mt-[65px] lg:max-h-[416px] lg:mt-auto relative z-10"
            >
              <h1 className="text-[22px] font-semibold leading-7 text-black">
                ДИЕТОЛОГ-ЭНДОКРИНОЛОГ
              </h1>

              <p className="text-[14px] text-black mt-[5px]">
                Индивидуальный формат
              </p>

              <div className="flex flex-row items-center justify-start border-[1px] border-white rounded-full w-full mt-[10px] pl-[12px] relative">
                <div className="absolute top-[45%] left-[7%]">
                  <div className="w-[75px] h-[2px] bg-[#858585] rotate-[30deg]" />
                  <div className="w-[75px] h-[2px] bg-[#858585] -rotate-[30deg]" />
                </div>
                <h2 className="text-[40px] font-semibold text-[#858585]">
                  €78
                </h2>
                <h2 className="text-[40px] font-semibold text-black ml-[12px]">
                  €39*
                </h2>
                <p className="text-black font-semibold text-[15px] ml-[3px]">
                  за 2 сессии
                </p>
              </div>

              <p className="text-[14px] text-black mt-[10px]">
                кому нужны регулярные встречи с психологом, чтобы решить
                волнующие
              </p>

              <button className="bg-black rounded-full font-semibold text-[14px] w-[276px] min-h-[42px] mt-[50px] lg:mt-[50px] text-white">
                СТОИМОСТЬ ТАРИФА 39€
              </button>
              <button className="bg-white rounded-full font-semibold text-[14px] w-[276px] min-h-[42px] mt-[10px] text-black">
                Узнать больше
              </button>
            </div>

            <div
              style={{ boxShadow: "2px 2px 4px 5px rgba(171,171,171,0.2)" }}
              className="flex flex-col border-[1px] border-white bg-[#e0dbc9] w-[320px] mx-auto rounded-[15px] px-[20px] pt-[25px] pb-[20px] mt-[45px] lg:h-[565px] lg:mt-0 relative z-10"
            >
              <h1 className="text-[22px] font-semibold leading-7 text-black">
                РАССТРОЙСТВА ПИЩЕВОГО ПОВЕДЕНИЯ
              </h1>
              <p className="text-[14px] text-black mt-[5px]">
                Постоянно думаете о еде? Мы можем помочь.
              </p>

              <div className="flex flex-row items-center justify-start border-[1px] border-white rounded-full mt-[10px] pl-[12px] relative w-[200px]">
                <h2 className="text-[40px] font-semibold text-black ml-[12px]">
                  €24*
                </h2>
                <p className="text-black font-semibold text-[15px] ml-[3px]">
                  за сессию
                </p>
              </div>

              <p className="text-black font-bold text-[14px] mt-[20px]">
                С НАМИ ПРОБЛЕМА РЕШАЕТСЯ В РЕАЛЬНЫЕ СРОКИ
              </p>

              <p className="text-[14px] text-black mt-[10px] leading-4">
                Мы работаем по методу когнитивно-поведенческой терапии (КПТ).
                Это один из самых эффективных методов на сегодняшний день: вы
                почувствуете качественные изменения в жизни уже через 8 сессий.
              </p>

              <button className="bg-black rounded-full font-semibold text-[14px] w-[276px] min-h-[42px] mt-[50px] lg:mt-[27px] text-white">
                СТОИМОСТЬ ТАРИФА 24€
              </button>

              <button className="bg-white rounded-full font-semibold text-[14px] w-[276px] min-h-[42px] mt-[10px] text-black">
                Узнать больше
              </button>
            </div>
          </div>
        </div>

        <div className="px-[55px] pt-[95px] lg:flex lg:flex-row lg:justify-center lg:gap-[130px] lg:pt-[250px]">
          <div>
            <h1 className="text-[25px] font-bold text-center lg:leading-[53px] lg:text-[42px] lg:w-[385px] lg:text-left">
              Знаем, как тяжело сделать первый шаг
            </h1>

            <p className="text-[16px] mt-[30px] font-semibold text-center lg:leading-[39px] lg:text-[25px] lg:w-[226px] lg:text-left">
              Хотите, мы сами вам напишем?
            </p>
          </div>
          <div>
            <img
              loading="lazy"
              src="https://static.tildacdn.com/tild6437-6132-4261-b731-353762653032/Asset_1.svg"
              className="w-[266px] mx-auto mt-2 lg:w-[362px] lg:h-[98px]"
            />

            <Feedback />
          </div>
        </div>
      </main>

      {/* Removed as per Pilar's request */}

      <footer className="bg-white text-black border-t-2 lg:border-t-0 border-white/10 p-[15px] lg:pb-[104px] lg:pt-[50px]">
        <div className="lg:flex lg:flex-row-reverse lg:w-[1070px] lg:mx-auto lg:gap-[115px]">
          <ul className="mt-[40px] flex flex-col gap-[20px] text-[14px] font-light lg:text-[18px] lg:whitespace-nowrap">
            <li>Главная страница</li>
            <li>О нас</li>
            <li>Терапия</li>
            <li>Статьи</li>
            <li>Тесты</li>
          </ul>
          <div className="flex flex-row items-center justify-start my-[25px] gap-[25px] lg:hidden">
            <a href="">
              <img
                loading="lazy"
                src="https://static.tildacdn.com/tild3861-3130-4963-b765-363763656635/bx_bxl-instagram_1.svg"
                alt=""
                className="w-[27px] aspect-square scale-[129%]"
              />
            </a>
            <a href="">
              <img
                loading="lazy"
                src="https://static.tildacdn.com/tild6437-3436-4132-a635-366431303666/la_telegram-plane_1.svg"
                className="w-[27px] aspect-square scale-[129%]"
              />
            </a>
          </div>
          <p className="text-[15px] pr-5 font-light mt-[20px] lg:text-[18px]">
            Важный момент. "Freya" — это не скорая психологическая помощь. Если
            у вас серьезные, угрожающие вашей жизни проблемы, которые требуют
            немедленного решения, вам лучше обратиться в{" "}
            <a
              href="http://freyamind.com/freetherapy/"
              className="text-[#666c4b] underline decoration-[#666c4b]"
            >
              какую-либо из этих организаций.
            </a>
            <br />
            <br />
            Регистрация на сайте означает согласие с{" "}
            <a
              href="https://freyamind.com/privacy/"
              className="text-[#666c4b] underline decoration-[#666c4b]"
            >
              пользовательским соглашением.
            </a>
            Политика в отношении обработки и{" "}
            <a
              href="https://freyamind.com/personal/"
              className="text-[#666c4b] underline decoration-[#666c4b]"
            >
              {" "}
              защиты персональных данных{" "}
            </a>
            .
          </p>
          <div className="lg:w-[400px]">
            <img
              loading="lazy"
              src="https://static.tildacdn.com/tild3435-3837-4333-a635-316163306165/Asset_410x.svg"
              className="w-[80px] h-[40px] scale-[129%] mt-[65px] ml-4 lg:scale-100 lg:w-[124px] lg:h-[51px] lg:mt-4 lg:ml-0"
            />
            <p className="mt-[15px] font-light text-[16px] lg:text-[18px] lg:whitespace-nowrap lg:ml-2">
              Freya 2022 ©
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
