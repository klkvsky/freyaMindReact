import svg1 from "../../assets/Website Assets/GroupTherapy/Vector1.svg";
import svg2 from "../../assets/Website Assets/GroupTherapy/Vector2.svg";
import svg3 from "../../assets/Website Assets/GroupTherapy/Vector3.svg"

export const GroupEffect = () => {
    return (

        <section className="mt-[66px] dt:my-[96px]">
            <div className="bg-[#343434] max-w-[364px] mx-auto flex flex-col items-center rounded-[8px] py-[32px] px-[24px] dt:max-w-[1120px] dt:py-[56px] dt:px-[80px] dt:relative dt:items-start" >
                <h2 className="font-[AsgardBold] text-center text-white w-[316px] text-4xl -tracking-[.02em] break-words dt:text-start dt:w-[400px] dt:mt-[40px]">Эффективность от З сессий</h2>
                <ul className="flex flex-col items-center mt-[40px] justify-between dt:absolute dt:top-[10px] dt:right-[120px]">
                    <li className="flex flex-col items-center mb-[40px] dt:mb-[32px]">
                        <img src={svg1}/>
                        <p className="text-white text-xl mt-[16px] text-center font-semibold uppercase tracking-[.02em]">снизится уровень тревожности</p>
                    </li>
                    <li className="flex flex-col items-center mb-[40px] dt:mb-[32px] dt:w-[400px]">
                        <img src={svg2}/>
                        <p className="text-white text-xl mt-[16px] text-center font-semibold uppercase tracking-[.02em]">повысится мотивация к изменениям</p>
                    </li>
                    <li className="flex flex-col items-center">
                        <img src={svg3}/>
                        <p className="text-white text-xl mt-[16px] text-center font-semibold uppercase tracking-[.02em]">появится понимание, как жить </p>
                    </li>
                </ul>
                <a href="#" className="text-[18px] leading-5 text-[#343434] font-bold py-[16px] bg-[#F4B8A9] uppercase rounded-[32px] w-[100%] flex items-center justify-center mt-[40px] dt:w-[364px] dt:mt-[48px]">Записаться</a>
                <p className="text-[#E8E8E8] text-center mt-[40px] text-sm font-normal dt:w-[400px] dt:mt-[20px] dt:text-start dt:mb-[40px]">При регистрации вы будете направлены на наш сервис, где осуществляется запись встреч.</p>
            </div>
        </section>
    )
}
