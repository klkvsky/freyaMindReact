import promoBg from "../../assets/Website Assets/GroupTherapy/pexels-karolina-grabowska-4467687 1.png"
import promoLogo from "../../assets/Website Assets/GroupTherapy/Vector (13).svg"

export const GroupPromo = () => {
    return (
        <div>
            <section className="h-[800px] relative">
                <img 
                    loading="lazy"
                    src={promoBg}
                    className="absolute top-0 w-[100%] h-[800px] object-cover"
                />
                <div className=" flex flex-col justify-between h-[100%]">
                    <div className="mt-[32px] relative self-center max-w-[364px] mx-auto">
                        <img loading="lazy" src={promoLogo} alt="logo" className="w-[114px]"/>
                    </div>
                
                <div className="bg-gradient-to-t from-[#000000] relative">
                    <div className="mb-[40px] relative max-w-[364px] mx-auto">
                        <h1 className="font-[AsgardBold] text-[40px] leading-10 text-white font-bold mb-[8px] -tracking-[.02em]">Группа поддержки для экпатов:</h1>
                        <p className="font-[AsgardNormal] text-[40px] leading-10 text-white font-normal mb-[24px] -tracking-[.02em]">Кто я в новой реальности?</p>
                        <p className="text-[20px] leading-7 text-white font-medium mb-[24px]">3 сессии за 1€</p>
                        <button className="text-[18px] leading-5 text-[#343434] font-bold py-[16px] bg-white rounded-[32px] w-[100%]">Узнать больше</button>
                    </div>
                </div>
                </div>
            </section>
            <div className="max-w-[364px] mx-auto">
                <button className="text-[18px] leading-5 text-[#343434] font-bold py-[12.5px] bg-[#F4B8A9] rounded-[32px] w-[100%] my-[14px] flex items-center justify-center">
                    ОСТАЛОСЬ МЕСТ: 24
                    <svg className="ml-[24px]" width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L9 9L2 16" stroke="#343434" stroke-width="3"/>
                    </svg>    
                </button>
            </div>
        </div>
    )
}