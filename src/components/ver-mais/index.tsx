interface VerMaisButtonProps {
    action: () => void;
}

export default function VerMaisButton({action}:VerMaisButtonProps) {
    return (
        <button
            className={'border-black border-2 rounded-[10px] font-koulen px-[45px] py-[2px] text-center'}
            onClick={action}
        >
            VER MAIS
        </button>
    )
}