import '../css/Header.css'
import logo from '../assets/logos/dphilogo.png'
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <header>
            <div className='logo__ctr'>
               <Link to='/dashboard'> <img className='logo' src={logo} alt='dphi__logo' /></Link>
            </div>
        </header>
    )
}

export default Header;