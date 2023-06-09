import './navbar.scss'
import { Link } from 'react-router-dom';

export default function Navbar() {
// renvoie le chemin et le nom de fichier de la page en cours
    const currentRoute = window.location.pathname;

// Ajout d'accueil et à propos dans la barre de navigation
    return (
        <nav className='nav'>
            <ul className='nav_list'>
                <li className={currentRoute === '/' ? 'nav_list_item_active' : 'nav_list_item'}>
                    <Link to='/'>Accueil</Link>
                </li>
                <li className={currentRoute === '/about' ? 'nav_list_item_active' : 'nav_list_item'}>
                    <Link to='/about'>A propos</Link>
                </li>
            </ul>
        </nav>
    )
}