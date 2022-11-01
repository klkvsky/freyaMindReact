import { Helmet } from "react-helmet";
//
import { Link } from "react-router-dom";
//
import Navbar from "../components/navbar";
import IndexAbout from "../components/aboutJumbo";
import Feedback from "../components/feedbackComponent";
//
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
//
import Bullet1 from "../assets/Website Assets/About Us Page/Section 2/Bullet 2.1.svg";
import Arrow from "../assets/Website Assets/About Us Page/Section 2/Arrow 2.svg";
import Bullet2 from "../assets/Website Assets/About Us Page/Section 2/Bullet 2.3.svg";
import Bullet3 from "../assets/Website Assets/About Us Page/Section 2/Bullet 2.2.svg";
//
import Item1URL from "../assets/Website Assets/About Us Page/Section 4/S 4 Item 1.svg";
import Item2URL from "../assets/Website Assets/About Us Page/Section 4/S 4 Item 2.svg";
import Item3URL from "../assets/Website Assets/About Us Page/Section 4/S 4 Item 3.svg";
import Item4URL from "../assets/Website Assets/About Us Page/Section 4/S4 Item 4.svg";
//
import Anastasia from "../assets/Website Assets/About Us Page/Section 5/AnastasiaOld.svg";
import Margo from "../assets/Website Assets/About Us Page/Section 5/margoOld.svg";
//
import ins1 from "../assets/Website Assets/Home Page/Section 5/Institution 1.svg";
import ins2 from "../assets/Website Assets/Home Page/Section 5/Institution 2.svg";
import ins3 from "../assets/Website Assets/Home Page/Section 5/Institution 3.svg";
import ins4 from "../assets/Website Assets/Home Page/Section 5/Institution 4.svg";
import ins5 from "../assets/Website Assets/About Us Page/Section 6/Institution 5.svg";
//
import Anastasia1 from "../assets/Website Assets/About Us Page/Section 7/Anastasia Img.svg";
import Bage from "../assets/Website Assets/About Us Page/Section 7/Bage.svg";
//
import footerImage from "../assets/Website Assets/About Us Page/Section 8/wholeImage.svg";
import footerLogo from "../assets/Website Assets/About Us Page/freyaGreenFooterLogo.svg";
//
import { useLocation } from "react-router-dom";
//
import PI from "react-phone-input-2";
const ReactPhoneInput = PI.default ? PI.default : PI;
import "react-phone-input-2/lib/plain.css";

export default function About() {
  function sumbitFunc(e) {
    e.preventDefault();
    console.log("sumbitFunc");
    fbq("track", "Lead");
    isSubmited(true);
    //
    const data = new FormData(e.target);
    fetch("https://sobakipavlova23493.activehosted.com/proc.php", {
      method: "POST",
      body: data,
      mode: "no-cors",
      cache: "no-cache",
    }).catch((error) => console.log("Request failed", error));
  }
  //
  const [submited, isSubmited] = useState(false);
  const location = useLocation();
  //
  // const phoneInput = document.querySelector("input[type=tel]");
  setTimeout(() => {
    const phoneInput = document.querySelector(".react-tel-input .form-control");
    phoneInput?.setAttribute("type", "tel");
    phoneInput?.setAttribute("id", "phone");
    phoneInput?.setAttribute("name", "phone");
  }, 1000);

  return (
    <div className="w-screen overflow-hidden">
      <Helmet>
        <title>О нас</title>
      </Helmet>
      <Navbar />
      <main>
        <IndexAbout />
        <div className="mt-[100px] px-[50px] pb-[90px] lg:pt-[80px] lg:pb-[250px]">
          <h1 className="text-dark-green text-[21px] font-semibold lg:text-center lg:text-[33px] lg:font-bold lg:-ml-[20px]">
            Чем именно полезна такая точка зрения на психику?
          </h1>
          <p className="text-[14px] font-semibold mt-[25.1px] lg:leading-[34px] lg:text-[22px] lg:w-[818px] lg:mx-auto lg:mt-[120px]">
            В процессе терапии можно не только узнать причину тревожных мыслей и
            нерациональных привычек, но и изменить образ жизни, который вас не
            устраивает
          </p>
          <div className="lg:max-w-[900px] lg:mx-auto">
            <h1 className="text-light-green text-[30px] font-bold mt-[60px] lg:text-[40px] lg:mt-[50px]">
              ВМЕСТО
            </h1>
            <div className="w-[230px] h-[3px] bg-light-green lg:w-[444px] lg:h-[6px]" />

            <div className="flex flex-row items-start justify-start mt-[25px] gap-[16px] lg:gap-[10px] lg:mt-[40px]">
              <img
                loading="lazy"
                src={Bullet1}
                className="w-[30px] aspect-square lg:w-[52px]"
              />
              <p className="text-light-green text-[20px] font-bold lg:text-[38px] lg:w-[450px] lg:leading-[48px]">
                «Меня не ценили и обижали в детстве, поэтому сейчас я ни на что
                не способен»
              </p>

              <img
                loading="lazy"
                src={Arrow}
                className="hidden lg:block -mt-[45px] ml-[20px] max-w-[293px] aspect-square"
              />
            </div>
            <h1 className="text-dark-green text-[30px] font-bold mt-[60px] text-right lg:text-[40px] lg:mt-[10px] lg:pr-[215px]">
              ПОЯВИТСЯ
            </h1>
            <div className="w-[230px] h-[3px] bg-dark-green ml-auto mt-[15px] lg:w-[444px] lg:h-[6px] lg:mr-[15px] lg:mt-[0]" />

            <div className="flex flex-row items-start justify-end mt-[25px] gap-[12px] w-fit  ml-auto text-right lg:gap-[20px] lg:-translate-x-[85px] lg:mt-[35px]">
              <img
                loading="lazy"
                src={Bullet2}
                className="w-[30px] aspect-square lg:w-[52px] lg:translate-y-2"
              />
              <p className="text-dark-green w-1/2 text-[20px] font-bold lg:text-[42px] lg:w-[320px] lg:leading-[53px] lg:text-left">
                «Я знаю, что с этим делать».
              </p>
            </div>

            <div className="flex flex-row items-start justify-start mt-[55px] gap-[16px] lg:-translate-y-[200px]">
              <img
                loading="lazy"
                src={Bullet3}
                className="w-[30px] aspect-square lg:w-[52px]"
              />
              <p className="text-black text-[14px] w-4/6 lg:leading-[24px] lg:text-[18px] lg:w-[237px]">
                Мы не признаем ваше мышление правильным или неправильным.
                Скорее, мы называем его адаптивным, функциональным, рациональным
                и наоборот.
              </p>
            </div>

            <p className="text-[14px] font-medium mt-[60px] lg:leading-[34px] lg:text-[22px] lg:-mt-[45px] lg:font-semibold lg:w-[858px] lg:ml-[20px]">
              Под изменением мышления мы имеем в виду переоценку установок,
              избавление от тоннельного мышления, в котором мы видим лишь одну
              сторону ситуации, и, как следствие, постоянно расстраиваемся и
              злимся.
            </p>
          </div>
        </div>
        <div className="bg-[#5d6541] min-h-screen py-[130px] lg:py-[195px]">
          <h1 className="text-light-green text-[22px] font-bold text-center w-4/6 scale-[129%] mx-auto lg:text-[43px] lg:scale-100">
            Рассмотрим разные реакции на одну ситуацию:
          </h1>
          <div className="ml-auto w-[385px] border-[5px] border-white rounded-l-[35px] px-[15px] py-[16px] pr-0 border-r-transparent translate-x-2 mt-[50px] lg:mx-auto lg:border-r-white lg:rounded-[35px] lg:w-[1062px] lg:grid lg:place-items-center lg:mt-[100px]">
            <p className="text-[18px] font-bold text-white w-[90%] text-center leading-[23px] lg:text-[26px] lg:leading-[33px] lg:w-[85%]">
              Обещала поддержать подругу на важном для нее мероприятии, но
              заболела и не смогла прийти.
            </p>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:w-[1085px] lg:mx-auto lg:mt-[50px] lg:gap-[45px]">
            <div>
              <h1 className="text-[#ffcc99] font-semibold text-[23px] ml-[43px] mt-[47px] lg:mt-0 lg:text-[20px]">
                ВИНА:
              </h1>
              <p className="bg-[#ffcc99] text-dark-green font-semibold text-[15.5px] p-[20px] px-[30px] mx-[15px] rounded-3xl leading-[19.35px] mt-[20px] lg:text-[19.5px] lg:font-medium lg:p-[35px] lg:pr-[110px] lg:leading-[23px]">
                Я плохой друг, я же ей обещала, я сильно виновата перед ней. Она
                так рассчитывала на мою поддержку, а я ее подвела
              </p>
            </div>
            <div>
              <h1 className="text-[#c8cea9] text-right font-semibold text-[23px] mr-[43px] mt-[70px] lg:mt-0 lg:text-left lg:text-[20px] lg:mr-0 lg:ml-[40px]">
                СОЖАЛЕНИЕ:
              </h1>
              <p className="bg-[#c8cea9] text-dark-green font-semibold text-[15.5px] p-[20px] pl-[30px] mx-[15px] rounded-3xl leading-[19.35px] mt-[15px] lg:text-[19.5px] lg:font-medium lg:p-[35px] lg:pr-[110px lg:leading-[23px]">
                Мне так жаль, что я не смогла попасть на мероприятие, чтобы
                поддержать мою подругу. Я бы очень хотела, чтобы все сложилось
                иначе.
              </p>
            </div>
          </div>
          <div className="w-[300px] h-[2px] bg-white mx-auto scale-[129%] opacity-60 mt-[66px] mb-[60px] lg:w-[1048px] lg:h-[6px] lg:scale-100 lg:mt-[115px]" />

          <div className="mк-auto w-[385px] border-[5px] border-white rounded-r-[35px] px-[15px] py-[16px] pl-0 border-l-transparent -translate-x-2 mt-[50px] lg:mx-auto lg:border-l-white lg:rounded-[35px] lg:w-[1062px] lg:grid lg:place-items-center lg:mt-[100px]">
            <p className="text-[18px] font-bold text-white w-[90%] text-center leading-[23px] lg:text-[26px] lg:leading-[33px] lg:w-[85%]">
              Я неудачно пошутила на важном собрании.
            </p>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:w-[1085px] lg:mx-auto lg:mt-[50px] lg:gap-[45px]">
            <div>
              <h1 className="text-[#ffcc99] font-semibold text-[23px] ml-[43px] mt-[47px] lg:mt-0 lg:text-[20px]">
                СТЫД:
              </h1>
              <p className="bg-[#ffcc99] text-dark-green font-semibold text-[15.5px] p-[20px] px-[30px] mx-[15px] rounded-3xl leading-[19.35px] mt-[20px] lg:text-[18px] lg:font-medium lg:p-[35px] lg:pr-[105px] lg:leading-[23px]">
                Ужас! Как теперь говорить с коллегами, они думают, что я глупая.
                Как я могла такое допустить. Я полное ничтожество
              </p>
            </div>
            <div>
              <h1 className="text-[#c8cea9] text-right font-semibold text-[23px] mr-[43px] mt-[70px] lg:mt-0 lg:text-left lg:text-[20px] lg:mr-0 lg:ml-[40px]">
                РАЗОЧАРОВАНИЕ:
              </h1>
              <p className="bg-[#c8cea9] text-dark-green font-semibold text-[15.5px] p-[20px] pl-[30px] mx-[15px] rounded-3xl leading-[19.35px] mt-[15px] lg:text-[19px] lg:font-medium lg:p-[35px] lg:pr-[25px] lg:leading-[23px]">
                Неловко получилось, я бы очень хотела, чтобы так не случилось,
                но к сожалению произошло. Что ж, люди допускают ошибки,
                допустила и я.
              </p>
            </div>
          </div>
        </div>

        <h1 className="text-dark-green text-[25px] font-bold w-5/6 text-center mx-auto mt-[100px] lg:text-[41px] lg:mt-[160px]">
          Чем мы можем помочь вам?
        </h1>

        {window.innerWidth < 1024 ? (
          <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoHeight={true}
            pagination={{ clickable: true }}
            className="w-full mb-[150px] lg:w-[1000px] lg:mx-auto"
          >
            <SwiperSlide>
              <img
                loading="lazy"
                src={Item1URL}
                className="h-[90px] aspect-square mx-auto mt-[90px]"
              />
              <h1 className="mt-[50px] text-[28px] font-bold text-center">
                Эмоции и чувства
              </h1>
              <p className="mt-[25px] text-[14px] font-light px-[20px]">
                Задача когнитивно-поведенческой терапии — расширить этот спектр,
                сбалансировать черное и белое, научиться поддерживать баланс
                между стремлениями и стабильностью, обрести желанную
                психологическую гармонию.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                src={Item2URL}
                className="h-[90px] aspect-square mx-auto mt-[90px]"
              />
              <h1 className="mt-[50px] text-[28px] font-bold text-center">
                Знания
              </h1>
              <p className="mt-[25px] text-[14px] font-light px-[20px]">
                Цель терапии — не только избавление от нерациональных убеждений,
                проживание старых кризисов, но становление клиента самому себе
                терапевтом.
                <br />
                <br />В процессе терапии вы научитесь регулировать эмоции,
                принимать весь спектр чувств, безоценочно поддерживать себя и
                других людей и повысите уровень психологической грамотности в
                целом.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                src={Item3URL}
                className="h-[90px] aspect-square mx-auto mt-[90px]"
              />
              <h1 className="mt-[50px] text-[28px] font-bold text-center">
                Самостоятепьность
              </h1>
              <p className="mt-[25px] text-[14px] font-light px-[20px]">
                Постепенно вы станете все более и более независимы от терапии,
                будете самостоятельно замечать неправдивые мысли о себе и мире,
                сможете поддержать себя в этом постоянно изменяющемся мире и
                любых кризисах.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                src={Item4URL}
                className="h-[90px] aspect-square mx-auto mt-[90px]"
              />
              <h1 className="mt-[50px] text-[28px] font-bold text-center">
                Баланс
              </h1>
              <p className="mt-[25px] text-[14px] font-light px-[20px]">
                Станете себе заботливым другом и разумным взрослым, приобретя
                при этом ощущение наполненности жизни.
              </p>
            </SwiperSlide>
          </Swiper>
        ) : (
          <div className="grid grid-cols-2 w-[900px] mx-auto mb-[190px]">
            <div className="w-[350px] flex flex-col items-start justify-start">
              <img
                loading="lazy"
                src={Item1URL}
                className="h-[90px] aspect-square mx-auto mt-[90px] lg:h-[104px]"
              />
              <h1 className="mt-[50px] text-[28px] font-bold text-center lg:text-[35px] lg:mt-[60px]">
                Эмоции и чувства
              </h1>
              <p className="mt-[25px] text-[14px] font-light px-[20px] lg:text-[20px] lg:leading-[25px] lg:font-semibold lg:px-0 lg:mt-[50px]">
                Задача когнитивно-поведенческой терапии — расширить этот спектр,
                сбалансировать черное и белое, научиться поддерживать баланс
                между стремлениями и стабильностью, обрести желанную
                психологическую гармонию.
              </p>
            </div>
            <div className="w-[350px] flex flex-col items-center justify-start">
              <img
                loading="lazy"
                src={Item2URL}
                className="h-[90px] aspect-square mx-auto mt-[90px] lg:h-[104px]"
              />
              <h1 className="mt-[50px] text-[28px] font-bold text-center lg:text-[35px] lg:mt-[60px]">
                Знания
              </h1>
              <p className="mt-[25px] text-[14px] font-light px-[20px] lg:text-[20px] lg:leading-[25px] lg:font-semibold lg:px-0 lg:mt-[50px]">
                Цель терапии — не только избавление от нерациональных убеждений,
                проживание старых кризисов, но становление клиента самому себе
                терапевтом.
                <br />
                <br />В процессе терапии вы научитесь регулировать эмоции,
                принимать весь спектр чувств, безоценочно поддерживать себя и
                других людей и повысите уровень психологической грамотности в
                целом.
              </p>
            </div>
            <div className="w-[350px] flex flex-col items-center justify-start">
              <img
                loading="lazy"
                src={Item3URL}
                className="h-[90px] aspect-square mx-auto mt-[90px] lg:h-[104px]"
              />
              <h1 className="mt-[50px] text-[28px] font-bold text-center lg:text-[35px] lg:mt-[60px]">
                Самостоятепьность
              </h1>
              <p className="mt-[25px] text-[14px] font-light px-[20px] lg:text-[20px] lg:leading-[25px] lg:font-semibold lg:px-0 lg:mt-[50px]">
                Постепенно вы станете все более и более независимы от терапии,
                будете самостоятельно замечать неправдивые мысли о себе и мире,
                сможете поддержать себя в этом постоянно изменяющемся мире и
                любых кризисах.
              </p>
            </div>
            <div className="w-[350px] flex flex-col items-center justify-start">
              <img
                loading="lazy"
                src={Item4URL}
                className="h-[90px] aspect-square mx-auto mt-[90px] lg:h-[104px]"
              />
              <h1 className="mt-[50px] text-[28px] font-bold text-center lg:text-[35px] lg:mt-[60px]">
                Баланс
              </h1>
              <p className="mt-[25px] text-[14px] font-light px-[20px] lg:text-[20px] lg:leading-[25px] lg:font-semibold lg:px-0 lg:mt-[50px]">
                Станете себе заботливым другом и разумным взрослым, приобретя
                при этом ощущение наполненности жизни.
              </p>
            </div>
          </div>
        )}

        <div className="bg-[#e6e6e6] w-full pt-[95px] px-[65px] pb-[110px]">
          <h1 className="text-[25px] text-dark-green font-bold text-center">
            АВТОРЫ ПРОЕКТА
          </h1>
          <div className="lg:w-[805px] lg:mx-auto lg:grid lg:grid-cols-2 lg:gap-[100px]">
            <div className="relative flex flex-col mt-[55px]">
              <img
                loading="lazy"
                src={Anastasia}
                className="w-full lg:h-[350px] lg:w-[350px] lg:object-cover lg:object-top"
              />
              <div className="bg-white pb-[10px] lg:pb-[55px] lg:w-[350px]">
                <h1 className="text-[30px] font-semibold text-center -mt-[200px] lg:mt-[10px] lg:px-[20px]">
                  Анастасия Петрова
                </h1>
                <h2 className="text-[#c8cea9] text-[25px] font-semibold text-center lg:px-[50px]">
                  психолог-консультант
                </h2>
              </div>
              <p className="hidden lg:flex leading-[20px] text-[18px] font-medium text-center w-[350px] mt-[35px]">
                В сферу <br />
                психологии Анастасия <br />
                пришла осознанно, получила степень магистра по специальности
                психологическое консультирование и коррекция. Член Ассоциации
                когнитивно-поведенческих психотерапевтов России.
              </p>
            </div>
            <div className="relative flex flex-col mt-[55px]">
              <img
                loading="lazy"
                src={Margo}
                className="w-full lg:h-[350px] lg:w-[350px] lg:object-cover lg:object-top"
              />
              <div className="bg-white pb-[10px] lg:pb-[55px]">
                <h1 className="text-[30px] font-semibold text-center -mt-[200px] lg:mt-[20px] leading-[38px] lg:px-[20px]">
                  Марго <br /> Хановски
                </h1>
                <h2 className="text-[#c8cea9] text-[25px] font-semibold text-center lg:px-[40px]">
                  клинический психолог
                </h2>
              </div>

              <p className="hidden lg:flex leading-[20px] text-[18px] font-medium text-center w-[350px] mt-[35px]">
                Окончила <br />
                Санкт-Петербургский государственный университет, специалитет по
                клинической психологии, специализация поведенческая психология
                здоровья
              </p>
            </div>
          </div>

          <div className="w-full grid place-content-center lg:my-[90px]">
            <a
              href="https://bystro.freyamind.com/our-therapists"
              target="_blank"
              className="w-[270px] h-[40px] bg-[#5d6541] uppercase text-white rounded-full mt-[40px] ml-[5px] text-[16px] font-bold lg:w-[330px] lg:h-[45px] lg:ml-0 lg:mx-auto grid place-items-center"
            >
              Наши терапевты
            </a>
          </div>
        </div>

        <p className="mt-[100px] px-[18px] lg:pl-[15px] lg:pr-0 text-[20.6px] font-semibold leading-[25.8px] lg:leading-[26px] lg:text-[21px] lg:w-[886px] lg:mx-auto">
          Когнитивно-поведенческая психотерапия признана одним из главных
          способов заботы как о ментальном (душевном), так и о физическом.
          здоровье.
        </p>
        <p className="text-[18px] font-semibold mt-[30px] px-[18px] lg:pl-[15px] lg:pr-0 lg:leading-[20px] lg:text-[16px] lg:w-[886px] lg:mx-auto">
          Данный подход входит в рекомендации и стандарты лечения мировых
          сообществ здравоохранения и гуманитарных наук в целом:
        </p>

        <div className="grid grid-cols-2 grid-items-center w-full mt-[65px] lg:mt-[85px] lg:flex lg:flex-row lg:items-center lg:justify-between lg:w-[1190px] lg:mx-auto mb-[90px]">
          <div className="border-r-[1px] border-b-[1px] border-[#eee] grid grid-items-center p-[10px] lg:border-none lg:relative">
            <img
              loading="lazy"
              src={ins1}
              className="w-4/6 mx-auto my-auto lg:w-[214px] lg:h-[66px]"
            />
          </div>
          <div className="w-[5px] h-[37px] bg-light-green hidden lg:flex" />
          <div className="border-b-[1px] border-[#eee] grid grid-items-center p-[10px] lg:border-none lg:relative">
            <img
              loading="lazy"
              src={ins2}
              className="w-1/2 my-auto mx-auto lg:w-[66px] lg:h-[71px]"
            />
          </div>
          <div className="w-[5px] h-[37px] bg-light-green hidden lg:flex" />
          <div className="border-r-[1px] border-b-[1px] border-[#eee] grid grid-items-center p-[10px] lg:border-none lg:relative">
            <img
              loading="lazy"
              src={ins3}
              className="w-1/2 mx-auto my-auto lg:w-[68px] lg:h-[68px]"
            />
          </div>
          <div className="w-[5px] h-[37px] bg-light-green hidden lg:flex" />
          <div className="border-b-[1px] border-[#eee] grid grid-items-center p-[10px] lg:border-none lg:relative">
            <img
              loading="lazy"
              src={ins4}
              className="w-1/2 my-auto mx-auto lg:w-[170px] lg:h-[65px]"
            />
          </div>
          <div className="w-[5px] h-[37px] bg-light-green hidden lg:flex" />
          <div className="border-r-[1px] border-[#eee] grid grid-items-center p-[10px] lg:border-r-0">
            <img
              loading="lazy"
              src={ins5}
              className="w-1/2 my-auto mx-auto lg:w-[175px] lg:h-[58px]"
            />
          </div>
        </div>

        <div className="bg-[#5d6541] w-full pt-[115px] px-[15px] pb-[110px] lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-[50px] lg:pt-[160px] lg:pb-[100px] relative lg:px-0">
          <img
            loading="lazy"
            src={Anastasia1}
            className="w-[285px] aspect-square mx-auto lg:w-[313px] lg:mx-0 lg:-ml-[100px]"
          />
          <div className="lg:w-[604px]">
            <p className="text-white font-semibold text-[20.6px] leading-[25.8px] mt-[80px] lg:mt-0 lg:text-[20px]">
              Безусловно, в России и СНГ психологическим сообществом также
              активно используется КПТ, однако доступность среди популярных
              онлайн-сервисов психологов, использующих именно
              когнитивно-поведенческий подход и ничего больше, значительно
              меньше, чем в остальном мире.
            </p>

            <p className="text-[18px] font-semibold text-[#c8cea9] mt-[35px] lg:text-[20px] lg:leading-[25px]">
              Нашей миссией является не только предоставление качественной и
              современной психотерапии, но и консультирование на русском языке
              вне зависимости от местоположения.
            </p>
          </div>

          <img
            loading="lazy"
            src={Bage}
            className="absolute top-0 right-[400px] w-[120px] h-[150px] hidden lg:block"
          />
        </div>

        <div className="px-[55px] pt-[95px] lg:flex lg:flex-row lg:justify-center lg:gap-[130px]">
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
              src={footerImage}
              className="w-[266px] mx-auto mt-2 lg:w-[362px] lg:h-[98px]"
            />

            <div>
              {submited && (
                <div
                  className="w-screen h-screen fixed top-0 left-0 z-[500] grid place-items-center"
                  id={`${location.pathname}-success`}
                >
                  <div
                    onClick={() => {
                      isSubmited(false);
                    }}
                    className="w-screen h-screen bg-black/80 fixed top-0 left-0"
                  />
                  <div className="flex flex-col bg-white rounded-[10px] w-96 aspect-video items-center justify-center gap-[15px] p-[25px] relative">
                    <button
                      onClick={() => {
                        isSubmited(false);
                      }}
                      className="absolute top-4 right-4"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-[80px] aspect-square stroke-green-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <h1 className="text-[18px] text-center">
                      Спасибо! Данные успешно отправлены
                    </h1>
                  </div>
                </div>
              )}
              <form
                method="POST"
                id="_form_12_"
                className={`_form _form_12 _inline-form  _dark ${location.pathname}-form`}
                noValidate
                onSubmit={(e) => {
                  sumbitFunc(e);
                }}
              >
                <input type="hidden" name="u" value="12" />
                <input type="hidden" name="f" value="12" />
                <input type="hidden" name="s" />
                <input type="hidden" name="c" value="0" />
                <input type="hidden" name="m" value="0" />
                <input type="hidden" name="act" value="sub" />
                <input type="hidden" name="v" value="2" />
                <input
                  type="hidden"
                  name="or"
                  value="ae67f646fceb719303457ca26c531640"
                />
                <div className="_form-content mt-[50px] w-[300px] flex flex-col gap-[20px] mx-auto lg:w-[362px] ">
                  <div className="_form_element _x54994482 _full_width ">
                    <label htmlFor="fullname" className="_form-label"></label>
                    <div className="_field-wrapper">
                      <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        placeholder="  Имя"
                        required
                        className="border-[1px] w-full border-[#9e9e9e] rounded-[5px] text-[16px] h-[40px] px-[20px] lg:h-[50px]"
                      />
                    </div>
                  </div>
                  <div className="_form_element _x16231362 _full_width ">
                    <label htmlFor="email" className="_form-label"></label>
                    <div className="_field-wrapper">
                      <input
                        type="text"
                        id="email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        name="email"
                        placeholder=" e-mail"
                        required
                        className="border-[1px] w-full border-[#9e9e9e] rounded-[5px] text-[16px] h-[40px] px-[20px] lg:h-[50px]"
                      />
                    </div>
                  </div>
                  <div className="_form_element _x92297975 _full_width ">
                    <label htmlFor="phone" className="_form-label"></label>
                    <div className="_field-wrapper">
                      <ReactPhoneInput
                        country={"ru"}
                        className="rounded-[5px] overflow-hidden lg:bg-red-500 lg:overflow-visible lg:rounded-[15px]"
                        required
                      />
                    </div>
                  </div>
                  <select
                    name="Selectbox"
                    style={{
                      color: "#858585",
                      border: "1px solid #9e9e9e",
                      backgroundColor: "#ffffff",
                      borderRadius: "5px",
                      fontSize: "16px",
                      fontWeight: "400",
                      height: window.innerWidth < 1024 ? "40px" : "50px",
                    }}
                    className="px-[15px] bg-white shadow-none appearance-none _form_element _x61590596 _full_width _clear"
                    id={`${location.pathname}-select`}
                    required
                  >
                    <option value="">Что вас беспокоит?</option>
                    <option value="Взаимоотношения с родителями ">
                      Взаимоотношения с родителями{" "}
                    </option>
                    <option value="Отношения">Отношения</option>
                    <option value="Самореализация ">Самореализация </option>
                    <option value="Самооценка ">Самооценка </option>
                    <option value="Тревожность ">Тревожность </option>
                    <option value="Бессонница">Бессонница</option>
                    <option value="Депрессия ">Депрессия </option>
                    <option value="Помогаем">Помогаем</option>
                    <option value="Зависимость ">Зависимость </option>
                    <option value="Созависимость ">Созависимость </option>
                    <option value="Не понимаю, но нужна помощь">
                      Не понимаю, но нужна помощь
                    </option>
                  </select>
                  <div className="_button-wrapper _full_width">
                    <button
                      id="_form_12_submit"
                      type="submit"
                      className="bg-[#5d6541] text-white text-[14px] font-semibold h-[50px] px-[15px] rounded-full w-full uppercase _submit"
                    >
                      ОСТАВИТЬ ЗАПРОС
                    </button>
                  </div>
                  <div className="_clear-element"></div>
                </div>
                <div
                  className="_form-thank-you"
                  style={{ display: "none" }}
                ></div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white text-black border-t-2 lg:border-t-0 border-white/10 p-[15px] lg:pb-[104px] lg:pt-[50px]">
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
              src={footerLogo}
              className="w-[80px] h-[40px] scale-[129%] mt-[65px] ml-4 lg:scale-100 lg:w-[124px] lg:h-[51px] lg:mt-4 lg:ml-0 "
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
