import '@/assets/css/style.css';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Footer = () => {
    return (
        <div>
            <footer className="footer">

                <div className="footer-top">
                    <div className="container">

                        <div className="footer-brand">
                            <p className="footer-text">
                                Urna ratione ante harum provident, eleifend, vulputate molestiae proin fringilla, praesentium magna conubia
                                at
                                perferendis, pretium, aenean aut ultrices.
                            </p>

                        </div>

                        <div className="footer-contact">

                            <h4 className="contact-title">Liên hệ với chúng tôi</h4>

                            <p className="contact-text">
                                Hãy liên hệ và liên hệ với chúng tôi!
                            </p>

                            <ul>

                                <li className="contact-item">
                                    <CallIcon />
                                    <i className="call-outline"></i>

                                    <a href="/" className="contact-link">0312834923</a>
                                </li>

                                <li className="contact-item">

                                    <EmailIcon />
                                    <a href="/" className="contact-link">aaasd@gmail.com</a>
                                </li>

                                <li className="contact-item">

                                    <LocationOnIcon />
                                    <address>Số 8, Tôn Thất Thuyết</address>
                                </li>

                            </ul>

                        </div>

                        <div className="footer-form">

                            <p className="form-text">
                                Đăng ký bản tin của chúng tôi để biết thêm thông tin cập nhật và tin tức !!
                            </p>

                            <form action="" className="form-wrapper">
                                <input type="email" name="email" className="input-field" placeholder="Enter Your Email" required />

                                <button type="submit" className="btn btn-secondary">Đăng ký</button>
                            </form>

                        </div>

                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">

                        <p className="copyright">
                            &copy; 2022 <a href="">codewithsadee</a> - Đã đăng ký bản quyền
                        </p>

                        <ul className="footer-bottom-list">

                            <li>
                                <a href="#" className="footer-bottom-link">Chính sách bảo mật</a>
                            </li>

                            <li>
                                <a href="#" className="footer-bottom-link">Kỳ hạn và điều kiện</a>
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