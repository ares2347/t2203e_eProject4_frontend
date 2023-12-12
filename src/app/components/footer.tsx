import '../assets/css/style.css';

const Footer = () => {
    return (
        <div>
            <footer className="footer">

                <div className="footer-top">
                    <div className="container">

                        <div className="footer-brand">

                            <a href="#" className="logo">
                                <img src="./assets/images/logo.svg" alt="Tourly logo" />
                            </a>

                            <p className="footer-text">
                                Urna ratione ante harum provident, eleifend, vulputate molestiae proin fringilla, praesentium magna conubia
                                at
                                perferendis, pretium, aenean aut ultrices.
                            </p>

                        </div>

                        <div className="footer-contact">

                            <h4 className="contact-title">Contact Us</h4>

                            <p className="contact-text">
                                Feel free to contact and reach us !!
                            </p>

                            <ul>

                                <li className="contact-item">
                                    {/* <ion-icon name="call-outline"></ion-icon> */}
                                    <i className="call-outline"></i>

                                    <a href="tel:+01123456790" className="contact-link">+01 (123) 4567 90</a>
                                </li>

                                <li className="contact-item">
                                    {/* <ion-icon name="mail-outline"></ion-icon> */}

                                    <a href="mailto:info.tourly.com" className="contact-link">info.tourly.com</a>
                                </li>

                                <li className="contact-item">
                                    {/* <ion-icon name="location-outline"></ion-icon> */}

                                    <address>3146 Koontz, California</address>
                                </li>

                            </ul>

                        </div>

                        <div className="footer-form">

                            <p className="form-text">
                                Subscribe our newsletter for more update & news !!
                            </p>

                            <form action="" className="form-wrapper">
                                <input type="email" name="email" className="input-field" placeholder="Enter Your Email" required />

                                <button type="submit" className="btn btn-secondary">Subscribe</button>
                            </form>

                        </div>

                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">

                        <p className="copyright">
                            &copy; 2022 <a href="">codewithsadee</a>. All rights reserved
                        </p>

                        <ul className="footer-bottom-list">

                            <li>
                                <a href="#" className="footer-bottom-link">Privacy Policy</a>
                            </li>

                            <li>
                                <a href="#" className="footer-bottom-link">Term & Condition</a>
                            </li>

                            <li>
                                <a href="#" className="footer-bottom-link">FAQ</a>
                            </li>

                        </ul>

                    </div>
                </div>

            </footer>







            <a href="#top" className="go-top" data-go-top>
                {/* <ion-icon name="chevron-up-outline"></ion-icon> */}
            </a></div>
    )
}
export default Footer;