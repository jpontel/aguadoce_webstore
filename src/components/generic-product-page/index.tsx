import arrowDown from './../../assets/icons/arrow-down.svg';
import './style/style.css';

interface GenericProductPageProps {
    categories: string[];
    title: string;
    action: () => void;
}

export default function GenericProductPage({categories, title, action}: GenericProductPageProps) {
    return (
        <div className={'w-full inline-flex pl-60 pt-12'}>
            <div className={'w-[250px] flex flex-col gap-4'}>
                <div className={'w-full py-[40px] px-[30px] rounded-[13px] background-card'}>
                    <div className={'w-full inline-flex'}>
                        <div className={'w-1 h-4 bg-black'}/>
                        <div className={'font-oxygen text-[22px]'}>
                            Categorias
                        </div>
                    </div>
                    <div className={'w-full text-[18px]'}>
                        {categories.map((item, index) => (
                            <div className={'w-full flex mt-3 justify-between'}>
                                <div key={index}>
                                    {item}
                                </div>
                                <button>
                                    <img src={arrowDown} alt={'arrow-down'}
                                         className={'items-center justify-center  h-full'}/>
                                </button>

                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div className={'w-[250px] py-[40px] px-[30px] rounded-[13px] background-card'}>
                        <div className={'w-full inline-flex'}>
                            <div className={'w-1 h-4 bg-black'}/>
                            <div className={'font-oxygen text-[22px]'}>
                                Média de Preço
                            </div>
                        </div>
                        <div className={'w-full text-[18px]'}>
                            {categories.map((item, index) => (
                                <div className={'w-full flex mt-3 justify-between'}>
                                    <div key={index}>
                                        {item}
                                    </div>
                                    <button>
                                        <img src={arrowDown} alt={'arrow-down'}
                                             className={'items-center justify-center h-full'}/>
                                    </button>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/*Barra de Pesquisa*/}
            <div className={'w-full pl-28 pr-64'}>
                <div className={'font-montserrat font-regular text-[36px] text-[#3D3D3D]'}>
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