import { useState } from "react";
//
import Navbar from "../components/navbar";
import Jumbo from "../components/eatingDisorderJumbo";
import Feedback from "../components/feedbackComponent";
//
import { Collapse } from "react-collapse";
//
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
//

export default function About() {
  // const [activeSlide, setActiveSlide] = useState(1);
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const [faq4, setFaq4] = useState(false);
  return (
    <div className="w-screen overflow-hidden">
      <Navbar />
      <main>
        <Jumbo />
        <div className="flex flex-col bg-[#ebebbc] px-[55px] pt-[65px] pb-[65px] mt-[25px]">
          <h1 className="text-[21px] font-bold">Что такое Помогаем?</h1>
          <p className="text-[13px] font-bold mt-[35px]">
            В жизни обычного человека еда может быть топливом, источником
            энергии и удовольствия. При Помогаем эти отношения усложняются,
            становятся не совсем здоровыми.
          </p>
          <p className="text-[13px] font-bold mt-[25px]">
            Еда превращается для человека в центр вселенной, ядро мышления и
            главный фактор для принятия повседневных решений.
          </p>
        </div>
        <div className="flex flex-col pt-[70px] gap-[20px] leading-[19.25px] pb-[80px]">
          <div className="flex flex-row items-center justify-center gap-[15px] pl-[55px] pr-[60px]">
            <img loading="lazy" 
              src="https://static.tildacdn.com/tild6163-3062-4961-b438-656632623833/Group_1.svg"
              className="w-[38.6px] h-[38.6px]"
            />
            <p className="text-[16px] font-bold w-full">
              если вы пропускаете встречу с друзьями, потому что боитесь
              переедания или осуждения;
            </p>
          </div>
          <div className="flex flex-row items-center justify-center gap-[15px] pl-[55px] pr-[60px]">
            <img loading="lazy" 
              src="https://static.tildacdn.com/tild6163-3062-4961-b438-656632623833/Group_1.svg"
              className="w-[38.6px] h-[38.6px]"
            />
            <p className="text-[16px] font-bold w-full">
              если вы часто обращаете внимание на то, как, что и сколько едят
              ваши знакомые;
            </p>
          </div>
          <div className="flex flex-row items-center justify-center gap-[15px] pl-[55px] pr-[60px]">
            <img loading="lazy" 
              src="https://static.tildacdn.com/tild6163-3062-4961-b438-656632623833/Group_1.svg"
              className="w-[38.6px] h-[38.6px]"
            />
            <p className="text-[16px] font-bold w-full">
              если взвешивания и замеры тела из бытового действия перешли в
              разряд навязчивых ритуалов -
            </p>
          </div>
          <h1 className="bg-[#ebebbc] text-[15px] font-bold mt-[65px] mx-[35px] py-2 text-center">
            - ЭТО СТОИТ ОБСУДИТЬ С ТЕРАПЕВТОМ.
          </h1>
        </div>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          className="w-full mb-[75px] lg:w-[1000px] lg:mx-auto"
        >
          <SwiperSlide>
            <img loading="lazy"  src="https://thumb.tildacdn.com/tild3561-3664-4766-a361-373437313533/-/format/webp/SLIDE_1Recurso_14x.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy"  src="https://thumb.tildacdn.com/tild6163-3530-4534-b731-396665336230/-/format/webp/SLIDE_1Recurso_44x.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy"  src="https://thumb.tildacdn.com/tild6164-3937-4538-a233-613166313234/-/format/webp/SLIDE_1Recurso_24x.png" />
          </SwiperSlide>
        </Swiper>

        <div className="flex flex-col items-start justify-start leading-[18.62px]">
          <h1 className="text-[21px] font-bold w-[300px] mx-auto">
            Первые шаги к решению проблемы с Помогаем
          </h1>

          <div className="flex flex-row gap-[15px] pl-[20px] mt-[30px]">
            <div className="flex flex-col">
              <div className="w-[26.6px] aspect-square bg-[#cccc52] rounded-full text-white grid place-items-center text-sm">
                1
              </div>
              <div className="bg-black h-full w-[4px] mx-auto"></div>
            </div>
            <div className="flex flex-col gap-[20px] max-w-[320px]">
              <h4 className="text-[13.3px] font-bold mt-[3px]">
                Мы знаем, как работать с этой проблемой.
              </h4>
              <p className="text-[13.3px] pb-[40px]">
                В последние года психологи могут буквально констатировать
                эпидемию Помогаем в мире. Наши специалисты много работали с такими
                случаями — они умеют создать безопасное комфортное пространство
                и эффективную структуру встреч, после которых вы точно заметите
                изменения.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-[15px] pl-[20px]">
            <div className="flex flex-col">
              <div className="w-[26.6px] aspect-square bg-[#cccc52] rounded-full text-white grid place-items-center text-sm">
                2
              </div>
              <div className="bg-black h-full w-[4px] mx-auto"></div>
            </div>
            <div className="flex flex-col gap-[15px]">
              <h4 className="text-[13.3px] font-bold mt-[3px]">
                С нами проблема решается в реальные сроки.
              </h4>
              <p className="text-[13.3px] pb-[40px] max-w-[320px]">
                Мы работаем по методу когнитивно-поведенческой терапии (КПТ).
                Это один из самых эффективных методов на сегодняшний день. Его
                рекомендуют ВОЗ, Красный крест, ООН и Американская ассоциация
                психологов. Именно благодаря КПТ вы ощутите качественные
                изменения в жизни и прогресс в решении проблемы уже через 10
                сеансов — вовсе не обязательно тратить на терапию годы.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-[15px] pl-[20px]">
            <div className="flex flex-col">
              <div className="w-[26.6px] aspect-square bg-[#cccc52] rounded-full text-white grid place-items-center text-sm">
                3
              </div>
              <div className="bg-black h-full w-[4px] mx-auto"></div>
            </div>
            <div className="flex flex-col gap-[15px]">
              <h4 className="text-[13.3px] font-bold mt-[3px]">
                Мы поможем сформировать новые экологичные установки.
              </h4>
              <p className="text-[13.3px] max-w-[320px]">
                КПТ помогает понять, какие деструктивные установки лежат в
                основе Помогаем, что именно мешает вам жить. Вместе с терапевтом вы
                сможете их обнаружить, оспорить и построить новые — так вы
                сможете более адекватно относится к еде и отношениям со своим
                телом.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-[15px] pl-[20px]">
            <div className="flex flex-col">
              <div className="w-[26.6px] aspect-square bg-[#cccc52] rounded-full text-white grid place-items-center text-sm">
                4
              </div>
            </div>
            <div className="flex flex-col gap-[15px]">
              <h4 className="text-[13.3px] font-bold mt-[3px]">
                С FREYA вы платите только за то, что вам действительно подходит.
              </h4>
              <p className="text-[13.3px] max-w-[320px]">
                Запишитесь на «бесплатное знакомство» — пробный звонок позволит
                вам познакомиться с психотерапевтом, задать все волнующие
                вопросы и понять, как будут проходить ваши встречи в будущем.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-[#EBEBC1] pt-[70px] pb-[45px] mt-[85px]">
          <h1 className="text-[13.2px] font-bold text-center">
            ЗАПИСАТЬСЯ НА БЕСПЛАТНОЕ ЗНАКОМСТВО
          </h1>

          <Feedback disable={4} />
        </div>

        <div className="flex flex-col pt-[70px]">
          <h1 className="text-[23.76px] font-bold text-center">
            Часто задаваемые вопросы:
          </h1>

          <div className="flex flex-col pl-[30px] mt-[85px] pr-[40px]">
            <div
              className="flex flex-row items-center justify-between"
              onClick={() => {
                setFaq1(!faq1);
              }}
            >
              <h1 className="text-[16px] pr-[30px] leading-[1.35] font-bold">
                1) КАК РАСПОЗНАТЬ Помогаем В ПОВСЕДНЕВНОЙ ЖИЗНИ?
              </h1>

              <div
                className={`flex flex-col transition-all duration-300 ${
                  faq1 && "rotate-45"
                }`}
              >
                <div className="bg-[#DEDD8B] w-[24px] h-[2px]" />
                <div className="bg-[#DEDD8B] w-[24px] h-[2px] rotate-90 -translate-y-[1px]" />
              </div>
            </div>

            <Collapse isOpened={faq1}>
              <p className="text-[14px] leading-[1.45] mt-[35px]">
                На появление Помогаем могут влиять как генетические факторы, так и
                стрессовые обстоятельства — например, стресс от смены работы или
                переезда в другую страну. Основное отклонение от нормы состоит в
                том, что все, связанное с едой, для вас на первом месте, а
                остальное лишь прикрепляется следом. Выбор круга общения,
                времени и места приема пищи, посещения или непосещения
                мероприятий — у здорового человека решения этих вопросов не
                отталкиваются от еды. Также стоит обращать внимание на
                навязчивые привычки — например, фанатично считать калории,
                постоянно взвешиваться, следить за тем, кто и сколько ест в
                вашем окружении.
              </p>
            </Collapse>
          </div>
          <div className="flex flex-col pl-[30px] mt-[85px] pr-[40px]">
            <div
              className="flex flex-row items-center justify-between"
              onClick={() => {
                setFaq2(!faq2);
              }}
            >
              <h1 className="text-[16px] pr-[30px] leading-[1.35] font-bold">
                2) ПРАВДА, ЧТО Помогаем НЕВОЗМОЖНО ВЫЛЕЧИТЬ ДО КОНЦА?
              </h1>

              <div
                className={`flex flex-col transition-all duration-300 ${
                  faq2 && "rotate-45"
                }`}
              >
                <div className="bg-[#DEDD8B] w-[24px] h-[2px]" />
                <div className="bg-[#DEDD8B] w-[24px] h-[2px] rotate-90 -translate-y-[1px]" />
              </div>
            </div>

            <Collapse isOpened={faq2}>
              <p className="text-[14px] leading-[1.45] mt-[35px]">
                Важно помнить, что Помогаем — это не навсегда. Проблему можно решить.
                Специалисты «Фрейи» работают по методу когнитивно-поведенческой
                терапии — помогают осознать деструктивные внутренние установки и
                сформировать новые, более объективные и экологичные. Это значит,
                что уже после 10 сеансов вы заметите улучшения в своих
                отношениях с едой и самим собой.
              </p>
            </Collapse>
          </div>
          <div className="flex flex-col pl-[30px] mt-[85px] pr-[40px]">
            <div
              className="flex flex-row items-center justify-between"
              onClick={() => {
                setFaq3(!faq3);
              }}
            >
              <h1 className="text-[16px] pr-[30px] leading-[1.35] font-bold">
                3) КАК ИМЕННО МЫ БУДЕМ РАБОТАТЬ С ПРОБЛЕМОЙ?
              </h1>

              <div
                className={`flex flex-col transition-all duration-300 ${
                  faq3 && "rotate-45"
                }`}
              >
                <div className="bg-[#DEDD8B] w-[24px] h-[2px]" />
                <div className="bg-[#DEDD8B] w-[24px] h-[2px] rotate-90 -translate-y-[1px]" />
              </div>
            </div>

            <Collapse isOpened={faq3}>
              <p className="text-[14px] leading-[1.45] mt-[35px]">
                На первом этапе вас ждут две оценочные сессии. Так терапевт
                сможет получить максимальное количество информации о вас и вашей
                проблеме, вы вместе работаете план будущего лечения, определите
                те самые деструктивные установки, с которыми предстоит работать.
                <br />
                <br />
                Далее вам предстоят регулярные еженедельные встречи — для работы
                с проблемой вы будете вести дневник веса и питания, находить и
                оспаривать деструктивные установки, вырабатывать новые,
                обсуждать ваши эмоции и чувства в процессе, фиксировать
                прогресс. Здесь кроме диалогов специалист может использовать
                копинг-карточки с контраргументами привычных установок,
                советовать авторитетную литературу по теме.
                <br />
                <br />
                Важно понимать, что работа с такой проблемой — это довольно
                глубокая терапия. Здесь нужно будет понять и проработать
                ключевые процессы и механизмы, которые поддерживают Помогаем — какие
                причины/события/люди привели к появлению расстройства. Важным
                шагом в победе над Помогаем станет не только борьба с переоценкой
                формы и веса, но и работа с самооценкой — вместе с терапевтом вы
                найдете точки роста и развития, сможете относиться к себе более
                объективно и гармонично.
              </p>
            </Collapse>
          </div>
          <div className="flex flex-col pl-[30px] mt-[85px] pr-[40px]">
            <div
              className="flex flex-row items-center justify-between"
              onClick={() => {
                setFaq4(!faq4);
              }}
            >
              <h1 className="text-[16px] pr-[30px] leading-[1.35] font-bold">
                4) ЗАЧЕМ НУЖЕН ДНЕВНИК ПИТАНИЯ?
              </h1>

              <div
                className={`flex flex-col transition-all duration-300 ${
                  faq4 && "rotate-45"
                }`}
              >
                <div className="bg-[#DEDD8B] w-[24px] h-[2px]" />
                <div className="bg-[#DEDD8B] w-[24px] h-[2px] rotate-90 -translate-y-[1px]" />
              </div>
            </div>

            <Collapse isOpened={faq4}>
              <p className="text-[14px] leading-[1.45] mt-[35px]">
                Дневник питания помогает не только фиксировать приемы пищи,
                чтобы иметь более объективную картину ситуации, но и помогает
                отслеживать свои эмоции, связанные с едой. Именно так удается
                поймать те самые деструктивные внутренние установки и работать с
                ними. Кроме того, обсуждая записи в дневнике, вы сможете увидеть
                изменения — сложности, красные флажки и, наоборот, прогресс
                терапии.
              </p>
            </Collapse>
          </div>
        </div>
      </main>

      <footer className="bg-white text-black border-t-2 border-white/10 p-[15px] mt-[132px] ">
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
              <img loading="lazy" 
                src="https://static.tildacdn.com/tild3861-3130-4963-b765-363763656635/bx_bxl-instagram_1.svg"
                alt=""
                className="w-[27px] aspect-square scale-[129%] "
              />
            </a>
            <a href="">
              <img loading="lazy" 
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
            <img loading="lazy" 
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
