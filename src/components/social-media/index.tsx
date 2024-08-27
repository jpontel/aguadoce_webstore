import instagramIcon from './../../assets/icons/instagram.png';
import facebookIcon from './../../assets/icons/facebook.png';
import linkedinIcon from './../../assets/icons/linkedin.png';

export default function SocialMedia() {
    return(
        <div className={'pt-12'}>
            <div className={'font-koulen xs:text-[20px] lg:text-[40px] w-full items-center text-center '}>
                Estamos tambem nas redes sociais
            </div>
            <div className={'w-full flex items-center justify-center mt-6 mb-20 xs:gap-8 lg:gap-12'}>
                <div className={'rounded-full xs:w-[30px] lg:w-[80px] lg:h-[80px] xs:h-[20px]'}>
                    <img src={instagramIcon} alt={'Instagram'} className={''}/>
                </div>
                <div className={'rounded-full xs:w-[30px] lg:w-[80px] lg:h-[80px] xs:h-[20px]'}>
                    <img src={facebookIcon} alt={'Instagram'} className={''}/>
                </div>
                <div className={'rounded-full xs:w-[30px] lg:w-[80px] lg:h-[80px] xs:h-[20px]'}>
                    <img src={linkedinIcon} alt={'Instagram'} className={''}/>
                </div>
            </div>
        </div>
    )
}