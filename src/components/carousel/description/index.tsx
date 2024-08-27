interface DescriptionProps {
    hasRightPipe: boolean;
    icon: string;
    title: string;
    subtitle: string;
}

export default function Description({hasRightPipe, icon, title, subtitle}: DescriptionProps) {
    return (
        <div className={'inline-flex items-center gap-2'}>
            <img src={icon} className={'lg:w-[31px] sm:w-[18px] lg:h-[29px] sm:h-[19px] xs:h-[16px]'} alt={'icon'}/>
            <div className={'sm:w-[50px] lg:w-[100px] xs:w-[40px] flex flex-col font-montserrat'}>
                <div className={'font-semibold xs:text-[5px] sm:text-[6px] lg:text-[12px]'}>{title}</div>
                <div className={'text-[#606060] sm:text-[6px] xs:text-[5px] lg:text-[10px] w-full flex'}>{subtitle}</div>
            </div>
            {hasRightPipe && (
                <div className={'w-[1px] xs:h-[20px] lg:h-[32px] bg-[#C4C4C4] xs:ml-[13px] lg:ml-[106px]'}/>
            )}
        </div>
    )
}


