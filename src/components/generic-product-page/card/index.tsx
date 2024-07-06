import arrowDown from "../../../assets/icons/arrow-down.svg";

interface FilterCardProps {
    priceRange?: string[];
    isSelectBox?: boolean;
    categories: string[];
    title: string;
}

export default function FilterCard({categories, title, isSelectBox, priceRange}: FilterCardProps) {
    return (
        <div className={'font-oxygen w-full py-[25px] px-[30px] rounded-[13px] background-card'}>
            <div className={'w-full inline-flex gap-2 items-center'}>
                <div className={'w-[3px] h-4 bg-black'}/>
                <div className={'text-[22px]'}>
                    {title}
                </div>
            </div>
            {isSelectBox ? (
                <div>
                    {priceRange?.map((item, index) => (
                        <div key={index}>
                            <input type="checkbox" className={'mt-5 mr-3'}/>
                            <label>R${item}</label>
                        </div>
                    )) || <div>No price range available</div>}
                </div>
            ) : (
                <div className={'w-full text-[18px]'}>
                    {categories.map((item, index) => (
                        <div className={'w-full flex mt-4 justify-between text-[#414141]'}>
                            <div key={index} className={'font-oxygen text-[16px] text-[#414141]'}>
                                {item}
                            </div>
                            <button>
                                <img src={arrowDown} alt={'arrow-down'} className={'items-center justify-center h-full'}/>
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}