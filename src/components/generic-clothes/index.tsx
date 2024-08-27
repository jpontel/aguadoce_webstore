import jacket from './../../assets/store-jacket.png';
import useIsMobile from "../../hooks/useMobile.ts";
import {Fragment, useState} from "react";
import './style/style.css';
import {useNavigate} from "react-router-dom";

export interface GenericClothesProps {
    previousValue?: number;
    hasDiscount: boolean;
    title: string;
    value: number;
    small?: boolean;
}

export default function GenericClothes({hasDiscount, title, value, previousValue, small}: GenericClothesProps) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const navigate = useNavigate();
    const isMobile = useIsMobile();

    const handleComponentClick = () => {
        navigate('/product');
    }

    const handleClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsChecked(true);
            setIsLoading(false);
        }, 5000);
    };

    return (
        <Fragment>
            <div
                className={`h-full bg-[#F1F2F7] border-black border rounded-[10px] flex-col justify-between ${small ? 'w-[250px]' : isMobile ? 'w-[150px]' : 'w-[360px]'}`}
                onClick={handleComponentClick}
                style={{
                    filter: 'drop-shadow(0px 2px 30px rgba(0, 0, 0, 0.04))',
                    border: '1px solid rgba(0, 0, 0, 0.06)'
                }}>
                <div>
                    <img alt={'Clothes'} src={jacket} className={'rounded-[10px]'}/>
                </div>
                <div className={'bg-[#161616] text-white p-4 items-end justify-end rounded-b-[10px] cursor-pointer'}>
                    <div className={'font-montserrat xs:text-[14px] lg:text-[16px] font-semibold mb-4'}>
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
                                10x de R${value / 10} sem júros
                            </div>
                        </div>
                        <div className={'justify-end flex w-full h-full'}>
                            <button
                                className={`w-[70px] font-bold font-montserrat text-[12px] rounded-full bg-orange-500 p-[6px] hover:transition ease-in-out hover:bg-orange-700 ${isLoading ? 'button-animation' : ''}`}
                                onClick={handleClick}
                                disabled={isChecked}
                            >
                                {isLoading ? (
                                    <div className="button-check"></div>
                                ) : (
                                    <span>{'Comprar'}</span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
