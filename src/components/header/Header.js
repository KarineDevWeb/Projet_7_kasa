import "./Header.scss";
import Logo from '../../assets/logo.jpg'
import Navbar from '../navbar/Navbar'

function Header() {
    return (
    <header className='header'>
        <h1>
        <img src={Logo} alt="kasa"/>
        </h1>
        <Navbar />
    </header>
    )
}

export default Header;