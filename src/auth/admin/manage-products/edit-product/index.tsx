// import {useState} from "react";
import Filter from "../add-product/filter";
// import GenericProductDetail from "../../../../components/generic-product-detail";

export default function EditProduct() {
    // const [isSelected, setIsSelected] = useState<boolean>(false);

    return (
        <div className={'w-full h-full'}>
            <div className={'w-full h-full flex-col'}>
                <div
                    className={'w-full h-full flex font-bold font-oxygen text-[18px] text-center justify-center items-center'}>Filtrar
                </div>
                <div className={'w-full h-full inline-flex'}>
                    <Filter type={'Categoria'}/>
                    <Filter type={'Cor'}/>
                    <Filter type={'Tamanho'}/>
                    <Filter type={'Gênero'}/>
                </div>
            </div>
            {/*{isSelected && (*/}
            {/*    <div>*/}
            {/*        <GenericProductDetail isEdit={true}/>*/}
            {/*    </div>*/}
            {/*)}*/}
        </div>
    );
}
