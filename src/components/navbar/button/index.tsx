// src/option-component/navbar/button/index.tsx
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MenuButton() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const modalRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const handleClick = () => {
        setIsOpen(true);
    };

    const handleClose = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    const handleNavigate = (path: string) => {
        navigate(path);
        setIsOpen(false);
    };

    const checkAdmin = () => {
        const role = localStorage.getItem('role');
        console.log(role);
        return role === 'admin';
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClose);
        return () => {
            document.removeEventListener('mousedown', handleClose);
        };
    }, []);

    return (
        <div>
            <div className={'items-center justify-center flex h-full'}>
                <button className={'flex flex-col gap-1'} onClick={handleClick}>
                    <div className="w-[18px] h-[2px] bg-white rounded-full" />
                    <div className="w-[18px] h-[2px] bg-white rounded-full" />
                    <div className="w-[18px] h-[2px] bg-white rounded-full" />
                </button>
            </div>
            {isOpen && (
                <div
                    className={'w-[200px] flex flex-col text-start justify-start items-start gap-2 absolute p-8 rounded-lg border-2 border-[#f6f6f6] text-black z-50'}
                    ref={modalRef}
                    style={{background: 'rgba(246, 246, 246, 0.90)', pointerEvents: 'auto'}}
                >
                    <div className={'w-full items-center text-center flex font-bold justify-center '}>Menu</div>
                    <button className={'p-1 border-b-2 border-zinc-350'} onClick={() => handleNavigate('/masculino')}>Masculino</button>
                    <button className={'p-1 border-b-2 border-zinc-350'} onClick={() => handleNavigate('/feminino')}>Feminino</button>
                    <button className={'p-1 border-b-2 border-zinc-350'} onClick={() => handleNavigate('/marcas')}>Marcas</button>
                    {checkAdmin() && (
                        <button className={'p-1 border-b-2 border-zinc-350 mb-2 text-red-800 font-bold'} onClick={() => handleNavigate('/admin')}>Admin Menu</button>
                    )}
                    <div className={'w-full p-1 font-montserrat font-bold text-[12px] text-white items-center justify-center flex rounded-lg bg-amber-600'}>
                        <button onClick={() => handleNavigate('/login')}>Login</button>
                    </div>
                </div>
            )}
        </div>
    );
}
