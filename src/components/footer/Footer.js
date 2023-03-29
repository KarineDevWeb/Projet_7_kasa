import'./footer.scss'
import logo from '../../assets/logo_black.jpg'

export default function Footer() {
    return (
        <footer className="footer">
            <img src={logo} alt="kasa" className='footer_img'/>
        <p className='footer_copyright'>© 2020 Kasa. All rights reserved</p>
    </footer>
     )
 }
 