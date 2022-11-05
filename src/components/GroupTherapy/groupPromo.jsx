import promoBg from "../../assets/Website Assets/GroupTherapy/pexels-karolina-grabowska-4467687 1.png";
import promoBg2 from "../../assets/Website Assets/GroupTherapy/pexels-karolina-grabowska-4467687 2.png";
import promoLogo from "../../assets/Website Assets/GroupTherapy/Vector.png";
import NavBar from "../../components/GroupTherapy/navBarGroup.jsx";
import { Link } from "react-scroll";
import {NavLink} from "react-router-dom";

export const GroupPromo = () => {
    return (
        <div>
            <section className="h-[800px] relative">
                <img
                    loading="lazy"
                    src={promoBg}
                    className="absolute top-0 w-[100%] h-[800px] object-cover dt:hidden"
                />
                <img
                    loading="lazy"
                    src={promoBg2}
                    className="absolute top-0 w-[100%] h-[800px] object-cover hidden dt:block"
                />
                <div className=" flex flex-col justify-between h-[100%] ">
                    <div className="mt-[32px] relative self-center max-w-[364px] mx-auto dt:max-w-[1120px] dt:self-start dt:w-[100%] dt:mt-[70px]">
                        <NavLink to="/"><img loading="lazy" src={promoLogo} alt="logo" className="w-[114px]"/></NavLink>
                        <NavBar/>
                    </div>

                <div className="bg-gradient-to-t from-[#000000] relative dt:from-[#00000070]">
                    <div className="mb-[40px] relative max-w-[364px] mx-auto dt:max-w-[1120px] dt:self-start dt:w-[100%] dt:mb-[130px]">
                        <h1 className="font-[AsgardBold] text-[40px] leading-10 text-white font-bold mb-[8px] -tracking-[.02em] dt:text-[48px] dt:leading-[48px] dt:mb-[10px] dt:max-w-[650px]">Группа поддержки для экпатов:</h1>
                        <p className="font-[AsgardNormal] text-[40px] leading-10 text-white font-normal mb-[24px] -tracking-[.02em] dt:text-[48px] dt:leading-[43px] dt:mb-[28px] dt:max-w-[815px]">Кто я в новой реальности?</p>
                        <p className="text-[20px] leading-7 text-white font-medium mb-[24px] dt:text-[24px] dt:leading-[35px] dt:mb-[32px]">3 сессии за 1€</p>
                        <Link smooth={true} to="reality">
                            <button className="text-[18px] leading-5 text-[#343434] font-bold py-[16px] bg-white rounded-[32px] w-[100%] uppercase dt:w-[364px]">Узнать больше</button>
                        </Link>
                    </div>
                </div>
                </div>
            </section>
            <div className="max-w-[364px] mx-auto flex w-[100%] dt:max-w-[1120px] dt:justify-between dt:items-center">
                <p className="hidden dt:block text-[18px] leading-[25px] text-[#343434] font-bold">УСПЕЙТЕ ЗАНЯТЬ СВОЕ МЕСТО</p>
                <button className="text-[18px] leading-5 text-[#343434] font-bold py-[12.5px] bg-[#F4B8A9] rounded-[32px] w-[100%] my-[14px] flex items-center justify-center dt:w-[291px]">
                    ОСТАЛОСЬ МЕСТ: 24
                    <svg className="ml-[24px]" width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L9 9L2 16" stroke="#343434" strokeWidth="3"/>
                    </svg>

                </button>
            </div>
        </div>
    )
}
