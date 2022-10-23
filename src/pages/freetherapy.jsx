import { Link } from "react-router-dom";
//
import Navbar from "../components/navbarForContactUs";
import ContactJumbo from "../components/contactJumbo";
import Feedback from "../components/feedbackComponent";

export default function About() {
  return (
    <div className="w-screen overflow-hidden">
      <main className="lg:w-[760px] lg:mx-auto py-[180px]">
        <h1 className="text-black text-[45px] font-bold leading-[70px]">
          Контакты
          <b className="text-[#676C4F] font-bold"> кризисных центров</b>
        </h1>
        <h3 className="text-[16px] font-bold mt-[36px]">
          Неотложная психологическая помощь в Москве:
        </h3>
        <p className="text-[16px] leading-[25px]">
          051 – с городского телефона <br />
          <a
            target="_blank"
            className="text-[#767A60] border-b border-[#767A60]"
            href="tel:8(495)051"
          >
            8 (495) 051{" "}
          </a>{" "}
          – с мобильного телефона
          <br />
          <br />
          «Московская служба психологической помощи населению» Департамента
          социальной защиты населению г. Москвы: <br />
          <a
            target="_blank"
            className="text-[#767A60] border-b border-[#767A60]"
            href="tel:+7(499)173-09-09"
          >
            {" "}
            +7 (499) 173-09-09{" "}
          </a>
          <br />
          <br />
          Экстренная медико-психологическая помощь в кризисных ситуациях: <br />
          <a
            target="_blank"
            className="text-[#767A60] border-b border-[#767A60]"
            href="tel:+7(499)791-20-50"
          >
            {" "}
            +7 (499) 791-20-50{" "}
          </a>{" "}
          <br /> <br />
          «Телефон доверия» экстренной психологической помощи: <br />
          <a
            target="_blank"
            className="text-[#767A60] border-b border-[#767A60]"
            href="tel:+7(495)575-87-70"
          >
            {" "}
            +7 (495) 575-87-70{" "}
          </a>{" "}
          <br /> <br />
          Независимый благотворительный центр помощи пережившим сексуальное
          насилие: <br />
          <a
            target="_blank"
            className="text-[#767A60] border-b border-[#767A60]"
            href="tel:+7(499)901-02-01"
          >
            {" "}
            +7 (499) 901-02-01{" "}
          </a>{" "}
          <br />
          <br />
          «Телефон доверия» по вопросам наркомании, ВИЧ/СПИДа: <br />
          <a
            target="_blank"
            className="text-[#767A60] border-b border-[#767A60]"
            href="tel:+7(495)421-55-55"
          >
            {" "}
            +7 (495) 421-55-55{" "}
          </a>{" "}
          <br /> <br />
          Кризисный центр помощи женщинам и детям: <br />
          <a
            target="_blank"
            className="text-[#767A60] border-b border-[#767A60]"
            href="tel:+7(499)977-20-10"
          >
            {" "}
            +7 (499) 977-20-10{" "}
          </a>{" "}
          (круглосуточно) <br /> <br />
        </p>
      </main>
    </div>
  );
}
