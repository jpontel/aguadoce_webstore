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
            <div className={'lg:px-32 xs:pt-8 lg:pt-24 lg:ml-28 xs:ml-3 sm:ml-4'}>
                <div className={'font-koulen lg:text-[40px] xs:text-[25px]'}>
                    {title}
                </div>
                <div className={'lg:text-[25px] xs:text-[13px] font-normal mb-5'}>
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