import {useEffect, useRef, useState} from "react";

export default function MenuButton() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const modalRef = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        setIsOpen(true);
    };

    const handleClose = (event:MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClose);
        return () => {
            document.removeEventListener('mousedown', handleClose);
        }
    }, []);

    return (
        <div>
            <div>
                <button className={'flex flex-col gap-1'} onClick={handleClick}>
                    <div className="w-[20px] h-[3px] bg-white rounded-full"/>
                    <div className="w-[20px] h-[3px] bg-white rounded-full"/>
                    <div className="w-[20px] h-[3px] bg-white rounded-full"/>
                </button>
            </div>
            {isOpen &&  (
                <div className={'flex flex-col gap-2 absolute p-8 rounded-lg border-2 border-[#f6f6f6] font-bold text-black'} ref={modalRef} style={{background: 'rgba(246, 246, 246, 0.60)'}}>
                    <a href={'#'}>Home</a>
                    <a href={'#'}>About</a>
                    <a href={'#'}>Services</a>
                    <a href={'#'}>Contact</a>
                </div>
            )}
        </div>
    )
}

