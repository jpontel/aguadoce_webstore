import {GenericClothesProps} from "../../components/generic-clothes";
import GenericSection from "../../components/generic-section";
import GenericClothes from "../../components/generic-clothes";
import GenericBlocks from "../../components/generic-blocks";
import SocialMedia from "../../components/social-media";
import Highlights from "../../components/highlights";
import Carousel from "../../components/carousel";
import Footer from "../../components/footer";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

export default function Home() {
    const [data, setData] = useState<GenericClothesProps[]>([]);
    const [bestSellerData, setBestSellerData] = useState<GenericClothesProps[]>([]);
    const navigate = useNavigate();

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
        setBestSellerData([{
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
        },{
            hasDiscount: false,
            title: 'Jaqueta Jeans Masculina',
            value: 1800.00
        }]);
    },[]);

    return (
        <div>
            <div>
                <Carousel/>
            </div>
            <GenericSection
                title={'BEST-SELLERS'}
                subtitle={'Os favoritos das nossas araras virtuais'}
                action={() => navigate('/best-sellers')}
                children={
                    bestSellerData.map((item, index) => (
                        <GenericClothes
                            previousValue={item.previousValue}
                            hasDiscount={item.hasDiscount}
                            title={item.title}
                            value={item.value}
                            key={index}
                        />
                    ))
                }
            />
            <div>
                <Highlights/>
            </div>
            <GenericSection
                title={'Novidades'}
                subtitle={'As melhores novidades da temporada'}
                action={() => navigate('/novidades')}
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
            <GenericBlocks
                title={'Categorias'}
                subtitle={'Navegue através da nossa variedade de produtos e escolha qual mais se encaixa com a sua necessidade'}
            />
            <SocialMedia />
            <Footer/>
        </div>
    )
}