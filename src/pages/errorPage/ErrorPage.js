import './errorPage.scss'
import Header from "../../components/header/Header";
import { Link } from 'react-router-dom';

function ErrorPage() {
    return (
        <div className='ErrorPage'>
            <Header />
            <div className="errorPage_infos">
                <h1 className='errorPage_infos_title'>404</h1>
                <p className='errorPage_infos_content'>Oups! La page que vous demandez n'existe pas.</p>
            </div>
                <Link className='errorPage_infos_return' to='/'>Retourner sur la page d'accueil</Link>     
        </div>
    )
}

export default ErrorPage;