import { useState, useEffect } from 'react';
import creditCardIcon from './../../assets/icons/credit-card.svg';
import carouselPic from './../../assets/carousel/clothes.png';
import trocaIcon from './../../assets/icons/troca-facil.svg';
import Description from "./description";

const descriptions = [
    { icon: creditCardIcon, title: 'CARTÃO', subtitle: '10x sem juros' },
    { icon: trocaIcon, title: 'TROCA FÁCIL', subtitle: '30 dias para trocas' },
    { icon: creditCardIcon, title: 'ENTREGA', subtitle: 'Envio rápido' },
    { icon: creditCardIcon, title: 'OS MELHORES LOOKS', subtitle: 'Várias opções disponíveis' }
];

export default function Carousel() {
    const [visibleDescriptions, setVisibleDescriptions] = useState([0, 1]);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleDescriptions(prev => {
                const nextIndex = (prev[1] + 1) % descriptions.length;
                return [nextIndex, (nextIndex + 1) % descriptions.length];
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const isMobile = window.innerWidth < 360;

    return (
        <div className={'w-full h-full'}>
            <div className={'w-full h-full'}>
                <img src={carouselPic} className={'w-full'} />
            </div>
            <div className={'w-full lg:h-[68px] xs:h-[40px] bg-[#F5F5F5] border-b-[#E2E2E2] border inline-flex items-center justify-center lg:gap-32 xs:gap-3'}>
                {isMobile
                    ? visibleDescriptions.map(index => (
                        <Description
                            key={index}
                            hasRightPipe={index !== visibleDescriptions[1]}
                            icon={descriptions[index].icon}
                            title={descriptions[index].title}
                            subtitle={descriptions[index].subtitle}
                        />
                    ))
                    : descriptions.map((desc, index) => (
                        <Description
                            key={index}
                            hasRightPipe={index !== descriptions.length - 1}
                            icon={desc.icon}
                            title={desc.title}
                            subtitle={desc.subtitle}
                        />
                    ))
                }
            </div>
        </div>
    );
}