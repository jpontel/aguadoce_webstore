import instagramIcon from './../../assets/icons/instagram.png';
import facebookIcon from './../../assets/icons/facebook.png';
import linkedinIcon from './../../assets/icons/linkedin.png';


export default function SocialMedia() {
    return(
        <div className={'pt-12'}>
            <div className={'font-koulen text-[40px] w-full items-center text-center '}>
                Estamos tambem nas redes sociais
            </div>
            <div className={'w-full flex items-center justify-center mt-6 mb-20 gap-12'}>
                <div className={'rounded-full w-[80px] h-[80px]'}>
                    <img src={instagramIcon} alt={'Instagram'} className={''}/>
                </div>
                <div className={'rounded-full w-[80px] h-[80px]'}>
                    <img src={facebookIcon} alt={'Instagram'} className={''}/>
                </div>
                <div className={'rounded-full w-[80px] h-[80px]'}>
                    <img src={linkedinIcon} alt={'Instagram'} className={''}/>
                </div>
            </div>
        </div>
    )
}