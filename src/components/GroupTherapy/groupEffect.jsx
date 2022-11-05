import svg1 from "../../assets/Website Assets/GroupTherapy/Vector1.svg";
import svg2 from "../../assets/Website Assets/GroupTherapy/Vector2.svg";
import svg3 from "../../assets/Website Assets/GroupTherapy/Vector3.svg"

export const GroupEffect = () => {
    return (

        <section className="mt-[66px] ">
            <div className="bg-[#343434] w-[90vw] mx-auto h-[782px] flex flex-col items-center rounded-[8px] pt-[32px] px-[24px]" >
                <h2 className="font-[Asgard] text-center text-white w-[316px] mx-auto text-4xl" >Эффектив- ность от З сессий</h2>
                <ul className="flex flex-col items-center mt-[40px] justify-between">
                    <li className="flex flex-col items-center mb-[40px]">
                        <img src={svg1}/>
                        <p className="text-white font-[Montserrat] text-xl mt-[16px] text-center">снизится уровень тревожности</p>
                    </li>
                    <li className="flex flex-col items-center mb-[40px]">
                        <img src={svg2}/>
                        <p className="text-white font-[Montserrat] text-xl mt-[16px] text-center">повысится мотивация к изменениям</p>
                    </li>
                    <li className="flex flex-col items-center">
                        <img src={svg3}/>
                        <p className="text-white font-[Montserrat] text-xl mt-[16px] text-center">появится понимание, как жить </p>
                    </li>
                </ul>
                <a href="#" className="bg-[#F4B8A9] w-[316px] h-[56px] text-center mt-[40px] pt-[16px] text-[18px] font-[Montserrat] rounded-[32px]">Записаться</a>
                <p className="text-[#E8E8E8] text-center mt-[40px] text-sm">При регистрации вы будете направлены на наш сервис, где осуществляется запись встреч. </p>
            </div>
        </section>
    )
}
