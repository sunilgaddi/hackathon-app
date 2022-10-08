import '../css/Header.css'
import logo from '../assets/logos/dphilogo.png'

const Header = () => {
    return(
        <header>
            <div className='logo__ctr'>
                <img className='logo' src={logo} alt='dphi__logo' />
            </div>
        </header>
    )
}

export default Header;