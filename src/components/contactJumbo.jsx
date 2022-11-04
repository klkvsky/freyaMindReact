import { Link } from "react-router-dom";
import FeedbackComponent from "./feedbackComponent";
//
import LogoWhite from "../assets/Website Assets/logo-white.svg";
import JumboImage from "../assets/Website Assets/Contact Us Page/Dr-Anna.svg";
//
import { useState } from "react";
//
import { useLocation } from "react-router-dom";
//
import PI from "react-phone-input-2";
const ReactPhoneInput = PI.default ? PI.default : PI;
import "react-phone-input-2/lib/plain.css";
//
export default function IndexJumbo() {
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
  setTimeout(() => {
    const phoneInput = document.querySelector(".react-tel-input .form-control");
    phoneInput?.setAttribute("type", "tel");
    phoneInput?.setAttribute("id", "phone");
    phoneInput?.setAttribute("name", "phone");
  }, 1000);
  return (
    <div className="flex flex-col lg:w-[1200px] lg:mx-auto lg:mt-[70px] px-[20px]">
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
          {/* <span className="text-[13px] lg:text-[25px] font-bold uppercase w-6/12 lg:w-[228px] leading-[1.35] text-white">
            Свяжитесь <br /> с нами
          </span> */}
        </Link>

        <ul className="hidden lg:flex flex-row items-center jusitfy-between uppercase text-[18px] font-light lg:w-[712px] leading-[28px] gap-[45px] ml-auto whitespace-nowrap text-white">
          <Link
            to="/aboutus"
            className="hover:scale-125 transition-all duration-500"
          >
            О нас
          </Link>
          <Link
            to="/pricing"
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
            className="hover:scale-125 transition-all duration-500 font-bold"
          >
            Свяжитесь с нами
          </Link>
        </ul>
      </nav>
      <div className="flex flex-col items-end lg:items-center justify-start gap-[18px] lg:mt-[60px] lg:max-w-[1556px] lg:mx-auto">
        <img
          loading="lazy"
          src={JumboImage}
          className="w-screen h-[802px] object-cover absolute top-0 left-0 z-0 lg:right-0 lg:mx-auto lg:w-[1556px] lg:h-[835px] lg:object-[50%,10%] bg-neutral-100"
        />

        <div className="flex flex-col z-10 relative mt-[160px] lg:flex-row-reverse lg:gap-[160px] lg:mt-[35px] lg:ml-[130px]">
          <h1 className="text-[30px] font-semibold text-white text-center w-4/6 mx-auto lg:text-[52px] lg:leading-[65px] lg:text-left lg:w-5/12 lg:pt-[20px] lg:pl-[45px]">
            Мы здесь, чтобы помочь вам!
          </h1>
          <div className="-mt-[30px]">
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
                // action="https://sobakipavlova23493.activehosted.com/proc.php"
                id="_form_11_"
                className={`_form _form_11 _inline-form  _dark ${location.pathname}-form`}
                
                onSubmit={(e) => {
                  sumbitFunc(e);
                }}
              >
                <input type="hidden" name="u" value="11" />
                <input type="hidden" name="f" value="11" />
                <input type="hidden" name="s" />
                <input type="hidden" name="c" value="0" />
                <input type="hidden" name="m" value="0" />
                <input type="hidden" name="act" value="sub" />
                <input type="hidden" name="v" value="2" />
                <input
                  type="hidden"
                  name="or"
                  value="a815eba90fc0fe321be4980a6979524c"
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
                    className="px-[15px] bg-white shadow-none appearance-none"
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
                      id="_form_11_submit"
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
      </div>
    </div>
  );
}
