import Navbar from "../components/navbar";
import IndexAbout from "../components/aboutJumbo";
import Feedback from "../components/feedbackComponent";
//
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function About() {
  return (
    <div className="w-screen overflow-hidden">
      <Navbar />
      <main>
        <IndexAbout />
        <div className="mt-[100px] px-[50px] pb-[90px]">
          <h1 className="text-dark-green text-[21px] font-semibold">
            Чем именно полезна такая точка зрения на психику?
          </h1>
          <p className="text-[14px] font-semibold mt-[25.1px]">
            В процессе терапии можно не только узнать причину тревожных мыслей и
            нерациональных привычек, но и изменить образ жизни, который вас не
            устраивает
          </p>
          <h1 className="text-light-green text-[30px] font-bold mt-[60px]">
            ВМЕСТО
          </h1>
          <div className="w-[230px] h-[3px] bg-light-green" />

          <div className="flex flex-row items-start justify-start mt-[25px] gap-[16px]">
            <img
              src="https://static.tildacdn.com/tild3635-3935-4832-a237-366436323961/equisRecurso_7.svg"
              className="w-[30px] aspect-square"
            />
            <p className="text-light-green text-[20px] font-bold">
              «Меня не ценили и обижали в детстве, поэтому сейчас я ни на что не
              способен»
            </p>
          </div>
          <h1 className="text-dark-green text-[30px] font-bold mt-[60px] text-right">
            ПОЯВИТСЯ
          </h1>
          <div className="w-[230px] h-[3px] bg-dark-green ml-auto mt-[15px]" />

          <div className="flex flex-row items-start justify-end mt-[25px] gap-[12px] w-fit  ml-auto text-right">
            <img
              src="https://static.tildacdn.com/tild6239-3965-4861-b532-313133636232/chuloRecurso_5.svg"
              className="w-[30px] aspect-square"
            />
            <p className="text-dark-green w-1/2 text-[20px] font-bold">
              «Я знаю, что с этим делать».
            </p>
          </div>

          <div className="flex flex-row items-start justify-start mt-[55px] gap-[16px]">
            <img
              src="https://static.tildacdn.com/tild6133-3538-4066-b136-336431613766/exclamacion_Recurso_.svg"
              className="w-[30px] aspect-square"
            />
            <p className="text-black text-[14px] w-4/6">
              Мы не признаем ваше мышление правильным или неправильным. Скорее,
              мы называем его адаптивным, функциональным, рациональным и
              наоборот.
            </p>
          </div>

          <p className="text-[14px] font-medium mt-[60px]">
            Под изменением мышления мы имеем в виду переоценку установок,
            избавление от тоннельного мышления, в котором мы видим лишь одну
            сторону ситуации, и, как следствие, постоянно расстраиваемся и
            злимся.
          </p>
        </div>
        <div className="bg-[#5d6541] min-h-screen py-[130px]">
          <h1 className="text-light-green text-[22px] font-bold text-center w-4/6 scale-[129%] mx-auto">
            Рассмотрим разные реакции на одну ситуацию:
          </h1>
          <div className="ml-auto w-[385px] border-[5px] border-white rounded-l-[35px] px-[15px] py-[16px] pr-0 border-r-transparent translate-x-2 mt-[50px]">
            <p className="text-[18px] font-bold text-white w-[90%] text-center leading-[23px]">
              Обещала поддержать подругу на важном для нее мероприятии, но
              заболела и не смогла прийти.
            </p>
          </div>
          <h1 className="text-[#ffcc99] font-semibold text-[23px] ml-[43px] mt-[47px]">
            ВИНА:
          </h1>
          <p className="bg-[#ffcc99] text-dark-green font-semibold text-[15.5px] p-[20px] px-[30px] mx-[15px] rounded-3xl leading-[19.35px] mt-[20px]">
            Я плохой друг, я же ей обещала, я сильно виновата перед ней. Она так
            рассчитывала на мою поддержку, а я ее подвела
          </p>
          <h1 className="text-[#c8cea9] text-right font-semibold text-[23px] mr-[43px] mt-[70px]">
            СОЖАЛЕНИЕ:
          </h1>
          <p className="bg-[#c8cea9] text-dark-green font-semibold text-[15.5px] p-[20px] pl-[30px] mx-[15px] rounded-3xl leading-[19.35px] mt-[15px]">
            Мне так жаль, что я не смогла попасть на мероприятие, чтобы
            поддержать мою подругу. Я бы очень хотела, чтобы все сложилось
            иначе.
          </p>

          <div className="w-[300px] h-[2px] bg-white mx-auto scale-[129%] opacity-60 mt-[66px] mb-[60px]" />

          <div className="mк-auto w-[385px] border-[5px] border-white rounded-r-[35px] px-[15px] py-[16px] pl-0 border-l-transparent -translate-x-2 mt-[50px]">
            <p className="text-[18px] font-bold text-white w-[90%] text-center leading-[23px]">
              Я неудачно пошутила на важном собрании.
            </p>
          </div>
          <h1 className="text-[#ffcc99] font-semibold text-[23px] ml-[43px] mt-[47px]">
            СТЫД:
          </h1>
          <p className="bg-[#ffcc99] text-dark-green font-semibold text-[15.5px] p-[20px] px-[30px] mx-[15px] rounded-3xl leading-[19.35px] mt-[20px]">
            Ужас! Как теперь говорить с коллегами, они думают, что я глупая. Как
            я могла такое допустить. Я полное ничтожество
          </p>
          <h1 className="text-[#c8cea9] text-right font-semibold text-[23px] mr-[43px] mt-[70px]">
            РАЗОЧАРОВАНИЕ:
          </h1>
          <p className="bg-[#c8cea9] text-dark-green font-semibold text-[15.5px] p-[20px] pl-[30px] mx-[15px] rounded-3xl leading-[19.35px] mt-[15px]">
            Неловко получилось, я бы очень хотела, чтобы так не случилось, но к
            сожалению произошло. Что ж, люди допускают ошибки, допустила и я.
          </p>
        </div>

        <h1 className="text-dark-green text-[25px] font-bold w-5/6 text-center mx-auto mt-[100px]">
          Чем мы можем помочь вам?
        </h1>

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
              src="https://static.tildacdn.com/tild3064-6165-4733-b534-613930366161/1.svg"
              className="h-[90px] aspect-square mx-auto mt-[90px]"
            />
            <h1 className="mt-[50px] text-[28px] font-bold text-center">
              Эмоции и чувства
            </h1>
            <p className="mt-[25px] text-[14px] font-light px-[20px]">
              Задача когнитивно-поведенческой терапии — расширить этот спектр,
              сбалансировать черное и белое, научиться поддерживать баланс между
              стремлениями и стабильностью, обрести желанную психологическую
              гармонию.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static.tildacdn.com/tild3834-3566-4861-b431-363235636533/2.svg"
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
              src="https://static.tildacdn.com/tild3035-3465-4864-b237-643161393233/3.svg"
              className="h-[90px] aspect-square mx-auto mt-[90px]"
            />
            <h1 className="mt-[50px] text-[28px] font-bold text-center">
              Самостоятепьность
            </h1>
            <p className="mt-[25px] text-[14px] font-light px-[20px]">
              Постепенно вы станете все более и более независимы от терапии,
              будете самостоятельно замечать неправдивые мысли о себе и мире,
              сможете поддержать себя в этом постоянно изменяющемся мире и любых
              кризисах.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://static.tildacdn.com/tild3031-3637-4334-a461-346530613661/4.svg"
              className="h-[90px] aspect-square mx-auto mt-[90px]"
            />
            <h1 className="mt-[50px] text-[28px] font-bold text-center">
              Баланс
            </h1>
            <p className="mt-[25px] text-[14px] font-light px-[20px]">
              Станете себе заботливым другом и разумным взрослым, приобретя при
              этом ощущение наполненности жизни.
            </p>
          </SwiperSlide>
        </Swiper>

        <div className="bg-[#e6e6e6] w-full min-h-screen pt-[95px] px-[65px] pb-[110px]">
          <h1 className="text-[25px] text-dark-green font-bold text-center">
            АВТОРЫ ПРОЕКТА
          </h1>

          <div className="relative flex flex-col mt-[55px]">
            <img
              src="https://static.tildacdn.com/tild3833-3936-4464-a239-393036623066/Anastasia.svg"
              className="h-[245px] aspect-square object-none object-top"
            />
            <div className="bg-white pb-[55px]">
              <h1 className="text-[30px] font-semibold text-center mt-[20px]">
                Анастасия Петрова
              </h1>
              <h2 className="text-[#c8cea9] text-[25px] font-semibold text-center">
                психолог-консультант
              </h2>
            </div>
          </div>
          <div className="relative flex flex-col mt-[55px]">
            <img
              src="https://static.tildacdn.com/tild3234-6162-4439-a664-316135393363/Margo.svg"
              className="h-[245px] aspect-square object-none object-top"
            />
            <div className="bg-white pb-[55px]">
              <h1 className="text-[30px] w-11/12 mx-auto font-semibold text-center mt-[20px]">
                Марго Хановски
              </h1>
              <h2 className="text-[#c8cea9] text-[25px] font-semibold text-center">
                клинический психолог
              </h2>
            </div>
          </div>
        </div>

        <p className="mt-[100px] pl-[15px] text-[20.6px] font-semibold leading-[25.8px]">
          Когнитивно-поведенческая психотерапия признана одним из главных
          способов заботы как о ментальном (душевном), так и о физическом.
          здоровье.
        </p>
        <p className="text-[18px] font-semibold mt-[30px] pl-[15px]">
          Данный подход входит в рекомендации и стандарты лечения мировых
          сообществ здравоохранения и гуманитарных наук в целом:
        </p>

        <div className="grid grid-cols-2 grid-items-center w-full mt-[65px] lg:mt-[185px] lg:flex lg:flex-row lg:items-center lg:justify-between lg:w-[1190px] lg:mx-auto mb-[90px]">
          <div className="border-r-[1px] border-b-[1px] border-[#eee] grid grid-items-center p-[10px] lg:border-none lg:relative">
            <img
              src="https://static.tildacdn.com/tild3233-3636-4238-b839-303862633863/omsRecurso_1.svg"
              className="w-4/6 mx-auto my-auto lg:w-[330px] lg:h-[100px]"
            />
          </div>
          <div className="w-[5px] h-[80px] bg-light-green hidden lg:flex" />
          <div className="border-b-[1px] border-[#eee] grid grid-items-center p-[10px] lg:border-none lg:relative">
            <img
              src="https://static.tildacdn.com/tild6631-3766-4465-b933-623136653464/cruzRecurso_2.svg"
              className="w-1/2 my-auto mx-auto lg:w-[101px] lg:h-[109px]"
            />
          </div>
          <div className="w-[5px] h-[80px] bg-light-green hidden lg:flex" />
          <div className="border-r-[1px] border-b-[1px] border-[#eee] grid grid-items-center p-[10px] lg:border-none lg:relative">
            <img
              src="https://static.tildacdn.com/tild6365-6433-4363-b932-646663363464/onuRecurso_5.svg"
              className="w-1/2 mx-auto my-auto lg:w-[108px] lg:h-[108px]"
            />
          </div>
          <div className="w-[5px] h-[80px] bg-light-green hidden lg:flex" />
          <div className="border-b-[1px] border-[#eee] grid grid-items-center p-[10px] lg:border-none lg:relative">
            <img
              src="https://static.tildacdn.com/tild6166-3262-4761-a166-313565383861/apa_2Recurso_4.svg"
              className="w-1/2 my-auto mx-auto lg:w-[260px] lg:h-[100px]"
            />
          </div>
          <div className="border-r-[1px] border-[#eee] grid grid-items-center p-[10px] lg:hidden lg:border-none">
            <img
              src="https://static.tildacdn.com/tild6661-6534-4139-b963-346265643561/apaRecurso_3.svg"
              className="w-1/2 my-auto mx-auto"
            />
          </div>
        </div>

        <div className="bg-[#5d6541] w-full min-h-screen pt-[115px] px-[15px] pb-[110px]">
          <img
            src="https://static.tildacdn.com/tild3532-3737-4839-b939-333561393765/anasRecurso_7.svg"
            className="w-[285px] aspect-square mx-auto"
          />

          <p className="text-white font-semibold text-[20.6px] leading-[25.8px] mt-[80px]">
            Безусловно, в России и СНГ психологическим сообществом также активно
            используется КПТ, однако доступность среди популярных
            онлайн-сервисов психологов, использующих именно
            когнитивно-поведенческий подход и ничего больше, значительно меньше,
            чем в остальном мире.
          </p>

          <p className="text-[18px] font-semibold text-[#c8cea9] mt-[35px]">
            Нашей миссией является не только предоставление качественной и
            современной психотерапии, но и консультирование на русском языке вне
            зависимости от местоположения.
          </p>
        </div>

        <div className="px-[55px] pt-[95px]">
          <h1 className="text-[25px] font-bold text-center">
            Знаем, как тяжело сделать первый шаг
          </h1>

          <p className="text-[16px] mt-[30px] font-semibold text-center">
            Хотите, мы сами вам напишем?
          </p>
          <img
            src="https://static.tildacdn.com/tild3738-6134-4634-a165-376139306164/logo_Recurso_10.svg"
            className="w-[266px] mx-auto mt-2"
          />
        </div>

        <Feedback />
      </main>

      <footer className="bg-white text-black border-t-2 border-white/10 p-[15px] mt-[62px]">
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
