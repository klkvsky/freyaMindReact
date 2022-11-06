import photo1 from "../../assets/Website Assets/GroupTherapy/Mask group (5).png";
import photo2 from "../../assets/Website Assets/GroupTherapy/Mask group (6).png";
import photo3 from "../../assets/Website Assets/GroupTherapy/Mask group (7).png";
import photo4 from "../../assets/Website Assets/GroupTherapy/Mask group (9).png";
import star from "../../assets/Website Assets/GroupTherapy/psychoStar.svg";
import ellipse from "../../assets/Website Assets/GroupTherapy/Ellipse 12.svg"

export const GroupPsychologists = () => {
    return (
        <section className="flex flex-col  mt-[80px] max-w-[364px] mx-[auto] items-center dt:max-w-[1120px]">
            <h2 className="font-[AsgardBold] text-4xl text-start text-[#343434] w-[100%]">Психологи</h2>
            <ul className="flex flex-col items-center dt:flex-row dt:items-start dt:justify-between dt:flex-wrap">
                <li className="mt-[40px] flex flex-col items-center dt:w-[520px]">
                    <div className="relative">
                        <img src={photo1} />
                        <img src={star} className="absolute left-[40px] top-[20px]"/>
                    </div>
                    <div className="w-[100%]">
                        <h3 className="bg-[#343434] font-[AsgardBold] w-[100%] mt-[32px] rounded-[8px] text-center py-[12px] text-[32px] leading-8 text-white -tracking-[.02em] dt:mt-[20px] dt:py-[16px] dt:text-[24px] dt:leading-[26px] dt:tracking-[unset]">Екатерина
                            Быстрова</h3>
                        <p className="mt-[16px] text-center text-[16px] leading-[25px] dt:text-[14px] dt:leading-[21px] dt:font-medium">Южный федеральный университет, Ростов-на-Дону Факультет психологии и педагогики</p>
                        <p className="mt-[32px] bg-[#E8E8E8] text-center py-[16px] px-[24px] text-[18px] leading-[28px] rounded-[8px] dt:leading-[25px] dt:text-[16px]">«Экспаты этого года испытывают целый комплекс травм: это и вина выжившего, и травма свидетеля, и коллективная вина. На сессиях мы поможем с проработкой повышенной тревожности, разберемся с иррациональными чувствами, которые мешают адаптироваться на новом месте».</p>
                    </div>
                </li>
                <li className="mt-[40px] flex flex-col items-center dt:w-[520px]">
                    <div className="relative">
                        <img src={photo2} className="z-10 relative"/>
                        <img src={ellipse} className="absolute top-[30px] left-[8px] z-0"/>
                    </div>
                    <div className="w-[100%]">
                        <h3 className="bg-[#343434] font-[AsgardBold] w-[100%] mt-[32px] rounded-[8px] text-center py-[12px] text-[32px] leading-8 text-white -tracking-[.02em] dt:mt-[20px] dt:py-[16px] dt:text-[24px] dt:leading-[26px] dt:tracking-[unset]">Мария Домбровская</h3>
                        <p className="mt-[16px] text-center text-[16px] leading-[25px] dt:text-[14px] dt:leading-[21px] dt:font-medium">Южный федеральный университет, Ростов-на-Дону Факультет психологии и педагогики</p>
                        <p className="mt-[32px] bg-[#E8E8E8] text-center py-[16px] px-[24px] text-[18px] leading-[28px]  rounded-[8px] dt:h-[182px] dt:leading-[25px] dt:text-[16px] dt:flex dt:items-center">«Я работаю с тревогой, проблемами с самооценкой, страхами. После сессий и домашних работ к вам вернется уверенность в своих силах, будет проще выстраивать личные границы, контролировать эмоции».</p>
                    </div>
                </li>
                <li className="mt-[40px] flex flex-col items-center relative dt:w-[520px]">
                    <div className="relative">
                        <img src={photo3}/>
                        <img src={star} className="absolute left-[40px] top-[20px]"/>
                    </div>
                    <div className="w-[100%]">
                        <h3 className="bg-[#343434] font-[AsgardBold] w-[100%] mt-[32px] rounded-[8px] text-center py-[12px] text-[32px] leading-8 text-white -tracking-[.02em] dt:mt-[20px] dt:py-[16px] dt:text-[24px] dt:leading-[26px] dt:tracking-[unset]">Ольга Жукова</h3>
                        <p className="mt-[16px] text-center text-[16px] leading-[25px] dt:text-[14px] dt:leading-[21px] dt:font-medium">Южный федеральный университет, Ростов-на-Дону психологии и педагогики</p>
                        <p className="mt-[32px] bg-[#E8E8E8] text-center py-[16px] px-[24px] text-[18px] leading-[28px] rounded-[8px] dt:h-[157px] dt:leading-[25px] dt:text-[16px]">«Сразу хотелось бы подбодрить тех, кому сложно сформулировать запрос. Не переживайте, это нормально! Приходите с тем, что есть: мы разберемся и сформулируем запрос вместе. Главное — желание меняться, а во всем остальном я вам помогу».</p>
                    </div>
                </li>
                <li className="mt-[40px] flex flex-col items-center relative dt:w-[520px]">
                    <div className="relative">
                        <img src={photo4} className="relative z-10"/>
                        <img src={ellipse} className="absolute top-[30px] left-[8px] z-0"/>
                    </div>
                    <div>
                        <h3 className="bg-[#343434] font-[AsgardBold] w-[100%] mt-[32px] rounded-[8px] text-center py-[12px] text-[32px] leading-8 text-white -tracking-[.02em] dt:mt-[20px] dt:py-[16px] dt:text-[24px] dt:leading-[26px] dt:tracking-[unset]">Елена Давлетшина</h3>
                        <p className="mt-[16px] text-center text-[16px] leading-[25px] dt:text-[14px] dt:leading-[21px] dt:font-medium">Приамурский государственный университет им. Шолом-Алейхема, Факультет педагогики и психологии</p>
                        <p className="mt-[32px] bg-[#E8E8E8] text-center py-[16px] px-[24px] text-[18px] leading-[28px] rounded-[8px] dt:h-[157px] dt:leading-[25px] dt:text-[16px] dt:flex dt:items-center">«Я помогу найти причину беспокойств, научу справляться с эмоциями, на сессии освоим техники самопомощи. Работаю с тревогами, паническими атаками, депрессиями и фобиями».</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}
