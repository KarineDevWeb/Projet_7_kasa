import './home.scss'
import Header from '../../components/header/Header'
import Banner from "../../components/banner/Banner"
import Pictures from '../../components/pictures/Pictures'
import Footer from '../../components/footer/Footer'

export default function Home() {
    return (
        <div className='home'>
            <Header />
            <Banner />
            <Pictures/>
            <Footer/>    
        </div>
    )
}