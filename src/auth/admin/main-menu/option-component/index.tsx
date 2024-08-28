import {useNavigate} from "react-router-dom";

interface AdminMenuOptionProps {
    icon: string;
    title: string;
    details: string;
    route:string;
}

export default function AdminMenuOption({icon, title, details, route}: AdminMenuOptionProps) {
    const navigate = useNavigate();
    return (
        <button
            className={'lg:w-[200px] xs:w-full ls:h-[200px] xs:h-[150px] p-4 bg-zinc-400 rounded-[20px] border-4 border-[#f6f6f6] hover:shadow-2xl hover:shadow-amber-950 transition-shadow duration-300'}
            onClick={() => navigate(route)}
        >
            <div className={'w-full h-full inline-flex'}>
                <div className={'sm:w-[45px] xs:w-[35px] sm:h-[45px] xs:h-[35px] flex rounded-full border-2 border-amber-500 items-center justify-center bg-amber-500'}>
                    <img alt={'Icone'} src={icon} className={'text-black xs:w-[15px]'}/>
                </div>
                <div>
                    <div className={'w-full text-start text-[18px] font-montserrat font-bold p-1'}>
                        {title}
                    </div>
                    <div className={'w-full text-start p-1 font-oxygen xs:text-[10px] lg:text-[16px]'}>
                        {details}
                    </div>
                </div>
            </div>
        </button>
    )
}