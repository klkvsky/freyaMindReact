import {
  ActiveCampaignInputs,
  handleActiveCampaignSubmit,
} from "active-campaign-react";
import { useForm } from "react-hook-form";
//
import { useState } from "react";
//
import { useLocation } from "react-router-dom";
//
import PI from "react-phone-input-2";
const ReactPhoneInput = PI.default ? PI.default : PI;
import "react-phone-input-2/lib/plain.css";
//
export default function FeedbackComponent(prop) {
  function sumbitFunc() {
    console.log("sumbitFunc");
    fbq("track", "Lead");
    isSubmited(true);
  }
  //
  const [submited, isSubmited] = useState(false);
  const location = useLocation();
  //
  const { register, handleSubmit } = useForm();
  const formId = "_form_6_";
  //
  function onSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.target);
    fetch("https://sobakipavlova23493.activehosted.com/f/embed.php?id=6", {
      method: "POST",
      body: data,
      mode: "no-cors",
    }).catch((error) => console.log("Request failed", error));
  }
  return (
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
        className="mt-[50px] w-[300px] flex flex-col gap-[20px] mx-auto lg:w-[362px]"
        id={`${location.pathname}-form`}
        onSubmit={(e) => {
          e.preventDefault();
          sumbitFunc();
          onSubmit(e);
        }}
      >
        {/* <ActiveCampaignInputs formId={formId} /> */}
        <input
          type="text"
          name="name"
          placeholder="имя"
          className="border-[1px] w-full border-[#9e9e9e] rounded-[5px] text-[16px] h-[40px] px-[20px] lg:h-[50px]"
          id={`${location.pathname}-name`}
          required
          // {...register("name", { required: true })}
        />
        <input
          type="mail"
          name="mail"
          placeholder="e-mail"
          className="border-[1px] w-full border-[#9e9e9e] rounded-[5px] text-[16px] h-[40px] px-[20px] lg:h-[50px]"
          id={`${location.pathname}-mail`}
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          // {...register("email", { required: true })}
        />
        <ReactPhoneInput
          country={"ru"}
          className="rounded-[5px] overflow-hidden lg:bg-red-500 lg:overflow-visible lg:rounded-[15px]"
          id={`${location.pathname}-phone`}
          required
          // {...register("phone", { required: true })}
        />
        {prop.disable != 4 && (
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
            // {...register("troubles", { required: true })}
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
        )}

        <button
          className="bg-[#5d6541] text-white text-[14px] font-semibold h-[50px] px-[15px] roun
          ded-full w-full uppercase"
          id={`${location.pathname}-feedbackButton`}
          type="submit"
        >
          Оставить запрос
        </button>
      </form>
    </div>
  );
}
