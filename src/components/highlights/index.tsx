export default function Highlights() {
    return (
        <div className={'w-full items-center justify-center flex-col mt-24'}>
            <div className={'w-full justify-center flex font-koulen text-[40px]'}>
                DESTAQUES DA SEMANA
            </div>
            <div className="w-full h-5 relative flex justify-center items-center text-center">
                <div className="text-center text-neutral-950 font-normal">
                    PRODUTOS RECOMENDADOS
                </div>
            </div>
            <div className={'w-full items-center justify-center flex gap-24 py-12'}>
                <div className={'w-[400px] h-[550px] bg-black'}>
                    oiee
                </div>
                <div className={'w-[400px] h-[550px] bg-purple-300'}>
                    oiee
                </div>
                <div className={'w-[400px] h-[550px] bg-yellow-300'}>
                    oiee
                </div>
            </div>
        </div>
    )
}