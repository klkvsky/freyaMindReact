import { Link } from "react-router-dom";

export default function IndexJumbo() {
  return (
    <div className="flex flex-col lg:w-[1200px] lg:mx-auto lg:mt-[70px]">
      <div className="flex flex-row items-center justify-start h-[140px] w-full gap-[18px] cursor-pointer z-50 px-[20px]">
        <Link
          to="/"
          className="cursor-pointer z-50 font-bold text-[42px] text-white"
        >
          О НАС
        </Link>

        <ul className="hidden lg:flex flex-row items-center jusitfy-between uppercase text-[18px] font-light lg:w-[712px] leading-[28px] gap-[45px] ml-auto whitespace-nowrap">
          <Link to="/aboutus">О нас</Link>
          <Link to="/therapy">Цена</Link>
          <Link to="/eatingdisorder">РПП</Link>
          <Link to="/livestream">Онлайн События</Link>
          <Link to="/contactus">Свяжитесь с нами</Link>
        </ul>
      </div>
      <div className="flex flex-row items-end lg:items-center justify-start gap-[18px] lg:mt-[60px]">
        <div className="absolute top-0 left-0 w-full h-full bg-[#CCCC9F]"></div>
        <img
          src="https://thumb.tildacdn.com/tild6563-6637-4461-b132-313733393763/-/format/webp/imagen_2022-06-08_10.png"
          className="w-screen h-[54.8vh] object-cover absolute top-0 left-0 lg:right-0 lg:mx-auto lg:max-w-[1400px] lg:h-[836px]"
        />
        <div className="flex flex-col relative bg-light-green min-h-screen w-full mt-[35.8vh] px-[20px] pb-[125px]">
          <div className="bg-white w-min pl-[39px] pr-[18px] py-[35px] text-[32px] font-bold text-dark-green absolute -top-[80px] right-0 rounded-tl-[40px] leading-[42px]">
            <h1>КОГНИТИВНО-ПОЕВЕДЕНЧЕСКАЯ ТЕРАПИЯ И ВЫ:</h1>
          </div>

          <p className="text-[16px] text-dark-green font-semibold scale-[129%] mt-[160px] w-5/6 mx-auto text-center">
            Почему стоит выбрать терапию вместе с нами?
          </p>

          <div className="bg-dark-green w-[89px] h-[6px] mt-[100px] scale-[129%] ml-[8px]"></div>

          <p className="text-[14px] text-dark-green font-semibold scale-[129%] mt-[55px] w-4/6 ml-[30px]">
            В нашей психотерапевтической практике мы используем один из самых
            эффективных и научно доказанных методов - когнитивно-поведенческую
            психотерапию.
          </p>

          <h1 className="text-dark-green text-[16px] font-medium mt-[110px] border-[1px] border-dark-green w-fit rounded-[100%] scale-[129%] px-[30px] py-[15px] ml-auto mr-[20px]">
            Что это значит?
          </h1>

          <p className="text-[14px] text-dark-green font-medium scale-[129%] mt-[55px] w-9/12 ml-auto mr-[40px] text-right">
            Основа данного подхода — <br /> учение о том, что именно образ
            мышления определяет нашу жизнь. Не сами ситуации расстраивают или
            пугают нас, а то, что мы о них думаем. Именно от наших мыслей
            зависит, какие эмоции мы испытываем, как себя ведем и на что
            опираемся.
          </p>
        </div>
      </div>
    </div>
  );
}
