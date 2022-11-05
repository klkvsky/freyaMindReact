

export const GroupSession = () => {
    return (
        <section>
            <div className="max-w-[364px] mx-auto my-[40px]">
                <h1 className="font-[Asgard] text-[36px] leading-9 text-[#343434] font-normal mb-[40px]">Что будет на сессиях?</h1>
                <div className="bg-[#343434] rounded-[8px] py-[12px] px-[16px] relative  mb-[40px]">
                    <p className="text-[18px] leading-7 text-[#ffffff] font-normal">С каждой группой до 10 человек будут работать одновременно 2 психолога.</p>
                    <svg className="absolute bottom-0 right-0" width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M60.5323 57.6971C61.4088 57.0152 61.9233 56.0371 62.0469 55.0081C62.1738 53.9501 61.8881 52.8266 61.1599 51.8907C60.4316 50.9546 59.4127 50.4013 58.3561 50.2643C57.3282 50.131 56.2536 50.3893 55.3771 51.0712C52.9175 52.9849 51.4738 55.7261 51.1276 58.6095C50.7782 61.5225 51.5477 64.5923 53.5196 67.1268C55.4918 69.6616 58.2782 71.1622 61.1872 71.5391C64.0675 71.9128 67.0794 71.1872 69.5391 69.2735C73.582 66.128 75.9553 61.6239 76.5238 56.8853C77.0962 52.1178 75.8423 47.1019 72.6268 42.9691C69.4113 38.8363 64.8575 36.3874 60.0956 35.7702C55.3626 35.1562 50.4133 36.3494 46.3704 39.4949C40.7443 43.8721 37.4414 50.1392 36.6504 56.7325C35.8554 63.355 37.5936 70.3174 42.0525 76.0485C46.5116 81.7797 52.8335 85.1763 59.4477 86.0338C66.033 86.8879 72.92 85.2274 78.5461 80.8502C85.7552 75.2413 89.9875 67.2106 91.0012 58.7629C92.0186 50.2864 89.7961 41.3775 84.0934 34.0477C78.3906 26.718 70.3015 22.3736 61.8349 21.2757C53.3974 20.1816 44.5726 22.3096 37.3636 27.9185C28.5713 34.7591 23.4099 44.5525 22.1734 54.8553C20.9335 65.1865 23.64 76.0416 30.5863 84.9696C37.5326 93.8977 47.3894 99.1902 57.7084 100.528C67.999 101.863 78.7607 99.2673 87.5529 92.4266C97.9287 84.3539 104.019 72.7976 105.478 60.6402C106.94 48.4539 103.75 35.6525 95.5602 25.1262C87.3704 14.5999 75.7462 8.36005 63.5744 6.78161C51.4315 5.20697 38.7326 8.26943 28.3568 16.3421C16.3981 25.6464 9.37793 38.9657 7.69614 52.9784C6.01121 67.0191 9.68584 81.7668 19.1192 93.8914C28.5528 106.016 41.9445 113.203 55.9687 115.023C69.9646 116.837 84.6012 113.307 96.5599 104.003L100.412 108.954C87.039 119.358 70.6759 123.306 55.0318 121.277C39.4169 119.252 24.5259 111.275 14.0623 97.8258C3.59885 84.3771 -0.472382 67.9825 1.40353 52.3487C3.28333 36.6862 11.1326 21.7959 24.5051 11.3916C36.2945 2.21912 50.7201 -1.26075 64.5116 0.527144C78.2741 2.31223 91.397 9.34141 100.617 21.1918C109.837 33.0422 113.424 47.4906 111.771 61.2696C110.114 75.0773 103.194 88.2045 91.4045 97.377C81.1984 105.318 68.7106 108.33 56.7713 106.783C44.8612 105.238 33.5056 99.1564 25.5292 88.9042C17.5525 78.6519 14.4498 66.1503 15.8807 54.2262C17.3156 42.2728 23.3059 30.9087 33.512 22.9681C42.1346 16.2594 52.6855 13.7137 62.7721 15.0216C72.8292 16.3258 82.4175 21.4595 89.1504 30.1132C95.8835 38.7673 98.5022 49.3231 97.2938 59.3921C96.082 69.4909 91.0204 79.092 82.3977 85.8007C75.3582 91.2777 66.7444 93.3561 58.5104 92.2881C50.3055 91.2242 42.485 87.038 36.9958 79.9828C31.5067 72.9277 29.3718 64.3183 30.3574 56.1031C31.347 47.8596 35.4792 40.0214 42.5188 34.5444C47.9752 30.2991 54.6517 28.688 61.0324 29.5159C67.3849 30.3397 73.4379 33.5779 77.6836 39.0348C81.9292 44.4916 83.5796 51.1547 82.8164 57.5148C82.0501 63.9031 78.8472 69.9787 73.3907 74.224C69.5173 77.2377 64.7785 78.3811 60.2503 77.7936C55.7504 77.2105 51.4652 74.9199 48.4629 71.0611C45.4609 67.2025 44.2938 62.4854 44.8349 57.9804C45.379 53.4465 47.6521 49.1344 51.5255 46.1208C53.8156 44.339 56.6166 43.6626 59.2932 44.0101C61.9402 44.3532 64.4582 45.6962 66.2167 47.9563C67.975 50.2163 68.6577 52.9872 68.3395 55.6372C68.0183 58.3171 66.674 60.866 64.384 62.6477L60.5323 57.6971Z" fill="#F3E5D8"/>
                    </svg>
                </div>
                <p className="font-normal text-lg text-[#343434] max-w-[320px]">
                    Мы <span className="font-semibold">обсудим проблемы</span>, которые беспокоят сейчас, <span className="font-semibold">создадим фундамент для формирования новой идентичности, поймем, с чего начать</span>, чтобы пересобрать ценности.
                    <br />
                    После каждой сессии вы получите небольшое домашнее задание и все вместе разберёте его в группе.
                    <br />
                    <br />
                    <span className="font-semibold">Вы найдете ответы на вопросы, которые волновали.</span>
                </p>
            </div>
        </section>
    )
}