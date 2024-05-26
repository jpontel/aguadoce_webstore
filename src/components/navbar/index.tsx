import aguaDoceLogo from '../../assets/logo/agua-doce.svg';
import favoriteIcon from '../../assets/icons/favorite.svg';
import searchIcon from '../../assets/icons/search.svg';
import userIcon from '../../assets/icons/profile.svg';
import cartIcon from '../../assets/icons/cart.svg';
import './style/style.css';

export default function Navbar() {
    return (
        <div className={'w-full h-full bg-black flex'} style={{boxShadow: '0px 4px 60px 0px rgba(0, 0, 0, 0.25)'}}>
            <div className={'w-full inline-flex text-white p-6 gap-32 items-center mx-56'}>
                <div className={'w-full'}>
                    <img alt={'Água Doce Logo'} src={aguaDoceLogo}/>
                </div>
                <div className={'w-full inline-flex gap-32 items-center font-montserrat font-semibold'}>
                    <button>
                        Masculino
                    </button>
                    <button>
                        Feminino
                    </button>
                    <button>
                        Marcas
                    </button>
                </div>
                <div className={'items-end justify-end w-full inline-flex gap-10'}>
                    <button>
                        <img src={searchIcon}/>
                    </button>
                    <button>
                        <img src={userIcon}/>
                    </button>
                    <button className="favorite-icon">
                        <img src={favoriteIcon} alt="Favorite"/>
                    </button>
                    <button>
                        <img src={cartIcon}/>
                    </button>
                </div>
            </div>
        </div>
    )
}