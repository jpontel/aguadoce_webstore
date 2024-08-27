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
                    className={'w-[200px] flex flex-col text-start justify-start items-start gap-2 absolute p-8 rounded-lg border-2 border-[#f6f6f6] font-bold text-black z-50'}
                    ref={modalRef}
                    style={{ background: 'rgba(246, 246, 246, 0.90)', pointerEvents: 'auto' }}
                >
                    <div className={'w-full items-center text-center flex justify-center'}>Menu</div>
                    <button onClick={() => navigate('/masculino')}>Masculino</button>
                    <button onClick={() => navigate('/feminino')}>Feminino</button>
                    <button onClick={() => navigate('/marcas')}>Marcas</button>
                </div>
            )}
        </div>
    );
}

