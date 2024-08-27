import product from './../../assets/store-jacket.png';
import SelectGeneric from "../select-generic";

function addBusinessDays(startDate: Date, days: number): Date {
    const currentDate = new Date(startDate);
    let addedDays = 0;
    while (addedDays < days) {
        currentDate.setDate(currentDate.getDate() + 1);
        if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
            addedDays++;
        }
    }
    return currentDate;
}

function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
}

export default function GenericProductDetail() {
    const route = 'Masculino > Jaquetas > Jaqueta Masculina';
    const text = 'Jaqueta masculina de seda com listras';
    const price = 199.90;
    const parcelaValue = 12;
    const options = ['P', 'M', 'G', 'GG'];
    const detail = 'Jaqueta masculina de seda com listras, com bolsos laterais e fechamento em zíper. Composição: 100% poliéster.';
    const deliverDetail = 'Entrega em até 10 dias úteis. Devolução grátis em até 7 dias.';
    const deliveryDate = formatDate(addBusinessDays(new Date(), 10));

    return (
        <div className={'w-full h-full border-y border-[#f6f6f6] mb-12'}>
            <div className={'my-2 font-montserrat xs:text-[12px] ml-3'}>
                {route}
            </div>
            <div className={'w-full'}>
                <img className={'w-full h-full border-b-2 border-[#f6f6f6]'} src={product} alt="Product Name"/>
                <div className={'p-3 flex flex-col'}>
                    <div className={'flex justify-start items-start text-black font-bold text-[20px] font-montserrat '}>
                        Jaqueta Masculina
                    </div>
                    <div>
                        <p className={'font-oxygen xs:text-[12px]'}>{text}</p>
                    </div>
                </div>
                <div className={'flex flex-col pl-3 font-oxygen'}>
                    <div className={'font-bold'}>
                        R${price}
                    </div>
                    <div className={'text-[10px]'}>
                        {parcelaValue} x de R${(price / parcelaValue).toFixed(2)}
                    </div>
                </div>
                <div className={'w-full h-full items-center justify-center flex flex-col pr-3 gap-3'}>
                    <div className={'w-full px-3 gap-3 flex'}>
                        <SelectGeneric id={'size-select'} label={'Selecione um tamanho'} options={options}/>
                    </div>
                    <div className={'mb-3 w-full px-3 text-center'}>
                        <button className={'w-full p-1 flex bg-amber-500 rounded-[5px] text-[12px] text-white text-center items-center justify-center font-bold'}>
                            Comprar
                        </button>
                    </div>
                    <div className={'flex flex-col text-[12px] text-start justify-start w-full pl-3 font-montserrat'}>
                        <div className={'font-bold'}>PREVISÃO DE ENTREGA:</div>
                        <p className={'font-oxygen'}>{deliveryDate}</p>
                    </div>
                </div>
                <div className={'w-full p-3 flex flex-col gap-2'}>
                    <div className={'font-montserrat font-bold text-[15px]'}>
                        Detalhes
                        <div className={'text-[10px] font-oxygen'}>{detail}</div>
                    </div>
                    <div className={'w-full h-[2px] bg-[#f6f6f6]'}/>
                    <div className={'font-montserrat font-bold text-[15px]'}>
                        Entrega e devolução
                        <div className={'text-[10px] font-oxygen'}>{deliverDetail}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}