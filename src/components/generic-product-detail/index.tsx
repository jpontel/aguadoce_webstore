import product from './../../assets/store-jacket.png';
import {colors, gender, tamanhos} from "../../utils/util.ts";
import SelectGeneric from "../select-generic";
import React, {useEffect, useState} from "react";
import {getCategories} from "../../auth/admin/manage-products/service/categories.service.js.ts";

interface GenericProductDetailProps {
    isEdit?: boolean;
    isAdd?: boolean;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
    data?: {
        name?: string;
        description?: string;
        stockQuantity?: string;
        category?: string;
        gender?: string;
        size?: string;
        color?: string;
        parcela?: string;
        price?: string;
        imageUrl?: string;
        brand_id?: number;
        category_id?: number;
    };
}

interface Category {
    id: number;
    name: string;
    description: string;
}

function addBusinessDays(startDate: Date, days: number): Date {
    const currentDate = new Date(startDate);
    let addedDays = 0;
    while (addedDays < days) {
        currentDate.setDate(currentDate.getDate() + 1);
        if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
            addedDays++;
        }
    }
    return currentDate;
}

function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {day: 'numeric', month: 'long', year: 'numeric'};
    return date.toLocaleDateString('pt-BR', options);
}

export default function GenericProductDetail({
                                                 isEdit,
                                                 isAdd,
                                                 handleChange,
                                                 handleSubmit,
                                                 data
                                             }: GenericProductDetailProps) {
    const route = 'Masculino > Jaquetas > Jaqueta Masculina';
    const [categories, setCategories] = useState<Category[]>([]);
    const price = data?.price ? parseFloat(data.price) : 199.90;
    const parcelaValue = 12;
    const options = ['P', 'M', 'G', 'GG'];
    const deliveryDate = formatDate(addBusinessDays(new Date(), 10));

    useEffect(() => {
        async function fetchCategories() {
            try {
                const categoriesData = await getCategories();
                setCategories(categoriesData);
            } catch (error) {
                console.error("Failed to fetch categories:", error);
            }
        }

        if (isEdit || isAdd) {
            fetchCategories();
        }
    }, [isEdit, isAdd]);

    return (
        <form onSubmit={handleSubmit} className={'w-full h-full mb-12 z-50 relative'}>
            <div className={'my-2 font-montserrat xs:text-[12px] ml-3'}>
                {isEdit ? 'Editar Página' : isAdd ? 'Adicionar' : route}
            </div>
            <div className={'w-full'}>
                <img className={'w-full h-full border-b-2 border-[#f6f6f6]'} src={product} alt="Product Name"/>
                <div className={'p-3 flex flex-col'}>
                    <div className={'flex justify-start items-start text-black font-bold text-[20px] font-montserrat '}>
                        {isEdit || isAdd ? (
                            <input
                                name="name"
                                value={data?.name || ''}
                                onChange={handleChange}
                                placeholder={isEdit ? 'Editar Nome' : 'Nome'}
                                className="w-full p-2 rounded-md border"
                            />
                        ) : (
                            data?.name
                        )}
                    </div>
                    <div>
                        <p className={'font-oxygen xs:text-[12px]'}>{
                            isEdit || isAdd ? (
                                <textarea
                                    name="description"
                                    value={data?.description || ''}
                                    onChange={handleChange}
                                    placeholder={isEdit ? 'Editar subtitulo' : 'Subtitulo descrição'}
                                    className="p-2 rounded-lg text-[10px] font-oxygen w-full"
                                    rows={5}
                                />
                            ) : (
                                data?.description || 'Jaqueta masculina de seda com listras'
                            )
                        }</p>
                        {isEdit || isAdd && (
                            <div>
                                <div className={'w-full gap-3 flex'}>
                                    <SelectGeneric
                                        id={'color-select'}
                                        label={'Cor'}
                                        options={colors}
                                        name="color"
                                        value={data?.color || ''}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={'w-full gap-3 flex'}>
                                    <SelectGeneric
                                        id={'gender-select'}
                                        label={'Gênero'}
                                        options={gender}
                                        name="gender"
                                        value={data?.gender || ''}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={'w-full gap-3 flex'}>
                                    <SelectGeneric
                                        id={'category-select'}
                                        label={'Categoria'}
                                        options={categories.map((category) => category.name)}
                                        name="category"
                                        value={data?.category || ''}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className={'flex flex-col pl-3 font-oxygen'}>
                    <div className={'text-[23px]'}>
                        {isEdit || isAdd ? (
                            <>
                                <input
                                    name="parcela"
                                    value={data?.parcela || ''}
                                    onChange={handleChange}
                                    placeholder={'00'}
                                    className="w-8 text-zinc-800"
                                />
                                {` x de R$${(price / parseInt(data?.parcela || '1')).toFixed(2)}`}
                            </>
                        ) : (
                            `${parcelaValue} x de R$${(price / parcelaValue).toFixed(2)}`
                        )}
                    </div>
                    <div className={'font-bold inline-flex items-center justify-start'}>
                        R${isEdit || isAdd ? (
                        <input
                            name="price"
                            value={data?.price || ''}
                            onChange={handleChange}
                            placeholder={'00'}
                            className="w-[1/2] p-2 rounded-md border"
                        />
                    ) : (
                        price.toFixed(2)
                    )}
                    </div>
                    <div className={'font-bold inline-flex items-center justify-start'}>
                        {isEdit || isAdd && (
                        <input
                            name="stockQuantity"
                            value={data?.stockQuantity || ''}
                            onChange={handleChange}
                            type={'number'}
                            placeholder={'Qtde. Estoque'}
                            className="w-[1/2] p-2 rounded-md border"
                        />
                    )}
                    </div>
                </div>
                <div className={'w-full h-full items-center justify-center flex flex-col pr-3 gap-3'}>
                    <div className={'w-full px-3 gap-3 flex'}>
                        <SelectGeneric
                            id={'size-select'}
                            label={'Selecione um tamanho'}
                            options={options}
                            name="size"
                            value={data?.size || tamanhos[0]}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={'mb-3 w-full px-3 text-center'}>
                        <button
                            type="submit"
                            className={'w-full p-1 flex bg-amber-500 rounded-[5px] text-[12px] text-white text-center items-center justify-center font-bold'}
                        >
                            {isEdit ? 'Salvar' : isAdd ? 'Adicionar' : 'Adicionar ao carrinho'}
                        </button>
                    </div>
                    <div className={'flex flex-col text-[12px] text-start justify-start w-full pl-3 font-montserrat'}>
                        <div className={'font-bold'}>PREVISÃO DE ENTREGA:</div>
                        <p className={'font-oxygen'}>{deliveryDate}</p>
                    </div>
                </div>
                <div className={'w-full p-3 flex flex-col gap-2'}>
                    <div className={'font-montserrat font-bold text-[15px]'}>
                        Detalhes
                        <div className={'text-[10px] font-oxygen'}>{
                            isEdit || isAdd ? (
                                <textarea
                                    name="detail"
                                    value={data?.description || ''}
                                    onChange={handleChange}
                                    placeholder="Descrição"
                                    className="p-2 rounded-lg text-[10px] font-oxygen w-full"
                                    rows={5}
                                />
                            ) : (
                                data?.description || 'Jaqueta masculina de seda com listras, com bolsos laterais e fechamento em zíper. Composição: 100% poliéster.'
                            )
                        }</div>
                    </div>
                    <div className={'w-full h-[2px] bg-[#f6f6f6]'}/>
                    <div className={'font-montserrat font-bold text-[15px]'}>
                        Entrega e devolução
                        <div
                            className={'text-[10px] font-oxygen'}>{'Entrega em até 10 dias úteis. Devolução grátis em até 7 dias.'}</div>
                    </div>
                </div>
            </div>
            <div className={'font-montserrat font-bold text-[15px] pl-3 pb-3'}>
                Avaliações
            </div>
            <div className={'font-montserrat font-bold text-[15px] pl-3 pb-3'}>
                Recomendações
            </div>
        </form>
    );
}
