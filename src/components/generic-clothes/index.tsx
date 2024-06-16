import jacket from './../../assets/store-jacket.png';
import {useState} from "react";

export interface GenericClothesProps {
    previousValue?: number;
    hasDiscount: boolean;
    title: string;
    value: number;
}

export default function GenericClothes({hasDiscount, title, value, previousValue}: GenericClothesProps) {
    const [isClicked, setIsClicked] = useState<boolean>(false);

    const handleCLick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 1000);
    };

    return (
        <div className={'w-[360px] h-full bg-[#F1F2F7] border-black border-[0.5px] flex-col justify-between'}
             style={{filter: 'drop-shadow(6px 25px 25px rgba(0, 0, 0, 0.10))'}}>
            <div>
                <img alt={'Clothes'} src={jacket}/>
            </div>
            <div className={'bg-black text-white p-4 items-end justify-end'}>
                <div className={'font-montserrat text-[16px] font-semibold mb-4'}>
                    {title}
                </div>
                <div className={'w-full inline-flex justify-between'}>
                    <div className={'flex-col w-full'}>
                        <div className={'inline-flex w-full gap-2 items-center'}>
                            {hasDiscount && (
                                <div className={'font-montserrat text-[14px] text-center justify-center'}
                                     style={{textDecoration: 'line-through'}}>
                                    R${previousValue}
                                </div>
                            )}
                            <div className={'font-montserrat text-[20px]'}>
                                R${value}
                            </div>
                        </div>
                        <div className={'font-montserrat font-bold text-[10px] w-full flex'}>
                            10x de R${value/10} sem júros
                        </div>
                    </div>
                    <div className={'justify-end flex w-full h-full'}>
                        <button
                            className={`font-bold font-montserrat text-[12px] rounded-full bg-orange-500 p-[6px] ${isClicked ? 'animate-bounce'}`}
                            onClick={handleCLick}
                        >
                            Comprar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}