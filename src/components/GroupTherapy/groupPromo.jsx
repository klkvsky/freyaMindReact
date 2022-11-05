import promoBg from "../../assets/Website Assets/GroupTherapy/pexels-karolina-grabowska-4467687 1.png"
import promoLogo from "../../assets/Website Assets/GroupTherapy/Vector (13).svg"

export const GroupPromo = () => {
    return (
        <div>
            <section className="h-[800px] relative">
                <img 
                    loading="lazy"
                    src={promoBg}
                    className="w-[auto] h-[inherit] absolute top-0 "
                />
                <div className=" flex flex-col justify-between h-[100%]">
                    <div className="mt-[32px] relative self-center max-w-[364px] mx-auto">
                        <img loading="lazy" src={promoLogo} alt="logo" className="w-[114px]"/>
                    </div>
                
                <div className="bg-gradient-to-t from-[#000000] relative">
                    <div className="mb-[40px] relative max-w-[364px] mx-auto">
                        <h1 className="font-[Asgard] text-[40px] leading-10 text-white font-bold mb-[8px]">Группа поддержки для экпатов:</h1>
                        <p className="font-[Asgard] text-[40px] leading-10 text-white font-normal mb-[24px]">Кто я в новой реальности?</p>
                        <p className="text-[20px] leading-7 text-white font-medium mb-[24px]">3 сессии за 1€</p>
                        <button className="text-[18px] leading-5 text-[#343434] font-bold py-[16px] bg-white rounded-[32px] w-[100%]">Узнать больше</button>
                    </div>
                </div>
                </div>
            </section>
            <div className="max-w-[364px] mx-auto">
                <button className="text-[18px] leading-5 text-[#343434] font-bold py-[9.5px] bg-[#F4B8A9] rounded-[32px] w-[100%] my-[14px]">Осталось мест: 24</button>
            </div>
        </div>
    )
}