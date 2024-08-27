interface VerMaisButtonProps {
    action: () => void;
}

export default function VerMaisButton({action}:VerMaisButtonProps) {
    return (
        <button
            className={'border-black border-2 xs:rounded-[7px] lg:rounded-[10px] font-bold px-[30px] py-[2px] text-center xs:text-[12px] lg:text-[17px] transition-colors ease-in-out hover:bg-orange-400 hover:text-white hover:shadow-2xl shadow-amber-950'}
            onClick={action}
        >
            VER MAIS
        </button>
    )
}