// import { useState, useRef } from "react";
//
import Navbar from "../components/navbar";
import ContactJumbo from "../components/contactJumbo";
import Feedback from "../components/feedbackComponent";

export default function About() {
  return (
    <div className="w-screen overflow-hidden">
      <Navbar />
      <main>
        <ContactJumbo />
      </main>

      <footer className="bg-white text-black border-t-2 border-white/10 p-[15px] mt-[15px]">
        <div className="lg:flex lg:flex-row-reverse lg:w-[1070px] lg:mx-auto lg:gap-[115px]">
          <ul className="mt-[40px] flex flex-col gap-[20px] text-[16.6px] font-light">
            <li>Главная страница</li>
            <li>О нас</li>
            <li>Терапия</li>
            <li>Статьи</li>
            <li>Тесты</li>
          </ul>
          <div className="flex flex-row items-center justify-start my-[25px] gap-[25px] ">
            <a href="">
              <img
                src="https://static.tildacdn.com/tild3861-3130-4963-b765-363763656635/bx_bxl-instagram_1.svg"
                alt=""
                className="w-[27px] aspect-square scale-[129%] "
              />
            </a>
            <a href="">
              <img
                src="https://static.tildacdn.com/tild6437-3436-4132-a635-366431303666/la_telegram-plane_1.svg"
                className="w-[27px] aspect-square scale-[129%]"
              />
            </a>
          </div>
          <p className="text-[16.6px] pr-5 font-light mt-[20px]">
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
            </a>{" "}
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
          <div className="lg:w-[120px]">
            <img
              src="https://static.tildacdn.com/tild3435-3837-4333-a635-316163306165/Asset_410x.svg"
              className="w-[80px] h-[40px] scale-[129%] mt-[65px] ml-4 lg:scale-100 lg:w-[104px] lg:h-[51px] lg:mt-0"
            />
            <p className="mt-[15px] font-light text-[16px] lg:text-[12px]">
              Freya 2022 ©
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
