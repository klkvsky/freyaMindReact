import { useId } from "react";
//
import PI from "react-phone-input-2";
const ReactPhoneInput = PI.default ? PI.default : PI;
import "react-phone-input-2/lib/plain.css";

export default function FeedbackComponent(prop) {
  return (
    <div>
      <form
        className="mt-[50px] w-[300px] flex flex-col gap-[20px] mx-auto lg:w-[362px]"
        id={useId()}
      >
        <input
          type="text"
          name="name"
          placeholder="имя"
          className="border-[1px] w-full border-[#9e9e9e] rounded-[5px] text-[16px] h-[40px] px-[20px] lg:h-[50px]"
          id={useId()}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="e-mail"
          className="border-[1px] w-full border-[#9e9e9e] rounded-[5px] text-[16px] h-[40px] px-[20px] lg:h-[50px]"
          id={useId()}
          required
        />
        <ReactPhoneInput
          country={"ru"}
          className="rounded-[5px] overflow-hidden lg:bg-red-500 lg:overflow-visible lg:rounded-[15px]"
          id={useId()}
          required
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
            id={useId()}
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
        )}

        <button
          className="bg-[#5d6541] text-white text-[14px] font-semibold h-[50px] px-[15px] rounded-full w-full uppercase"
          id={'feedbackButton'}
        >
          Оставить запрос
        </button>
      </form>
    </div>
  );
}
