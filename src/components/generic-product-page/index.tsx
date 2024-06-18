import arrowDown from './../../assets/icons/arrow-down.svg';

interface GenericProductPageProps {
    categories: string[];
    title: string;
    action: () => void;
}

export default function GenericProductPage({categories, title, action}: GenericProductPageProps) {
    return (
        <div className={'w-full inline-flex pl-64 pt-12'}>
            <div className={'border border-slate-400 p-6 rounded-[7px] bg-slate-50'}>
                <div className={'text-[30px]'}>
                    Categorias
                </div>
                <div className={'text-[18px]'}>
                    {categories.map((item, index) => (
                        <div className={''}>
                            <div key={index} className={'mb-2'}>
                                {item}
                            </div>
                            <button>
                                <img src={arrowDown} alt={'arrow-down'}/>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <div className={'w-full pl-28 pr-64'}>
                <div className={'font-montserrat font-bold text-[40px]'}>
                    {title}
                </div>
                <div className={'inline-flex w-full items-center justify-center gap-4'}>
                    <input
                        className={'w-full h-[40px] border border-black rounded-full pl-4'}
                        placeholder={'Pesquisar...'}
                        onClick={action}
                        type={"text"}
                    />
                    <button className={'rounded-full bg-amber-600 w-[35px] h-[35px]'}/>
                </div>
            </div>
        </div>
    )
}