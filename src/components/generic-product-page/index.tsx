import GenericClothes, {GenericClothesProps} from "../generic-clothes";
import searchIcon from '../../assets/icons/search.svg';
import FilterCard from "./card";
import './style/style.css';

interface GenericProductPageProps {
    categories: string[];
    data: GenericClothesProps[];
    title: string;
    action: () => void;
}

export default function GenericProductPage({categories, title, action, data}: GenericProductPageProps) {
    return (
        <div className={'w-full inline-flex pl-60 pt-12'}>
            <div className={'w-[350px] flex flex-col gap-4'}>
                <FilterCard categories={categories} title={'Categorias'}/>
                <FilterCard
                    priceRange={['200 - 300', '400 - 500', '600 - 700']}
                    title={'Média de Preços'}
                    categories={categories}
                    isSelectBox
                />
                <div className={'flex w-full items-center justify-center'}>
                    <button className={'w-[200px] mt-4 bg-amber-600 text-white rounded-[13px] py-2'}>
                        Aplicar
                    </button>
                </div>
            </div>
            {/*Barra de Pesquisa*/}
            <div className={'w-full pl-16 pr-64'}>
                <div className={'font-oxygen font-semibold text-[36px] text-[#3D3D3D]'}>
                    {title}
                </div>
                <div className={'inline-flex w-full items-center justify-center gap-4'}>
                    <input
                        className={'w-full h-[40px] border border-black rounded-full pl-4'}
                        placeholder={'Pesquisar...'}
                        onClick={action}
                        type={"text"}
                    />
                    <button className={'button-with-icon hover:transition ease-in-out hover:bg-amber-800'}>
                        <img src={searchIcon} alt={'Search'} className={'w-4 h-4'}/>
                    </button>
                </div>
                {/*Número de Resultados*/}
                <div className={'mt-4'}>
                    <div className={'my-6'}>
                        <div className={'font-oxygen text-[16px] text-[#414141] font-semibold'}>
                            Mostrando 1-12 de 24 resultados
                        </div>
                        <div className={'text-[#949494] font-oxygen text-[16px]'}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut
                            labore et dolore magna aliqua.
                        </div>
                    </div>
                    {/*Resultados*/}
                    {data.map((item, index) => (
                        <div className={'inline-flex gap-4 children-container-product-page mb-10'}>
                            <GenericClothes
                                hasDiscount={item.hasDiscount}
                                title={item.title}
                                value={item.value}
                                key={index}
                                small
                            />
                        </div>
                    ))}
                    <div className={'justify-center items-center flex flex-col font-oxygen'}>
                        <div className={'font-normal text-center justify-center flex'}>
                            Mostrando 12-24 Resultados
                        </div>
                        <div className={'w-[500px] bg-black h-[2px] my-2'}/>
                        <button>
                            Mostrar mais
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}