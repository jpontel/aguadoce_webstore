import {GenericClothesProps} from "../../components/generic-clothes";
import GenericSection from "../../components/generic-section";
import GenericClothes from "../../components/generic-clothes";
import Carousel from "../../components/carousel";
import {useState} from "react";

export default function Home() {
    const [data, setData] = useState<GenericClothesProps[]>([{
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

    return (
        <div>
            <div>
                <Carousel/>
            </div>
            <GenericSection
                title={'Novidades'}
                subtitle={'As melhores novidades da temporada'}
                children={
                    data.map((item, index) => (
                        <GenericClothes
                            previousValue={item.previousValue}
                            hasDiscount={item.hasDiscount}
                            title={item.title}
                            value={item.value}
                            key={index}
                        />
                    ))
                }/>
            <div>

            </div>
        </div>
    )
}