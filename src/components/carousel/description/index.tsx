interface DescriptionProps {
    hasRightPipe:boolean;
    icon:string;
    title:string;
    subtitle:string;
}

export default function Description({hasRightPipe, icon, title, subtitle}:DescriptionProps) {
    return (
        <div className={'inline-flex items-center gap-2'}>
            <img src={icon} className={'w-[31px] h-[29px]'} alt={'icon'}/>
            <div className={'flex flex-col font-montserrat'}>
                <div className={'font-semibold text-[12px]'}>{title}</div>
                <div className={'text-[#606060] text-[10px]'}>{subtitle}</div>
            </div>
            {hasRightPipe && (
                <div className={'w-[1px] h-[32px] bg-[#C4C4C4] ml-[106px]'} />
            )}
        </div>
    )
}
