import { useNavigate } from "react-router-dom";

export default function AddProduct() {
    const navigate = useNavigate();
    return (
        <div className="relative z-50 p-4 bg-white rounded-lg shadow-lg">
            <button
                className="font-oxygen p-1 text-[12px] bg-red-200 rounded-lg mb-4"
                onClick={() => navigate('/admin')}
            >
                Voltar
            </button>
            <form className="space-y-4">
                <input className="p-2 rounded-lg text-[15px] w-full border border-[#f6f6f6] bg-white shadow-lg" type="text" placeholder="Nome" />
                <input className="p-2 rounded-lg text-[15px] w-full border border-[#f6f6f6] bg-white shadow-lg" type="text" placeholder="Descrição" />
                <input className="p-2 rounded-lg text-[15px] w-full border border-[#f6f6f6] bg-white shadow-lg" type="text" placeholder="Qtde. Estoque" />
                <input className="p-2 rounded-lg text-[15px] w-full border border-[#f6f6f6] bg-white shadow-lg" type="text" placeholder="Categoria" />
                <input className="p-2 rounded-lg text-[15px] w-full border border-[#f6f6f6] bg-white shadow-lg" type="text" placeholder="Gênero" />
                <div className="text-[15px]">Variação</div>
                <input className="p-2 rounded-lg text-[15px] w-full border border-[#f6f6f6] bg-white shadow-lg" type="text" placeholder="Tamanho" />
                <input className="p-2 rounded-lg text-[15px] w-full border border-[#f6f6f6] bg-white shadow-lg" type="text" placeholder="Cor" />
                <input className="p-2 rounded-lg text-[15px] w-full border border-[#f6f6f6] bg-white shadow-lg" type="text" placeholder="Preço" />
                <input className="p-2 rounded-lg text-[15px] w-full border border-[#f6f6f6] bg-white shadow-lg" type="text" placeholder="Qtde. Estoque" />
                <input className="p-2 rounded-lg text-[15px] w-full border border-[#f6f6f6] bg-white shadow-lg" type="text" placeholder="Imagem URL upload" />
            </form>
        </div>
    );
}