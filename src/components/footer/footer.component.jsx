import { Link } from 'react-router-dom';
import './footer.styles.scss';
import {ReactComponent as InstagramIcon } from '../../assets/vector-graphics/instagram-icon.svg';
import {ReactComponent as TwitterIcon } from '../../assets/vector-graphics/twitter-icon.svg';
import {ReactComponent as YouTubeIcon } from '../../assets/vector-graphics/youtube-icon.svg';
import {ReactComponent as FacebookIcon } from '../../assets/vector-graphics/facebook-icon.svg';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-sections-container">

                <section className="footer-section">
                    <Link 
                        to="https://www.youtube.com/watch?v=iSGO--JdAUA&ab_channel=AThousandSunny54." 
                        target="_blank"
                        className="footer-text-link"
                    >Terms of Service</Link>
                    <Link 
                        to="https://www.youtube.com/watch?v=gBCKZtpMSNE&ab_channel=JCFosterTakesItToTheMoon" 
                        target="_blank"
                        className="footer-text-link"
                    >License Agreement
                    </Link>
                    <span><span id="copyright">&copy;</span> PathoStore Resell Ltd. 2023</span>
                </section>

                <section className="footer-section">
                    <span>PathoStore Resell Ltd.</span>
                    <span>27 Valley Drive</span>
                    <span id="address-line">Harrisburg, PA 23005</span>
                    <span>+1 922 521 321</span>
                    <span>support@gmx.com</span>
                </section>

                <section className="footer-section">
                    <Link>
                        <InstagramIcon className="footer-icon-link"/>
                    </Link>
                    <Link>
                        <TwitterIcon className="footer-icon-link"/>
                    </Link>
                    <Link>
                        <YouTubeIcon className="footer-icon-link" />
                    </Link>
                    <Link>
                        <FacebookIcon className="footer-icon-link" />
                    </Link>
                </section>
            </div>
        </div>
    );
}


export default Footer;