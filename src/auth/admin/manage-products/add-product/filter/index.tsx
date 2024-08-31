interface FilterProps {
    type: string;
}

export default function Filter({type}: FilterProps) {
    let options;

    switch (type) {
        case 'Categorias':
            options = (
                <select className="w-full p-1 rounded-[10px] text-[13px] font-oxygen">
                    <option value="categoria1">Categoria 1</option>
                    <option value="categoria2">Categoria 2</option>
                    <option value="categoria3">Categoria 3</option>
                </select>
            );
            break;
        case 'Gênero':
            options = (
                <div className="w-full p-1 rounded-[10px] text-[13px] font-oxygen">
                    <label>
                        <input type="radio" name="gender" value="masculino"/> Masculino
                    </label>
                    <label>
                        <input type="radio" name="gender" value="feminino"/> Feminino
                    </label>
                    <label>
                        <input type="radio" name="gender" value="unissex"/> Unissex
                    </label>
                </div>
            );
            break;
        case 'Tamanho':
            options = (
                <div className="w-full p-1 rounded-[10px] text-[13px] font-oxygen">
                    <label>
                        <input type="checkbox" value="P"/> P
                    </label>
                    <label>
                        <input type="checkbox" value="M"/> M
                    </label>
                    <label>
                        <input type="checkbox" value="G"/> G
                    </label>
                    <label>
                        <input type="checkbox" value="GG"/> GG
                    </label>
                </div>
            );
            break;
        case 'Cor':
            options = (
                <div className="w-full p-1 rounded-[10px] text-[13px] font-oxygen">
                    <label>
                        <input type="checkbox" value="verde"/> Verde
                    </label>
                    <label>
                        <input type="checkbox" value="amarelo"/> Amarelo
                    </label>
                    <label>
                        <input type="checkbox" value="rosa"/> Rosa
                    </label>
                    <label>
                        <input type="checkbox" value="vermelho"/> Vermelho
                    </label>
                </div>
            );
            break;
        default:
            options = <div className="w-full p-1 rounded-[10px] text-[13px] font-oxygen">Opção inválida</div>;
    }

    return (
        <div className="w-full h-full">
            <div className="w-full p-1 rounded-[10px] text-[13px] font-montserrat font-bold">
                {type}
            </div>
            <div className={'font-oxygen text-[10px] flex gap-6'}>
                {options}
            </div>
        </div>
    );
}
