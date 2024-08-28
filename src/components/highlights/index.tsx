import Block from "./block";

export default function Highlights() {
    return (
        <div className={'w-full items-center justify-center flex-col xs:mt-9 lg:mt-24'}>
            <div className={'w-full justify-center flex font-koulen lg:text-[40px] xs:text-[25px]'}>
                DESTAQUES DA SEMANA
            </div>
            <div className="w-full h-5 relative flex justify-center items-center text-center">
                <div className="text-center text-neutral-950 font-normal lg:text-[25px] xs:text-[13px]">
                    Produtos recomendados da loja para você
                </div>
            </div>
            <div className={'w-full flex lg:inline-flex xs:flex-col lg:gap-24 xs:gap-4 lg:py-12 xs:py-8 xs:px-6 lg:px-0 items-center justify-center'}>
                <Block img={'Produto 1'} />
                <Block img={'Produto 1'} />
                <Block img={'Produto 1'} />
            </div>
        </div>
    )
}