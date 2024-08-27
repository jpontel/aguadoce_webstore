export default function Footer() {
    return (
        <div>
            <div className={'bg-[#F5F5F5] p-3'}>
                <div className={'flex items-center justify-center'}>
                    <div className={'inline-flex gap-[500px] justify-between'}>
                        <div className={'font-montserrat w-[320px] font-semibold'}>
                            Cadastre-se em nossa newsletter para receber novidades em primeira mão
                        </div>
                        <div className={'gap-4 flex items-center justify-center'}>
                            <input className={'rounded-[7px] h-[31px] pl-[10px] text-[13px]'} type="text" placeholder="Nome"/>
                            <input className={'rounded-[7px] h-[31px] pl-[10px] text-[13px]'} type="text" placeholder="E-mail"/>
                            <button className={'font-bold text-white font-montserrat text-[12px] rounded-lg bg-orange-500 p-[6px] w-[100px]'}>
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