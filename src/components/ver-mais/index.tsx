interface VerMaisButtonProps {
    action: () => void;
}

export default function VerMaisButton({action}:VerMaisButtonProps) {
    return (
        <button
            className={'border-black border-2 rounded-[10px] font-montserrat font-bold px-[45px] py-[2px] text-center text-[14px]'}
            onClick={action}
        >
            VER MAIS
        </button>
    )
}