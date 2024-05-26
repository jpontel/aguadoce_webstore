import jacket from './../../assets/store-jacket.png';

export interface GenericClothesProps {
    previousValue?: number;
    hasDiscount: boolean;
    title: string;
    value: number;
}

export default function GenericClothes({hasDiscount, title, value, previousValue}: GenericClothesProps) {
    return (
        <div className={'w-[360px] h-full bg-[#F1F2F7] border-black border-[0.5px] flex-col justify-between'}>
            <div>
                <img alt={'Clothes'} src={jacket}/>
            </div>
            <div className={'bg-black text-white p-4 items-end justify-end'}>
                <div className={'font-montserrat text-[16px] font-semibold mb-4'}>
                    {title}
                </div>
                <div className={'inline-flex justify-between w-full'}>
                    <div className={'font-montserrat text-[20px]'}>
                        R${value}
                    </div>
                    {hasDiscount && (
                        <div className={'font-montserrat text-[20px]'} style={{ textDecoration: 'line-through' }}>
                            R${previousValue}
                        </div>
                    )}
                    <button className={'font-bold font-montserrat text-[12px] rounded-full bg-orange-500 p-[6px]'}>
                        Comprar
                    </button>
                </div>
            </div>
        </div>
    )
}