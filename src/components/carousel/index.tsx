import creditCardIcon from './../../assets/icons/credit-card.svg';
import carouselPic from './../../assets/carousel/clothes.png';
import Description from "./description";

export default function Carousel() {
    return (
        <div className={'w-full h-full'}>
            <div className={'w-full h-full'}>
                <img src={carouselPic} className={'w-full'}/>
            </div>
            <div className={'w-full h-[68px] bg-[#F5F5F5] border-b-[#E2E2E2] border inline-flex items-center justify-center gap-32'}>
                <Description hasRightPipe={true} icon={creditCardIcon} title={'CARTÃO'} subtitle={'8x sem juros'} />
                <Description hasRightPipe={true} icon={creditCardIcon} title={'TROCA FÁCIL'} subtitle={'30 dias para trocas'} />
                <Description hasRightPipe={true} icon={creditCardIcon} title={'ENTREGA'} subtitle={'Envio rápido'} />
                <Description hasRightPipe={false} icon={creditCardIcon} title={'OS MELHORES LOOKS'} subtitle={'Várias opções disponíveis'} />
            </div>
        </div>
    )
}