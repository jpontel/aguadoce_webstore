import FilterCard from "./card";
import './style/style.css';

interface GenericProductPageProps {
    categories: string[];
    title: string;
    action: () => void;
}

export default function GenericProductPage({categories, title, action}: GenericProductPageProps) {
    return (
        <div className={'w-full inline-flex pl-60 pt-12'}>
            <div className={'w-[300px] flex flex-col gap-4'}>
                <FilterCard categories={categories} title={'Categorias'} />
                <FilterCard categories={categories} title={'Média de Preços'} isSelectBox priceRange={['200 - 300', '400 - 500', '600 - 700']}/>
            </div>
            {/*Barra de Pesquisa*/}
            <div className={'w-full pl-16 pr-64'}>
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