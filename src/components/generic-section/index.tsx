import VerMaisButton from "../ver-mais";
import React, {Fragment} from "react";
import './style/style.css';

interface GenericSectionProps {
    action: () => void;
    children: React.ReactNode;
    title: string;
    subtitle: string;
}

export default function GenericSection({children, title, subtitle, action}: GenericSectionProps) {
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
                <VerMaisButton action={action} />
            </div>
        </Fragment>
    )
}