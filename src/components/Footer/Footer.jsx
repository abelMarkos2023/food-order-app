import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer" id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" className="logo" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, dolorum minus ullam eum distinctio animi minima repellendus corrupti possimus sunt excepturi fuga?</p>
                <div className="social-container">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Site Map</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+1 212-456-7890</li>
                    <li>Contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copy">
            Copy Right 2024 &copy; Tomato.com All Right Reserved
        </p>
    </div>
  )
}

export default Footer