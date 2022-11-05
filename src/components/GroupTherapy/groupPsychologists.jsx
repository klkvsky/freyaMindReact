import photo1 from "../../assets/Website Assets/GroupTherapy/psychologist1.svg";
import photo2 from "../../assets/Website Assets/GroupTherapy/psychologist2.svg";
import photo3 from "../../assets/Website Assets/GroupTherapy/psychologist3.svg";
import photo4 from "../../assets/Website Assets/GroupTherapy/psychologist4.svg";
import star from "../../assets/Website Assets/GroupTherapy/psychoStar.svg";
import ellipse from "../../assets/Website Assets/GroupTherapy/Ellipse 12.svg"

export const GroupPsychologists = () => {
    return (
        <section className="flex flex-col  pt-[80px] px-[32px] items-center">
            <h2 className="font-[AsgardBold] text-4xl text-left">Психологи</h2>
            <ul className="flex flex-col items-center">
                <li className="mt-[40px] flex flex-col items-center relative">
                    <img src={photo1} className="rounded-[50%]"/>
                    <img src={star} className="absolute left-[90px] top-[3px]"/>
                    <div>
                        <h3 className="bg-[#343434] font-[AsgardBold] w-[364px] h-[96px] mt-[32px] rounded-[8px] text-center pt-[12px] text-[32px] leading-8 text-white -tracking-[.02em]">Екатерина
                            Быстрова</h3>
                        <p className="mt-[16px] text-center font-[Montserrat] text-[16px] leading-[25px] ">Южный федеральный университет,
                            <br/>
                            Ростов-на-Дону
                            <br/>
                            Факультет психологии и педагогики</p>
                        <p className="mt-[32px] bg-[#E8E8E8] text-center font-[Montserrat] py-[16px] px-[24px] font-[Montserrat] text-[18px] leading-[28px] ">«Экспаты этого года испытывают целый комплекс травм: это и вина выжившего, и травма свидетеля, и коллективная вина. На сессиях мы поможем с проработкой повышенной тревожности, разберемся с иррациональными чувствами, которые мешают адаптироваться на новом месте».</p>
                    </div>
                </li>
                <li className="mt-[40px] flex flex-col items-center relative">
                    <img src={photo2} className="rounded-[50%] z-10"/>
                    <img src={ellipse} className="absolute top-[0px] left-[7px] z-0"/>
                    <div>
                        <h3 className="bg-[#343434] font-[AsgardBold] w-[364px] h-[96px] mt-[32px] rounded-[8px] text-center pt-[12px] text-[32px] leading-8 text-white -tracking-[.02em]">Мария Домбровская</h3>
                        <p className="mt-[16px] text-center font-[Montserrat] text-[16px] leading-[25px] ">Южный федеральный университет,
                            <br/>
                            Ростов-на-Дону
                            <br/>
                            Факультет психологии и педагогики</p>
                        <p className="mt-[32px] bg-[#E8E8E8] text-center font-[Montserrat] py-[16px] px-[24px] font-[Montserrat] text-[18px] leading-[28px]">«Я работаю с тревогой, проблемами с самооценкой, страхами. После сессий и домашних работ к вам вернется уверенность в своих силах, будет проще выстраивать личные границы, контролировать эмоции».</p>
                    </div>
                </li>
                <li className="mt-[40px] flex flex-col items-center relative">
                    <img src={photo3} className="rounded-[50%]"/>
                    <img src={star} className="absolute left-[90px] top-[3px]"/>
                    <div>
                        <h3 className="bg-[#343434] font-[AsgardBold] w-[364px] h-[60px] mt-[32px] rounded-[8px] text-center pt-[12px] text-[32px] leading-8 text-white -tracking-[.02em]">Ольга Жукова</h3>
                        <p className="mt-[16px] text-center font-[Montserrat] text-[16px] leading-[25px] ">Южный федеральный университет,
                            <br/>
                            Ростов-на-Дону
                            <br/>
                            Факультет психологии и педагогики</p>
                        <p className="mt-[32px] bg-[#E8E8E8] text-center font-[Montserrat] py-[16px] px-[24px] font-[Montserrat] text-[18px] leading-[28px]">«Сразу хотелось бы подбодрить тех, кому сложно сформулировать запрос. Не переживайте, это нормально! Приходите с тем, что есть: мы разберемся и сформулируем запрос вместе. Главное — желание меняться, а во всем остальном я вам помогу».</p>
                    </div>
                </li>
                <li className="mt-[40px] flex flex-col items-center relative ">
                    <img src={photo4} className="rounded-[50%] z-10"/>
                    <img src={ellipse} className="absolute top-[0px] left-[7px] z-0"/>
                    <div>
                        <h3 className="bg-[#343434] font-[AsgardBold] w-[364px] h-[96px] mt-[32px] rounded-[8px] text-center pt-[12px] text-[32px] leading-8 text-white -tracking-[.02em]">Елена Давлетшина</h3>
                        <p className="mt-[16px] text-center font-[Montserrat] text-[16px] leading-[25px] ">Приамурский государственный университет им. Шолом-Алейхема,
                            Факультет педагогики и психологии</p>
                        <p className="mt-[32px] bg-[#E8E8E8] text-center font-[Montserrat] py-[16px] px-[24px] font-[Montserrat] text-[18px] leading-[28px]">«Я помогу найти причину беспокойств, научу справляться с эмоциями, на сессии освоим техники самопомощи. Работаю с тревогами, паническими атаками, депрессиями и фобиями».</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}
