import aguaDoceLogo from '../../assets/logo/agua-doce.svg';
import favoriteIcon from '../../assets/icons/favorite.svg';
import searchIcon from '../../assets/icons/search.svg';
import cartIcon from '../../assets/icons/cart.svg';
import {useNavigate} from "react-router-dom";
import './style/style.css';

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <div className={'w-full h-full bg-black flex'} style={{boxShadow: '0px 4px 60px 0px rgba(0, 0, 0, 0.25)'}}>
            <div className={'w-full inline-flex text-white p-6 gap-32 items-center mx-56'}>
                <button
                    className={'w-full'}
                    onClick={() => navigate('/')}
                >
                    <img alt={'Água Doce Logo'} src={aguaDoceLogo}/>
                </button>
                <div className={'w-full inline-flex gap-32 items-center font-montserrat font-semibold'}>
                    <button
                        className={'transition-colors hover:text-orange-500'}
                        onClick={() => navigate('/masculino')}
                    >
                        Masculino
                    </button>
                    <button
                        className={'transition-colors hover:text-orange-500'}
                        onClick={() => navigate('/feminino')}
                    >
                        Feminino
                    </button>
                    <button
                        className={'transition-colors hover:text-orange-500'}
                        onClick={() => navigate('/marcas')}
                    >
                        Marcas
                    </button>
                </div>
                <div className={'items-end justify-end w-full inline-flex gap-10'}>
                    <button>
                        <img src={searchIcon} alt={'Search'} className={'user-icon-head'}/>
                    </button>
                    <button className={'user-icon'}>
                        <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="head">
                                <path
                                    d="M11.5963 10.7688C14.527 10.7688 16.9007 8.39513 16.9007 5.46446C16.9007 2.5338 14.527 0.160095 11.5963 0.160095C8.66562 0.160095 6.29192 2.5338 6.29192 5.46446C6.29192 8.39513 8.66562 10.7688 11.5963 10.7688Z"
                                    fill="white"/>
                            </g>
                            <g id="body">
                                <path
                                    d="M11.5963 13.421C8.05562 13.421 0.987549 15.198 0.987549 18.7254V20.0515C0.987549 20.7808 1.58429 21.3776 2.31364 21.3776H20.8789C21.6083 21.3776 22.205 20.7808 22.205 20.0515V18.7254C22.205 15.198 15.137 13.421 11.5963 13.421Z"
                                    fill="white"/>
                            </g>
                        </svg>
                    </button>
                    <button className="favorite-icon">
                        <img src={favoriteIcon} alt={"Favorite"}/>
                    </button>
                    <button
                        className={'user-icon-head'}
                        onClick={() => navigate('/cart')}
                    >
                        <img src={cartIcon} alt={'Cart'}/>
                    </button>
                </div>
            </div>
        </div>
    )
}