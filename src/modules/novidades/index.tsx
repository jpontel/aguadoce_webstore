import {useEffect, useState} from "react";
import {GenericClothesProps} from "../../components/generic-clothes";
import GenericProductPage from "../../components/generic-product-page";

export default function Novidades() {
    const [data, setData] = useState<GenericClothesProps[]>([]);

    useEffect(() => {
        setData([{
            hasDiscount: false,
            title: 'Jaqueta Jeans Masculina',
            value: 800.00
        }, {
            hasDiscount: false,
            title: 'Jaqueta Jeans Feminina',
            value: 600.00
        }, {
            hasDiscount: false,
            title: 'Jaqueta Jeans Masculina',
            value: 1800.00
        }, {
            hasDiscount: false,
            title: 'Jaqueta Jeans Masculina',
            value: 1800.00
        }, {
            hasDiscount: false,
            title: 'Jaqueta Jeans Masculina',
            value: 1800.00
        }, {
            hasDiscount: false,
            title: 'Jaqueta Jeans Masculina',
            value: 1800.00
        }, {
            hasDiscount: true,
            title: 'Jaqueta Jeans Masculina',
            value: 1800.00,
            previousValue: 2000.00
        }, {
            hasDiscount: false,
            title: 'Jaqueta Jeans Feminina',
            value: 200.00
        }]);
    }, []);

    return(
        <div>
            <GenericProductPage data={data} categories={['Cintos', 'Gola-Polo', 'Camisa', 'Básicas', 'Moletom']} title={'Novidades'} action={() => {}}/>
        </div>
    )
}