import { useNavigate } from "react-router-dom";
import useIsMobile from "../../../hooks/useMobile.ts";

export default function ManageProducts() {
    const navigate = useNavigate();
    const isMobile = useIsMobile();

    return (
        <div className="w-full h-[100vh] relative z-50">
            <div className="w-full p-1 text-center justify-center items-center flex">Gerenciar Produtos</div>
            <div className={`${isMobile ? 'flex flex-col' : 'inline-flex'} w-full h-full items-center justify-center gap-4 z-50`}>
                <button
                    className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                    onClick={() => navigate('/admin/manage-products/add-product')}
                >
                    Adicionar produto
                </button>
                <button
                    className="p-2 bg-red-500 text-white rounded hover:bg-red-700"
                    onClick={() => console.log('Remover produto')}
                >
                    Remover produto
                </button>
                <button
                    className="p-2 bg-green-500 text-white rounded hover:bg-green-700"
                    onClick={() => console.log('Editar produto')}
                >
                    Editar produto
                </button>
            </div>
        </div>
    );
}