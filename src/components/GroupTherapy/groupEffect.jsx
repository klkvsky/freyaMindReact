import svg1 from "../../assets/Website Assets/GroupTherapy/Vector1.svg"

export const GroupEffect = () => {
    return (

        <section>
            <h1>Effect</h1>
            <div className="bg-[#343434] w-[90vw] mx-auto h-[782px]">
                <h2 className="font-[Asgard] text-center text-white w-[316px] mx-auto text-4xl" >Эффектив- ность от<p className="font-[Monserrat] ">3</p>сессий</h2>
                <ul>
                    <li>
                        <img src={svg1}/>
                        <p>снизится уровень тревожности</p>
                    </li>
                    <li>
                        <img/>
                        <p>повысится мотивация к изменениям</p>
                    </li>
                    <li>
                        <img/>
                        <p>появится понимание, как жить </p>
                    </li>
                </ul>
                <a href="#">Записаться</a>
                <p>При регистрации вы будете направлены на наш сервис, где осуществляется запись встреч. </p>
            </div>
        </section>
    )
}
