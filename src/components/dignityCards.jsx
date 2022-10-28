import React from "react";

export default function DignityCards(props) {

    const openPopup = () => {
        props.openPopup(true);
    }

    return (
        <section className="cards-container">
            <div className="wrapper">
                <div className="cards">
                    <div className="card">
                        <div className="front front1">
                            <div className="card__date">
                                <svg width="171" height="27" viewBox="0 0 171 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M58.9143 1.71457V21.7178H51.9851V14.7738H39.9293V21.7178H33V1.71457H39.9293V9.45869H51.9851V1.71457H58.9143Z" fill="black"/>
                                    <path d="M71.2956 22.1465C69.0046 22.1465 67.0423 21.8512 65.4085 21.2606C63.7748 20.651 62.5261 19.7842 61.6622 18.6602C60.7984 17.5362 60.3665 16.1836 60.3665 14.6024C60.3665 12.202 61.3242 10.3445 63.2396 9.03004C65.155 7.69649 67.8404 7.02972 71.2956 7.02972C73.5866 7.02972 75.5489 7.33453 77.1827 7.94415C78.8352 8.53473 80.0934 9.40153 80.9572 10.5446C81.821 11.6876 82.2529 13.0497 82.2529 14.631C82.2529 16.1931 81.821 17.5362 80.9572 18.6602C80.0934 19.7842 78.8352 20.651 77.1827 21.2606C75.5489 21.8512 73.5866 22.1465 71.2956 22.1465ZM66.6761 14.6024C66.6761 15.6311 67.0798 16.4313 67.8873 17.0028C68.6948 17.5743 69.8309 17.8601 71.2956 17.8601C72.7416 17.8601 73.8683 17.5743 74.6757 17.0028C75.502 16.4313 75.9151 15.6311 75.9151 14.6024C75.9151 13.5546 75.5114 12.7449 74.7039 12.1734C73.8964 11.5828 72.7603 11.2876 71.2956 11.2876C69.8309 11.2876 68.6948 11.5828 67.8873 12.1734C67.0798 12.7449 66.6761 13.5546 66.6761 14.6024Z" fill="black"/>
                                    <path d="M96.7051 21.7178V14.9739L89.4942 21.7178H83.1001L87.9731 17.1457C86.4521 16.8218 85.2878 16.2503 84.4803 15.4311C83.6729 14.6119 83.2691 13.5927 83.2691 12.3734C83.2691 10.7922 83.8982 9.58251 85.1563 8.74428C86.4333 7.887 88.3017 7.45836 90.7617 7.45836H102.958V21.7178H96.7051ZM89.5787 12.7449C89.5787 13.2593 89.7571 13.6594 90.1139 13.9451C90.4707 14.2309 90.9495 14.3738 91.5504 14.3738H96.7051V11.2018H91.5504C90.9495 11.2018 90.4707 11.3447 90.1139 11.6305C89.7571 11.8972 89.5787 12.2687 89.5787 12.7449Z" fill="black"/>
                                    <path d="M105.388 8.57283C105.388 6.32484 105.801 4.5055 106.627 3.11479C107.453 1.72409 108.984 1.02874 111.219 1.02874C113.641 1.02874 115.829 0.952537 117.782 0.800131C119.753 0.628674 121.753 0.361964 123.781 0L124.486 5.74379C122.683 6.12481 120.692 6.40104 118.514 6.5725C116.336 6.72491 113.725 6.80111 110.683 6.80111C109.613 6.80111 108.787 6.90589 108.205 7.11545C107.622 7.325 107.191 7.66792 106.909 8.14419C106.646 8.62045 106.477 9.29675 106.402 10.1731L106.346 10.716L106.12 13.345H106.346C106.477 12.221 106.984 11.2495 107.867 10.4303C108.749 9.59204 109.979 8.95384 111.557 8.51567C113.153 8.05846 115.021 7.82985 117.162 7.82985C120.467 7.82985 122.965 8.37279 124.655 9.45869C126.363 10.5255 127.218 12.2401 127.218 14.6024C127.218 17.1171 126.373 19.0126 124.683 20.289C122.993 21.5464 120.204 22.175 116.317 22.175C112.411 22.175 109.604 21.5464 107.895 20.289C106.205 19.0126 105.369 17.1171 105.388 14.6024V8.57283ZM111.895 14.8596C111.895 15.9074 112.289 16.6884 113.078 17.2028C113.866 17.7172 114.984 17.9744 116.43 17.9744C117.951 17.9744 119.077 17.7267 119.81 17.2314C120.561 16.717 120.936 15.9264 120.936 14.8596C120.936 13.7927 120.561 13.0116 119.81 12.5163C119.077 12.002 117.96 11.7448 116.458 11.7448C115.012 11.7448 113.885 12.002 113.078 12.5163C112.289 13.0307 111.895 13.8118 111.895 14.8596Z" fill="black"/>
                                    <path d="M128.398 7.45836H132.961L134.454 13.0878H134.707C134.858 11.2399 135.562 9.77302 136.82 8.68713C138.078 7.58219 139.768 7.02972 141.89 7.02972C144.576 7.02972 146.641 7.68697 148.087 9.00147C149.533 10.316 150.256 12.1829 150.256 14.6024C150.256 17.0218 149.561 18.8888 148.172 20.2033C146.801 21.5178 144.838 22.175 142.285 22.175C140.069 22.175 138.304 21.6511 136.989 20.6034C135.675 19.5365 134.914 18.022 134.707 16.0598H134.482L134.679 20.7462V26.29H128.398V7.45836ZM134.905 14.6024C134.905 15.6883 135.327 16.5265 136.172 17.1171C137.036 17.6886 138.247 17.9744 139.806 17.9744C141.139 17.9744 142.162 17.6886 142.876 17.1171C143.608 16.5265 143.975 15.6883 143.975 14.6024C143.975 13.5165 143.608 12.6783 142.876 12.0877C142.144 11.4971 141.111 11.2018 139.778 11.2018C138.219 11.2018 137.017 11.4971 136.172 12.0877C135.327 12.6783 134.905 13.5165 134.905 14.6024Z" fill="black"/>
                                    <path d="M164.747 21.7178V14.9739L157.536 21.7178H151.142L156.015 17.1457C154.494 16.8218 153.329 16.2503 152.522 15.4311C151.715 14.6119 151.311 13.5927 151.311 12.3734C151.311 10.7922 151.94 9.58251 153.198 8.74428C154.475 7.887 156.343 7.45836 158.803 7.45836H171V21.7178H164.747ZM157.62 12.7449C157.62 13.2593 157.799 13.6594 158.156 13.9451C158.512 14.2309 158.991 14.3738 159.592 14.3738H164.747V11.2018H159.592C158.991 11.2018 158.512 11.3447 158.156 11.6305C157.799 11.8972 157.62 12.2687 157.62 12.7449Z" fill="black"/>
                                    <path d="M2.29238 18.3579H21V21.9749C20.8965 21.9836 20.791 22 20.6865 22H0.65121C0.0079713 22 0.00701549 22 0.00701549 21.3314C0.00701549 20.3184 0.0194769 19.3054 0.000304392 18.2933C-0.006406 17.9199 0.0961674 17.7241 0.473867 17.5871C3.38426 16.5258 6.2496 15.3681 8.95101 13.8302C10.1071 13.1732 11.2038 12.4322 12.1317 11.4568C12.8403 10.7319 13.3331 9.82191 13.5543 8.82974C13.8774 7.36134 13.0213 6.05406 11.3821 5.52439C9.30282 4.84905 7.16988 4.81528 5.03406 5.09314C3.60379 5.27934 2.19173 5.59869 0.720235 5.86497C0.682848 5.4395 0.63012 4.9378 0.596568 4.43515C0.548637 3.72989 0.529468 3.02271 0.469075 2.31939C0.443192 2.02995 0.564937 1.90356 0.816097 1.85339C1.94057 1.62859 3.05641 1.31407 4.19238 1.20119C5.73221 1.04003 7.28052 0.975584 8.82831 1.00824C11.6831 1.08639 14.5024 1.45204 17.0313 2.9378C19.0444 4.12449 20.2638 5.83215 20.1104 8.29139C20.0356 9.50412 19.5218 10.549 18.7405 11.4559C17.6141 12.7622 16.2059 13.7 14.7018 14.4998C11.8154 16.0338 8.71711 16.9455 5.5383 17.6102C4.49339 17.8292 3.43699 17.9904 2.38633 18.1804C2.34798 18.1872 2.31539 18.2258 2.27992 18.2499C2.28663 18.2885 2.2895 18.3232 2.29238 18.3579Z" fill="black"/>
                                </svg>
                            </div>
                            <h3 className="card__announce-front">Как экспату справиться с чувством вины</h3>
                        </div>
                        <div className="back">
                            <h3 className="card__announce-back">Как экспату справиться с чувством вины</h3>
                            <div className="card__description">Вы чувствуете себя предателем, потому что пришлось оставить родителей, друзей и любимый город? Знайте, что вы берете на себя слишком много ответственности. Вы не причастны к тем обстоятельствам, которые вынудили вас покинуть страну.Терапия поможет прожить чувство вины, осознать ее разрушительное влияние.<p className="card__speaker">Спикер: Наталья Гладских</p></div>
                            <button className="card__btn"
                                onClick={()=> {
                                    openPopup();
                                }}
                            >Присоединиться!</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="front front2">
                            <h3 className="card__announce-front">Как не потерять самоуважение в новой стране</h3>
                            <div className="card__date">
                                <svg width="173" height="27" viewBox="0 0 173 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M60.9143 1.71457V21.7178H53.9851V14.7738H41.9293V21.7178H35V1.71457H41.9293V9.45869H53.9851V1.71457H60.9143Z" fill="black"/>
                                    <path d="M73.2956 22.1465C71.0046 22.1465 69.0423 21.8512 67.4085 21.2606C65.7748 20.651 64.5261 19.7842 63.6622 18.6602C62.7984 17.5362 62.3665 16.1836 62.3665 14.6024C62.3665 12.202 63.3242 10.3445 65.2396 9.03004C67.155 7.69649 69.8404 7.02972 73.2956 7.02972C75.5866 7.02972 77.5489 7.33453 79.1827 7.94415C80.8352 8.53473 82.0934 9.40153 82.9572 10.5446C83.821 11.6876 84.2529 13.0497 84.2529 14.631C84.2529 16.1931 83.821 17.5362 82.9572 18.6602C82.0934 19.7842 80.8352 20.651 79.1827 21.2606C77.5489 21.8512 75.5866 22.1465 73.2956 22.1465ZM68.6761 14.6024C68.6761 15.6311 69.0798 16.4313 69.8873 17.0028C70.6948 17.5743 71.8309 17.8601 73.2956 17.8601C74.7416 17.8601 75.8683 17.5743 76.6757 17.0028C77.502 16.4313 77.9151 15.6311 77.9151 14.6024C77.9151 13.5546 77.5114 12.7449 76.7039 12.1734C75.8964 11.5828 74.7603 11.2876 73.2956 11.2876C71.8309 11.2876 70.6948 11.5828 69.8873 12.1734C69.0798 12.7449 68.6761 13.5546 68.6761 14.6024Z" fill="black"/>
                                    <path d="M98.7051 21.7178V14.9739L91.4942 21.7178H85.1001L89.9731 17.1457C88.4521 16.8218 87.2878 16.2503 86.4803 15.4311C85.6729 14.6119 85.2691 13.5927 85.2691 12.3734C85.2691 10.7922 85.8982 9.58251 87.1563 8.74428C88.4333 7.887 90.3017 7.45836 92.7617 7.45836H104.958V21.7178H98.7051ZM91.5787 12.7449C91.5787 13.2593 91.7571 13.6594 92.1139 13.9451C92.4707 14.2309 92.9495 14.3738 93.5504 14.3738H98.7051V11.2018H93.5504C92.9495 11.2018 92.4707 11.3447 92.1139 11.6305C91.7571 11.8972 91.5787 12.2687 91.5787 12.7449Z" fill="black"/>
                                    <path d="M107.388 8.57283C107.388 6.32484 107.801 4.5055 108.627 3.11479C109.453 1.72409 110.984 1.02874 113.219 1.02874C115.641 1.02874 117.829 0.952537 119.782 0.800131C121.753 0.628674 123.753 0.361964 125.781 0L126.486 5.74379C124.683 6.12481 122.692 6.40104 120.514 6.5725C118.336 6.72491 115.725 6.80111 112.683 6.80111C111.613 6.80111 110.787 6.90589 110.205 7.11545C109.622 7.325 109.191 7.66792 108.909 8.14419C108.646 8.62045 108.477 9.29675 108.402 10.1731L108.346 10.716L108.12 13.345H108.346C108.477 12.221 108.984 11.2495 109.867 10.4303C110.749 9.59204 111.979 8.95384 113.557 8.51567C115.153 8.05846 117.021 7.82985 119.162 7.82985C122.467 7.82985 124.965 8.37279 126.655 9.45869C128.363 10.5255 129.218 12.2401 129.218 14.6024C129.218 17.1171 128.373 19.0126 126.683 20.289C124.993 21.5464 122.204 22.175 118.317 22.175C114.411 22.175 111.604 21.5464 109.895 20.289C108.205 19.0126 107.369 17.1171 107.388 14.6024V8.57283ZM113.895 14.8596C113.895 15.9074 114.289 16.6884 115.078 17.2028C115.866 17.7172 116.984 17.9744 118.43 17.9744C119.951 17.9744 121.077 17.7267 121.81 17.2314C122.561 16.717 122.936 15.9264 122.936 14.8596C122.936 13.7927 122.561 13.0116 121.81 12.5163C121.077 12.002 119.96 11.7448 118.458 11.7448C117.012 11.7448 115.885 12.002 115.078 12.5163C114.289 13.0307 113.895 13.8118 113.895 14.8596Z" fill="black"/>
                                    <path d="M130.398 7.45836H134.961L136.454 13.0878H136.707C136.858 11.2399 137.562 9.77302 138.82 8.68713C140.078 7.58219 141.768 7.02972 143.89 7.02972C146.576 7.02972 148.641 7.68697 150.087 9.00147C151.533 10.316 152.256 12.1829 152.256 14.6024C152.256 17.0218 151.561 18.8888 150.172 20.2033C148.801 21.5178 146.838 22.175 144.285 22.175C142.069 22.175 140.304 21.6511 138.989 20.6034C137.675 19.5365 136.914 18.022 136.707 16.0598H136.482L136.679 20.7462V26.29H130.398V7.45836ZM136.905 14.6024C136.905 15.6883 137.327 16.5265 138.172 17.1171C139.036 17.6886 140.247 17.9744 141.806 17.9744C143.139 17.9744 144.162 17.6886 144.876 17.1171C145.608 16.5265 145.975 15.6883 145.975 14.6024C145.975 13.5165 145.608 12.6783 144.876 12.0877C144.144 11.4971 143.111 11.2018 141.778 11.2018C140.219 11.2018 139.017 11.4971 138.172 12.0877C137.327 12.6783 136.905 13.5165 136.905 14.6024Z" fill="black"/>
                                    <path d="M166.747 21.7178V14.9739L159.536 21.7178H153.142L158.015 17.1457C156.494 16.8218 155.329 16.2503 154.522 15.4311C153.715 14.6119 153.311 13.5927 153.311 12.3734C153.311 10.7922 153.94 9.58251 155.198 8.74428C156.475 7.887 158.343 7.45836 160.803 7.45836H173V21.7178H166.747ZM159.62 12.7449C159.62 13.2593 159.799 13.6594 160.156 13.9451C160.512 14.2309 160.991 14.3738 161.592 14.3738H166.747V11.2018H161.592C160.991 11.2018 160.512 11.3447 160.156 11.6305C159.799 11.8972 159.62 12.2687 159.62 12.7449Z" fill="black"/>
                                    <path d="M17.0856 9.07327C17.0677 9.41763 17.0504 9.76229 17.0337 10.1072C16.9586 11.6094 16.183 12.7195 14.9455 13.5637C13.617 14.4696 12.0882 14.817 10.5093 14.9647C8.2717 15.1679 6.06475 14.988 3.95241 14.1921C2.47368 13.6353 1.19254 12.7893 0.538519 11.3409C-0.414214 9.22815 -0.083952 7.22287 1.37994 5.42349C2.56181 3.97234 4.21773 3.20155 6.01836 2.70919C8.60475 2.00018 11.2357 1.85247 13.9093 2.13446C15.9761 2.3529 17.9475 2.83183 19.7323 3.88371C22.1629 5.31605 23.5702 7.39385 23.9069 10.1413C24.2075 12.5637 23.8002 14.8313 22.3911 16.8876C21.0997 18.7738 19.2546 19.9806 17.1098 20.789C14.2506 21.8632 11.2589 22.1533 8.23275 21.9295C6.51931 21.8032 4.82628 21.4129 3.12305 21.1435C2.80393 21.0924 2.71208 20.9385 2.83175 20.6395C3.19108 19.7371 3.54236 18.8311 3.8856 17.9216C3.9895 17.653 4.12773 17.5635 4.44222 17.653C6.27596 18.2021 8.20012 18.4147 10.115 18.2797C12.4166 18.106 14.5559 17.4937 16.1645 15.7552C17.1357 14.706 17.6775 13.4634 17.6645 12.0543C17.6562 11.1681 17.504 10.2818 17.4011 9.39823C17.3862 9.27648 17.2814 9.16459 17.2155 9.04821L17.0856 9.07327ZM11.0381 11.7419C11.693 11.6587 12.3572 11.6193 13.0001 11.4832C14.6514 11.1332 15.9066 10.2388 16.7675 8.82709C16.953 8.52808 16.9279 8.28459 16.7276 8.00618C16.2562 7.33964 15.626 6.79196 14.8898 6.40912C13.6532 5.76814 12.3164 5.61238 10.9434 5.69295C9.69849 5.76635 8.4925 6.0018 7.45163 6.72244C5.92188 7.77969 5.92466 9.75812 7.46276 10.7957C8.53239 11.5136 9.75693 11.6909 11.0381 11.7419Z" fill="black"/>
                                </svg>
                            </div>
                        </div>
                        <div className="back">
                            <h3 className="card__announce-back">Как не потерять самоуважение в новой стране</h3>
                            <div className="card__description">Страшно говорить, откуда вы приехали, общаться на родном языке. Поиск работы идет медленно, друзей рядом нет или их мало. Кажется, что вы всегда будете в новой стране нежеланным гостем.И это пройдет. Период адаптации закончится, а терапия поможет пройти его быстрее.<p className="card__speaker">Спикер: Екатерина Быстрова</p>
                            </div>
                            <button className="card__btn"
                                    onClick={()=> {
                                        openPopup();
                                    }}
                            >Присоединиться!</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="front front3">
                            <p className="card__date">
                                <svg width="182" height="27" viewBox="0 0 182 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M69.9143 1.71457V21.7178H62.9851V14.7738H50.9293V21.7178H44V1.71457H50.9293V9.45869H62.9851V1.71457H69.9143Z" fill="black"/>
                                    <path d="M82.2956 22.1465C80.0046 22.1465 78.0423 21.8512 76.4085 21.2606C74.7748 20.651 73.5261 19.7842 72.6622 18.6602C71.7984 17.5362 71.3665 16.1836 71.3665 14.6024C71.3665 12.202 72.3242 10.3445 74.2396 9.03004C76.155 7.69649 78.8404 7.02972 82.2956 7.02972C84.5866 7.02972 86.5489 7.33453 88.1827 7.94415C89.8352 8.53473 91.0934 9.40153 91.9572 10.5446C92.821 11.6876 93.2529 13.0497 93.2529 14.631C93.2529 16.1931 92.821 17.5362 91.9572 18.6602C91.0934 19.7842 89.8352 20.651 88.1827 21.2606C86.5489 21.8512 84.5866 22.1465 82.2956 22.1465ZM77.6761 14.6024C77.6761 15.6311 78.0798 16.4313 78.8873 17.0028C79.6948 17.5743 80.8309 17.8601 82.2956 17.8601C83.7416 17.8601 84.8683 17.5743 85.6757 17.0028C86.502 16.4313 86.9151 15.6311 86.9151 14.6024C86.9151 13.5546 86.5114 12.7449 85.7039 12.1734C84.8964 11.5828 83.7603 11.2876 82.2956 11.2876C80.8309 11.2876 79.6948 11.5828 78.8873 12.1734C78.0798 12.7449 77.6761 13.5546 77.6761 14.6024Z" fill="black"/>
                                    <path d="M107.705 21.7178V14.9739L100.494 21.7178H94.1001L98.9731 17.1457C97.4521 16.8218 96.2878 16.2503 95.4803 15.4311C94.6729 14.6119 94.2691 13.5927 94.2691 12.3734C94.2691 10.7922 94.8982 9.58251 96.1563 8.74428C97.4333 7.887 99.3017 7.45836 101.762 7.45836H113.958V21.7178H107.705ZM100.579 12.7449C100.579 13.2593 100.757 13.6594 101.114 13.9451C101.471 14.2309 101.95 14.3738 102.55 14.3738H107.705V11.2018H102.55C101.95 11.2018 101.471 11.3447 101.114 11.6305C100.757 11.8972 100.579 12.2687 100.579 12.7449Z" fill="black"/>
                                    <path d="M116.388 8.57283C116.388 6.32484 116.801 4.5055 117.627 3.11479C118.453 1.72409 119.984 1.02874 122.219 1.02874C124.641 1.02874 126.829 0.952537 128.782 0.800131C130.753 0.628674 132.753 0.361964 134.781 0L135.486 5.74379C133.683 6.12481 131.692 6.40104 129.514 6.5725C127.336 6.72491 124.725 6.80111 121.683 6.80111C120.613 6.80111 119.787 6.90589 119.205 7.11545C118.622 7.325 118.191 7.66792 117.909 8.14419C117.646 8.62045 117.477 9.29675 117.402 10.1731L117.346 10.716L117.12 13.345H117.346C117.477 12.221 117.984 11.2495 118.867 10.4303C119.749 9.59204 120.979 8.95384 122.557 8.51567C124.153 8.05846 126.021 7.82985 128.162 7.82985C131.467 7.82985 133.965 8.37279 135.655 9.45869C137.363 10.5255 138.218 12.2401 138.218 14.6024C138.218 17.1171 137.373 19.0126 135.683 20.289C133.993 21.5464 131.204 22.175 127.317 22.175C123.411 22.175 120.604 21.5464 118.895 20.289C117.205 19.0126 116.369 17.1171 116.388 14.6024V8.57283ZM122.895 14.8596C122.895 15.9074 123.289 16.6884 124.078 17.2028C124.866 17.7172 125.984 17.9744 127.43 17.9744C128.951 17.9744 130.077 17.7267 130.81 17.2314C131.561 16.717 131.936 15.9264 131.936 14.8596C131.936 13.7927 131.561 13.0116 130.81 12.5163C130.077 12.002 128.96 11.7448 127.458 11.7448C126.012 11.7448 124.885 12.002 124.078 12.5163C123.289 13.0307 122.895 13.8118 122.895 14.8596Z" fill="black"/>
                                    <path d="M139.398 7.45836H143.961L145.454 13.0878H145.707C145.858 11.2399 146.562 9.77302 147.82 8.68713C149.078 7.58219 150.768 7.02972 152.89 7.02972C155.576 7.02972 157.641 7.68697 159.087 9.00147C160.533 10.316 161.256 12.1829 161.256 14.6024C161.256 17.0218 160.561 18.8888 159.172 20.2033C157.801 21.5178 155.838 22.175 153.285 22.175C151.069 22.175 149.304 21.6511 147.989 20.6034C146.675 19.5365 145.914 18.022 145.707 16.0598H145.482L145.679 20.7462V26.29H139.398V7.45836ZM145.905 14.6024C145.905 15.6883 146.327 16.5265 147.172 17.1171C148.036 17.6886 149.247 17.9744 150.806 17.9744C152.139 17.9744 153.162 17.6886 153.876 17.1171C154.608 16.5265 154.975 15.6883 154.975 14.6024C154.975 13.5165 154.608 12.6783 153.876 12.0877C153.144 11.4971 152.111 11.2018 150.778 11.2018C149.219 11.2018 148.017 11.4971 147.172 12.0877C146.327 12.6783 145.905 13.5165 145.905 14.6024Z" fill="black"/>
                                    <path d="M175.747 21.7178V14.9739L168.536 21.7178H162.142L167.015 17.1457C165.494 16.8218 164.329 16.2503 163.522 15.4311C162.715 14.6119 162.311 13.5927 162.311 12.3734C162.311 10.7922 162.94 9.58251 164.198 8.74428C165.475 7.887 167.343 7.45836 169.803 7.45836H182V21.7178H175.747ZM168.62 12.7449C168.62 13.2593 168.799 13.6594 169.156 13.9451C169.512 14.2309 169.991 14.3738 170.592 14.3738H175.747V11.2018H170.592C169.991 11.2018 169.512 11.3447 169.156 11.6305C168.799 11.8972 168.62 12.2687 168.62 12.7449Z" fill="black"/>
                                    <path d="M13.2389 17.5229C14.1118 17.7005 14.9311 17.8985 15.7605 18.0397C17.7979 18.3877 19.8535 18.4836 21.8991 18.1639C22.782 18.0281 23.6523 17.7449 24.4916 17.4341C24.7768 17.3282 25.0341 17.1611 25.2444 16.945C25.4548 16.729 25.6128 16.4695 25.707 16.1859C26.0412 15.2332 25.578 14.2326 24.4498 13.8091C23.6808 13.509 22.8687 13.3278 22.0426 13.272C20.4585 13.1894 18.8634 13.248 17.2393 13.248V10.2409C18.2457 10.2409 19.2376 10.2631 20.2368 10.2338C21.018 10.2107 21.8119 10.1948 22.574 10.0465C23.4143 9.88401 24.1028 9.425 24.4561 8.60287C24.8631 7.65377 24.5679 6.75706 23.6468 6.25366C22.763 5.77068 21.7783 5.67922 20.7937 5.64549C18.8253 5.57741 16.86 5.84787 14.9874 6.44454C14.7758 6.51112 14.5487 6.59814 14.5224 6.25898C14.4315 5.14209 14.3589 4.02342 14.2707 2.79643C15.4344 2.58246 16.5653 2.30369 17.7125 2.18206C19.0202 2.04172 20.3357 1.98242 21.6511 2.00449C23.9438 2.04888 26.2047 2.33299 28.2985 3.34601C29.1351 3.74997 29.869 4.28178 30.3705 5.0826C31.0908 6.23679 30.89 7.61737 29.8409 8.48568C28.7427 9.39393 27.4083 9.76948 26.0385 10.0456C25.5662 10.1406 25.082 10.1726 24.6042 10.2409C24.5147 10.2641 24.4279 10.2966 24.3453 10.3377C24.3453 10.3794 24.3453 10.4211 24.3408 10.4629C24.5479 10.5019 24.7532 10.5517 24.9612 10.5774C26.916 10.8269 28.7354 11.4244 30.2605 12.6816C31.4087 13.628 32.1517 14.8035 31.9737 16.3519C31.8066 17.8177 31.0653 18.9621 29.84 19.8144C28.2703 20.9011 26.4727 21.3815 24.6088 21.6789C22.5095 22.0171 20.3922 22.0544 18.2766 21.9452C16.6034 21.8564 14.9329 21.6984 13.3152 21.2145C13.0554 21.1364 12.9845 21.0095 13.0027 20.7706C13.0863 19.6937 13.1589 18.6194 13.2389 17.5229Z" fill="black"/>
                                    <path d="M0 3.43511C1.61685 2.95652 3.19645 2.48728 4.77787 2.02271C4.86735 2.00296 4.95905 1.99605 5.05037 2.00215H10.7729C10.8456 2.00215 10.9192 2.01429 11 2.02084V21.9927H6.48737C6.09406 21.9927 5.69984 21.9758 5.30653 21.9983C4.98407 22.017 4.88414 21.8852 4.88778 21.5645C4.90049 20.4597 4.88778 19.3539 4.88778 18.2481C4.88778 13.3425 4.88778 8.43695 4.88778 3.53139C4.88778 3.28929 4.86234 3.04719 4.84872 2.80509L4.72973 2.78172C4.68842 2.90893 4.65415 3.03845 4.62708 3.16965C4.27737 5.34761 2.88489 6.75813 0.743931 7.07408C0.627663 7.0909 0.389678 6.98061 0.380595 6.9077C0.24071 5.76918 0.126259 4.62692 0 3.43511Z" fill="black"/>
                                </svg></p>
                            <h3 className="card__announce-front">Почему нужно избегать токсичного окружения</h3>
                        </div>
                        <div className="back">
                            <h3 className="card__announce-back">Почему нужно избегать токсичного окружения</h3>
                            <div className="card__description">Как понять, что ваше окружение плохо на вас влияет? Если после общения резко портится настроение, падает мотивация, становится плохо физически, например, болит голова — бегите от таких людей.Терапия поможет быстро распознавать токсичность, выстраивать личные границы и экологично выходить из токсичного общения.<p className="card__speaker">Спикер: Мария Домбровская</p></div>
                            <button className="card__btn"
                                    onClick={()=> {
                                        openPopup();
                                    }}
                            >Присоединиться!</button>
                        </div>
                    </div>
                    <img className="star star-left star-left-second" src="/src/assets/Website Assets/Dignity/Cards/Star.svg" alt="star"/>
                    <img className="star star-left" src="/src/assets/Website Assets/Dignity/Cards/Star.svg" alt="star"/>
                    <img className="star star-right" src="/src/assets/Website Assets/Dignity/Cards/Star.svg" alt="star"/>
                </div>
            </div>
        </section>
    )
}
