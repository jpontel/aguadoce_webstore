export default function Footer() {
    return (
        <div>
            <div className={'w-full h-full bg-[#F5F5F5] p-3'}>
                <div className={'w-full h-full flex items-center justify-center'}>
                    <div className={'xs:flex flex-col lg:inline-flex xs:gap-[7px] lg:gap-[500px] justify-between'}>
                        <div className={'font-montserrat xs:w-full lg:w-[320px]  xs:text-[8px] lg:text-[10px] font-semibold'}>
                            Cadastre-se em nossa newsletter para receber novidades em primeira mão
                        </div>
                        <div className={'gap-4 flex items-center justify-center'}>
                            <input className={'xs:rounded-[5px] lg:rounded-[7px] xs:h-[20px] lg:h-[31px] pl-[10px] xs:text-[8px] lg:text-[13px]'} type="text" placeholder="Nome"/>
                            <input className={'xs:rounded-[5px] lg:rounded-[7px] xs:h-[20px] lg:h-[31px] pl-[10px] xs:text-[8px] lg:text-[13px]'} type="text" placeholder="E-mail"/>
                            <button className={'font-bold text-white font-montserrat xs:text-[8px] lg:text-[12px] xs:rounded-[5px] lg:rounded-lg bg-orange-500 xs:p-[3px] lg:p-[6px] xs:w-[50px] lg:w-[100px]'}>
                                Enviar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'w-full h-[200px] bg-black text-white'}>
                <div>
                    Sobre a loja
                </div>
            </div>
        </div>
    )
}