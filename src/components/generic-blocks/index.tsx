import useIsMobile from "../../hooks/useMobile.ts";
import styled from 'styled-components';

interface GenericBlocksProps {
    title: string;
    subtitle: string;
}

const StyledDiv = styled.div`
    height: 200px;
    width: 260px;
    border-radius: 15px;
    background-color: #A6A6A6;
`;

export default function GenericBlocks({title, subtitle}: GenericBlocksProps) {
    const isMobile = useIsMobile();
    return (
        <div className={'items-center justify-center text-center lg:mt-32 xs:mt-8 xs:mb-4 lg:mb-12'}>
            <div className={'w-full flex-col justify-center items-center mb-8 lg:px-0 xs:px-[10px]'}>
                <div className={'font-koulen xs:text-[25px] lg:text-[40px] mb-3'}>
                    {title}
                </div>
                <div className={'lg:text-[25px] xs:text-[13px]'}>
                    {subtitle}
                </div>
            </div>
            {isMobile ? (
                <div className={'flex-col justify-center items-center flex gap-4'}>
                    <StyledDiv>
                        Bloco 1
                    </StyledDiv>
                    <StyledDiv>
                        Bloco 2
                    </StyledDiv>
                    <StyledDiv className={'h-[250.06px] w-[408px] rounded-[15px] bg-[#A6A6A6]'}>
                        Bloco 3
                    </StyledDiv>
                    <StyledDiv className={'h-[250.06px] w-[408px] rounded-[15px] bg-[#A6A6A6]'}>
                        Bloco 4
                    </StyledDiv>
                </div>
            ) : (
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
            )}
        </div>
    )
}