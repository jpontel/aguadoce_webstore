interface GenericBlocksProps {
    title: string;
    subtitle: string;
}

export default function GenericBlocks({title, subtitle}: GenericBlocksProps) {
    return (
        <div className={'items-center justify-center text-center mt-32 mb-12'}>
            <div className={'w-full flex-col justify-center items-center mb-8'}>
                <div className={'font-koulen text-[40px] mb-3'}>
                    {title}
                </div>
                <div className={'text-[18px]'}>
                    {subtitle}
                </div>
            </div>
            <div className={'flex items-center justify-center gap-6'}>
                <div className={'h-[534.51px] w-[408px] rounded-[15px] bg-[#A6A6A6]'}>
                    Bloco 1
                </div>
                <div className={'flex-col justify-between flex gap-8'}>
                    <div className={'h-[250.06px] w-[408px] rounded-[15px] bg-[#A6A6A6]'}>
                        Bloco 2
                    </div>
                    <div className={'h-[250.06px] w-[408px] rounded-[15px] bg-[#A6A6A6]'}>
                        Bloco 3
                    </div>
                </div>
                <div className={'h-[534.51px] w-[408px] rounded-[15px] bg-[#A6A6A6]'}>
                    Bloco 4
                </div>
            </div>
        </div>
    )
}