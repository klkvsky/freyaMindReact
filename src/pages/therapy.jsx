import { Helmet } from "react-helmet";
//
import { Link } from "react-router-dom";
//
import Navbar from "../components/navbar";
import TherapyJumbo from "../components/therapyJumbo";
import Feedback from "../components/feedbackComponent";
//
import FooterImage from "../assets/Website Assets/Price Page/wholeFooterImage.svg";
import footerLogo from "../assets/Website Assets/About Us Page/freyaGreenFooterLogo.svg";

export default function About() {
  return (
    <div className="w-screen overflow-hidden">
      <Helmet>
        <title>Терапия</title>
      </Helmet>
      <Navbar />
      <main>
        <TherapyJumbo />

        <div className="flex flex-col  min-h-screen text-black py-[110px] lg:mt-[700px] mt-[35vh]">
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
                  €58
                </h2>
                <h2 className="text-[40px] font-semibold text-black ml-[12px]">
                  €29*
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

              <a
                href="https://buy.stripe.com/bIYeWS5R58St8M0aFd"
                target="_blank"
                className="bg-black rounded-full font-semibold text-[14px] w-[276px] min-h-[42px] mt-[50px] lg:mt-[50px] text-white grid place-items-center"
              >
                СТОИМОСТЬ ТАРИФА 58€
              </a>
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
                  €49*
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

              <a
                href="https://buy.stripe.com/00g7uqbbpgkVfaodRz"
                target="_blank"
                className="bg-black rounded-full font-semibold text-[14px] w-[276px] min-h-[42px] mt-[50px] lg:mt-[35px] text-white grid place-content-center"
              >
                СТОИМОСТЬ ТАРИФА 196€
              </a>
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
                  €39*
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

              <a
                href="https://buy.stripe.com/00gcOK6V9d8J2nC28J"
                target="_blank"
                className="bg-black rounded-full font-semibold text-[14px] w-[276px] min-h-[42px] mt-[50px] lg:mt-[27px] text-white grid place-items-center"
              >
                СТОИМОСТЬ ТАРИФА 468€
              </a>
              <p className="text-[12px] text-black mt-[10px]">
                ** при оплате 12 сессий
              </p>
            </div>
          </div>

          <p className="text-[14px] font-light w-[310px] mx-auto mt-[55px] lg:text-[18px] lg:w-[558px] leading-5 text-center">
            Чтобы узнать больше, перейдите по ссылке ниже. Мы будем рады
            ответить на все ваши вопросы.
          </p>

          <a
            href="https://t.me/freya_mind_bot"
            target="_blank"
            className="bg-black rounded-full font-semibold text-[14px] w-[276px] min-h-[42px] mt-[20px] text-white uppercase mx-auto grid place-items-center"
          >
            Узнать больше
          </a>

          <div
            style={{ boxShadow: "2px 2px 4px 5px rgba(171,171,171,0.2)" }}
            className="flex flex-col border-[1px] border-white bg-[#ebcf92] shadow-md w-[320px] mx-auto rounded-[15px] px-[20px] pt-[25px] pb-[20px] mt-[45px] lg:mt-[100px] lg:flex-row lg:w-[1019px] lg:h-[210px] lg:justify-between "
          >
            <div className="lg:w-[268px] lg:flex flex-col justify-between">
              <h1 className="text-[22px] font-semibold leading-7 text-white lg:w-5/6">
                ГРУППОВАЯ ТЕРАПИЯ
              </h1>
              <p className="text-[14px] text-black font-semibold leading-4">
                Групповая терапия — мгновенные улучшения в отношениях
              </p>

              <div className="flex flex-row items-center justify-start border-[1px] border-white rounded-full mt-[30px] pl-[12px] relative w-[200px] lg:w-[172px] lg:mt-[10px] lg:pl-[0px] lg:h-[50px]">
                <h2 className="text-[40px] font-semibold text-black ml-[12px]">
                  €25
                </h2>
                <p className="text-black font-semibold text-[15px] ml-[8px]">
                  за <br /> сессию
                </p>
              </div>
            </div>
            <div className="lg:w-[255px]">
              <p className="text-black font-bold text-[14px] mt-[20px]">
                ЗАМЕТНЫЕ УЛУЧШЕНИЯ СОСТОЯНИЯ ЧЕРЕЗ 5-10 ВСТРЕЧ
              </p>

              <p className="text-[14px] text-black mt-[8px] leading-4">
                Улучшить взаимоотношения, научиться выстраивать границы,
                понимать себя в коллективе — лучшее, что может подарить вам
                групповая терапия
              </p>
            </div>
            <div className="lg:w-[276px]">
              <a
                href="https://buy.stripe.com/cN28yufrFgkV9Q43cP"
                target="_blank"
                className="bg-black rounded-full font-semibold text-[14px] w-[276px] min-h-[42px] mt-[50px] lg:mt-[29px] text-white uppercase grid place-items-center"
              >
                Приобрести
              </a>
              <a
                href="https://t.me/freya_mind_bot"
                target="_blank"
                className="bg-white rounded-full font-semibold text-[14px] w-[276px] min-h-[42px] mt-[10px] text-black uppercase grid place-items-center"
              >
                Узнать больше
              </a>
              <p className="text-[12px] text-black mt-[10px] text-center hidden">
                ** при оплате 12 сессий
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#5F6545] pt-[110px] pb-[190px]">
          <div className="flex flex-col items-center lg:items-start lg:flex-row gap-[40px] lg:max-w-[1010px] lg:mx-auto relative">
            <div className="lg:max-w-[281px] relative z-10">
              <h1 className="text-center lg:text-left text-[25px] font-bold uppercase lg:text-[46px] text-white whitespace-nowrap ">
                ДРУГИЕ ПРОДУКТЫ <br /> ФРЕЙЯ
              </h1>
              <p className="text-[16px] text-white w-[281px] mt-[10px] mx-auto">
                Улучшите каждую область жизни вместе с нашими специалистами
              </p>

              <a href="https://t.me/freya_mind_bot" target="_blank"   className="bg-white rounded-full font-semibold text-[14px] w-[276px] min-h-[42px] mt-[20px] text-black uppercase grid place-items-center">
                Узнать больше
              </a>
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
                  €116
                </h2>
                <h2 className="text-[40px] font-semibold text-black ml-[12px]">
                  €58*
                </h2>
                <p className="text-black font-semibold text-[15px] ml-[3px]">
                  за 2 сессии
                </p>
              </div>

              <p className="text-[14px] text-black mt-[10px]">
                кому нужны регулярные встречи с психологом, чтобы решить
                волнующие
              </p>

              <a
                href="https://t.me/freya_mind_bot"
                target="_blank"
                className="bg-black rounded-full font-semibold text-[14px] w-[276px] min-h-[42px] mt-[50px] lg:mt-[50px] text-white grid place-items-center"
              >
                СТОИМОСТЬ ТАРИФА 58€
              </a>
              <a
                href="https://t.me/freya_mind_bot"
                target="_blank"
                className="bg-white rounded-full font-semibold text-[14px] w-[276px] min-h-[42px] mt-[10px] text-black grid place-items-center uppercase"
              >
                Узнать больше
              </a>
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
                  €65*
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

              <a
                href="https://buy.stripe.com/7sIg0WfrF4Cd6DS14L"
                target="_blank"
                className="bg-black rounded-full font-semibold text-[14px] w-[276px] min-h-[42px] mt-[50px] lg:mt-[37px] text-white grid place-items-center"
              >
                СТОИМОСТЬ ТАРИФА 65€
              </a>

              <a
                href="https://t.me/freya_mind_bot"
                target="_blank"
                className="bg-white rounded-full font-semibold text-[14px] w-[276px] min-h-[42px] mt-[10px] text-black grid place-items-center  uppercase uppercase"
              >
                Узнать больше
              </a>
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
              src={FooterImage}
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
                    className="w-[26px] aspect-auto fill-black"
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
                    className="w-[26px] aspect-auto fill-black"
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
              className="text-[#666c4b] underline decoration-[#666c4b]"
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
              src={footerLogo}
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
