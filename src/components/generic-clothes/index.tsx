import jacket from './../../assets/store-jacket.png';
import {useState} from "react";
import './style/style.css';

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
        setTimeout(() => setIsClicked(false), 2000);
    };

    return (
        <div className={'w-[360px] h-full bg-[#F1F2F7] border-black border rounded-[10px] flex-col justify-between'}
             style={{filter: 'drop-shadow(0px 2px 30px rgba(0, 0, 0, 0.04))', border:'1px solid rgba(0, 0, 0, 0.06)'}}>
            <div>
                <img alt={'Clothes'} src={jacket} className={'rounded-[10px]'}/>
            </div>
            <div className={'bg-[#161616] text-white p-4 items-end justify-end rounded-b-[10px]'}>
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
                            className={`w-[70px] font-bold font-montserrat text-[12px] rounded-full bg-orange-500 p-[6px] hover:transition ease-in-out hover:bg-orange-700 ${isClicked ? 'button-animation w-[61px]' : ''}`}
                            onClick={handleCLick}
                        >
                            <span className={`${isClicked ? 'button-animation' : ''}`}>{isClicked ? 'OK' : 'Comprar'}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}