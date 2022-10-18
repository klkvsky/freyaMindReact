import { Link } from "react-router-dom";

export default function IndexJumbo() {
  return (
    // <div className="flex flex-col lg:max-w-[1200px] lg:mx-auto lg:mt-[70px] bg-[#CCCC9F]">
    <div className="flex flex-col lg:px-[256px] lg:pt-[70px] bg-[#CCCC9F]">
      <nav className="flex flex-row items-center justify-start h-[140px] w-full gap-[18px] cursor-pointer z-50 px-[20px]">
        <Link
          to="/"
          className="cursor-pointer z-50 font-bold text-[42px] text-white lg:flex flex-row items-center justify-start gap-[50px] lg:text-[66px]"
        >
          <img loading="lazy" 
            src="https://static.tildacdn.com/tild3533-3535-4537-a338-356262353638/Freya_Logo.svg"
            className="hidden lg:block lg:w-[104px] lg:h-[51px]"
          />
          О НАС
        </Link>

        <ul className="hidden lg:flex flex-row items-center jusitfy-between uppercase text-[18px] font-light lg:w-[712px] leading-[28px] gap-[45px] ml-auto whitespace-nowrap lg:text-white pb-[50px] -mr-[30px]">
          <Link to="/aboutus" className="font-bold">
            О нас
          </Link>
          <Link to="/therapy">Цена</Link>
          <Link to="/eatingdisorder">РПП</Link>
          <Link to="/livestream">Онлайн События</Link>
          <Link to="/contactus">Свяжитесь с нами</Link>
        </ul>
      </nav>
      <div className="flex flex-row items-end lg:items-center justify-start gap-[18px] lg:mt-[60px]">
        <img loading="lazy" 
          src="https://thumb.tildacdn.com/tild6563-6637-4461-b132-313733393763/-/format/webp/imagen_2022-06-08_10.png"
          className="w-screen h-[54.8vh] object-cover absolute top-0 left-0 lg:right-0 lg:mx-auto lg:w-[1400px] lg:h-[836px]"
        />
        <div className="flex flex-col relative bg-light-green lg:bg-transparent w-full mt-[35.8vh] px-[20px] pb-[125px] lg:mt-[470px]">
          <div className="bg-white w-min pl-[39px] pr-[18px] py-[35px] text-[32px] font-bold text-dark-green absolute -top-[80px] right-0 rounded-tl-[40px] leading-[42px] lg:w-[594px] lg:h-[258px] lg:rounded-tl-[80px] lg:text-[40px] lg:pl-[70px] lg:py-[45px] lg:right-[85px] lg:leading-[50px]">
            <h1>КОГНИТИВНО-ПОЕВЕДЕНЧЕСКАЯ ТЕРАПИЯ И ВЫ:</h1>
          </div>
          <p className="text-[16px] text-dark-green font-semibold scale-[129%] mt-[160px] w-5/6 mx-auto text-center lg:scale-100 lg:text-[18px] lg:mt-[115px] lg:ml-[315px]">
            Почему стоит выбрать терапию вместе с нами?
          </p>
          <div className="lg:ml-[60px] lg:flex lg:flex-row lg:items-start lg:justify-start lg:gap-[65px]">
            <div>
              <div className="bg-dark-green w-[89px] h-[6px] mt-[100px] scale-[129%] ml-[8px] lg:w-[88px] lg:scale-100 lg:h-[6px] lg:ml-0 lg:mt-[115px]"></div>

              <p className="text-[14px] text-dark-green font-semibold scale-[129%] mt-[55px] w-4/6 ml-[30px] lg:text-[26px] lg:leading-[40px] lg:scale-100 lg:w-[460px] lg:ml-0 lg:mt-[30px] ">
                В нашей психотерапевтической практике мы используем один из
                самых эффективных и научно доказанных методов -
                когнитивно-поведенческую психотерапию.
              </p>
            </div>
            <div>
              <h1 className="text-dark-green text-[16px] font-medium mt-[110px] border-[1px] border-dark-green w-fit rounded-[100%] scale-[129%] px-[30px] py-[15px] ml-auto mr-[20px] lg:ml-0 lg:scale-100 lg:text-[26px] lg:px-[20px] lg:py-[10px] lg:border-[2px] lg:mt-[150px]">
                Что это значит?
              </h1>

              <p className="text-[14px] text-dark-green font-medium scale-[129%] mt-[55px] w-9/12 ml-auto mr-[40px] text-right lg:ml-[10px] lg:text-left lg:text-[23px] lg:scale-100 lg:w-11/12 lg:leading-[31px] lg:mt-[34px] ">
                Основа данного подхода — <br /> учение о том, что именно образ
                мышления определяет нашу жизнь. Не сами ситуации расстраивают
                или пугают нас, а то, что мы о них думаем. Именно от наших
                мыслей зависит, какие эмоции мы испытываем, как себя ведем и на
                что опираемся.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
