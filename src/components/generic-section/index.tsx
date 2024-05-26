import './style/style.css';
import React, {Fragment} from "react";

interface GenericSectionProps {
    children: React.ReactNode;
    subtitle: string;
    title: string;
}

export default function GenericSection({children, title, subtitle}: GenericSectionProps) {
    return (
        <Fragment>
            <div className={'px-32 pt-24 ml-28'}>
                <div className={'font-koulen text-[40px]'}>
                    {title}
                </div>
                <div className={'text-[25px] font-normal mb-5'}>
                    {subtitle}
                </div>
                <div className={'inline-flex gap-7 children-container'}>
                    {children}
                </div>
            </div>
            <div className={'w-full mt-12 items-center justify-center flex'}>
                <button className={'border-black border-2 rounded-[10px] font-koulen px-[45px] py-[2px] text-center'}>
                    VER MAIS
                </button>
            </div>
        </Fragment>
    )
}