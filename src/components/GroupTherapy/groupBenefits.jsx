import benefitsPic from "../../assets/Website Assets/GroupTherapy/Group 630.png"

export const GroupBenefits = () => {
    return (
        <section className="my-[80px] dt:my-[96px]">
            <div className="max-w-[364px] mx-[auto] flex flex-col dt:max-w-[1120px] dt:relative">
                <h1 className="font-[AsgardBold] text-[36px] leading-[36px] text-[#343434] font-normal mb-[40px] -tracking-[.02em] dt:text-[48px] dt:leading-[48px] dt:w-[800px] dt:mb-[32px]">Почему групповая терапия полезна для вас?</h1>
                <p className="text-[18px] leading-7 text-[#000000] font-normal dt:w-[720px] dt:mb-[120px]">В другой стране отличаются культурные традиции, менталитет, ценности и привыкнуть быстро сложно. Даже в спокойной ситуации, когда вы планировали переезд, это стресс. Экспатам вдвойне труднее найти почву под ногами.</p>
                <img src={benefitsPic} alt="pic" className="dt:absolute dt:right-0 dt:top-[142px]"/>
                <p className="text-[18px] leading-7 text-[#000000] font-normal dt:w-[720px]">На&nbsp;групповой терапии мы&nbsp;поможем &laquo;собрать себя&raquo; заново. Вам будет проще:</p>
                <ul className="mt-[40px] flex flex-col items-center dt:flex-row dt:items-baseline dt:justify-between">
                    <li className="px-[20px] py-[16px] rounded-[8px] bg-[#343434] mb-[12px] relative overflow-hidden dt:mr-[14px]">
                        <svg className="absolute z-0 top-0 left-0" width="143" height="81" viewBox="0 0 143 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M-22.8867 72.686L36.932 -32.8766L49.8784 -25.5403C37.4118 -3.54018 45.1402 24.4008 67.1402 36.8674C89.1406 49.3343 117.082 41.606 129.548 19.6059L142.495 26.9422L82.6761 132.505L69.7296 125.169C82.1963 103.168 74.4679 75.2274 52.4675 62.7605C30.4675 50.2938 2.52644 58.0223 -9.94026 80.0223L-22.8867 72.686Z" fill="#F4B8A9"/>
                        </svg>
                        <p className="text-[18px] leading-[23px] text-[#ffffff] font-medium text-center relative z-1">адаптироваться к новому месту проживания</p>
                    </li>
                    <li className="px-[20px] py-[16px] rounded-[8px] bg-[#F3E5D8] mb-[12px] relative overflow-hidden dt:mr-[14px]">
                        <svg className="absolute z-0 bottom-0 right-0" width="128" height="81" viewBox="0 0 128 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M95.8437 19.9281L85.997 54.2302L54.7276 41.1401L74.1061 69.901L44.9576 86.8966L78.2797 89.1196L72.7949 124.274L95.8448 98.025L118.893 124.274L113.409 89.1196L146.73 86.8966L117.582 69.901L136.96 41.1401L105.692 54.2302L95.8437 19.9281ZM95.8437 19.9281L85.997 54.2302L54.7276 41.1401L74.1061 69.901L44.9576 86.8966L78.2797 89.1196L72.7949 124.274L95.8448 98.025L118.893 124.274L113.409 89.1196L146.73 86.8966L117.582 69.901L136.96 41.1401L105.692 54.2302L95.8437 19.9281ZM78.1691 36.4966L95.8437 -25.0698L113.519 36.4966L171.846 12.0788L135.949 65.3564L191.001 97.4571L127.872 101.668L137.79 165.244L95.8437 117.474L53.8979 165.244L63.8149 101.668L0.6875 97.4571L55.7387 65.3564L19.8425 12.0788L78.1691 36.4966Z" fill="#F4B8A9"/>
                        </svg>
                        <p className="text-[18px] leading-[23px] text-[#000000] font-medium text-center relative z-1">выстроить новые отношения с обществом</p>
                    </li>
                    <li className="px-[20px] py-[16px] rounded-[8px] bg-[#343434] relative overflow-hidden">
                        <svg className="absolute z-0 top-[20px] left-[20px]" width="143" height="81" viewBox="0 0 143 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M105.209 104.761L96.4235 79.1404L122.044 70.3549L104.016 17.782L78.3958 26.5673L69.6099 0.946915L17.037 18.9751L25.8226 44.5955L0.202586 53.3811L18.2304 105.954L43.8506 97.1687L52.6362 122.789L105.209 104.761Z" fill="#F4B8A9"/>
                        </svg>
                        <p className="text-[18px] leading-[23px] text-[#ffffff] font-medium text-center relative z-1">научиться поддерживать себя и других</p>
                    </li>
                </ul>
                <button className="mt-[40px] text-[18px] leading-[23px] text-[#343434] font-bold py-[16px] bg-[#F4B8A9] rounded-[32px] w-[100%] dt:w-[364px] dt:absolute dt:top-[232px] dt:left-0">ЗАПИСАТЬСЯ</button>
            </div>
        </section>
    )
}