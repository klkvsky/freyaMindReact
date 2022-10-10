import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/plain.css";

export default function FeedbackComponent(prop) {
  return (
    <div>
      <form className="mt-[50px] w-[300px] flex flex-col gap-[20px] mx-auto">
        <input
          type="text"
          name="name"
          placeholder="имя"
          className="border-[1px] w-full border-[#9e9e9e] rounded-[5px] text-[16px] h-[40px] px-[20px]"
        />
        <input
          type="text"
          name="name"
          placeholder="e-mail"
          className="border-[1px] w-full border-[#9e9e9e] rounded-[5px] text-[16px] h-[40px] px-[20px]"
        />
        <PhoneInput
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
              height: "40px",
            }}
            className="px-[15px]"
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
            <option value="РПП">РПП</option>
            <option value="Зависимость ">Зависимость </option>
            <option value="Созависимость ">Созависимость </option>
            <option value="Не понимаю, но нужна помощь">
              Не понимаю, но нужна помощь
            </option>
          </select>
        )}

        <button className="bg-[#5d6541] text-white text-[14px] font-semibold h-[50px] px-[15px] rounded-full w-full uppercase">
          Оставить запрос
        </button>
      </form>
    </div>
  );
}
