import { Icon } from '@mui/material';
import '../assets/css/style.css';
import SearchIcon from '@mui/icons-material/Search';
const Header = () => {
    return (
        <header className="header" data-header>

            <div className="overlay" data-overlay></div>

            <div className="header-top">
                <div className="container">

                    <a href="tel:+01123456790" className="helpline-box">

                        <div className="icon-box">
                            {/* <ion-icon name="call-outline"></ion-icon> */}
                            <i className="call-outline">scas</i>
                        </div>

                        <div className="wrapper">
                            <p className="helpline-title">For Further Inquires :</p>

                            <p className="helpline-number">+01 (123) 4567 90</p>
                        </div>

                    </a>

                    <a className="logo">
                        <img src="../assets/images/logo.svg" alt="Tourly logo" />
                    </a>

                    <div className="header-btn-group">

                        <button className="search-btn" aria-label="Search">
                            {/* <ion-icon name="search"></ion-icon> */}

                            <i className="search">search</i>


                        </button>

                        <button className="nav-open-btn" aria-label="Open Menu" data-nav-open-btn>
                            {/* <ion-icon name="menu-outline"></ion-icon> */}
                            <Icon className="menu-outline" />

                        </button>

                    </div>

                </div>
            </div>

            <div className="header-bottom">
                <div className="container">

                    <ul className="social-list">

                        <li>
                            <a href="#" className="social-link">
                                {/* <ion-icon name="logo-facebook"></ion-icon> */}
                            </a>
                        </li>

                        <li>
                            <a href="#" className="social-link">
                                {/* <ion-icon name="logo-twitter"></ion-icon> */}
                            </a>
                        </li>

                        <li>
                            <a href="#" className="social-link">
                                {/* <ion-icon name="logo-youtube"></ion-icon> */}
                            </a>
                        </li>

                    </ul>

                    <nav className="navbar" data-navbar>

                        <div className="navbar-top">

                            <a href="#" className="logo">
                                <img src="../assets/images/logo-blue.svg" alt="Tourly logo" />
                            </a>

                            <button className="nav-close-btn" aria-label="Close Menu" data-nav-close-btn>
                                {/* <ion-icon name="close-outline"></ion-icon> */}
                            </button>

                        </div>

                        <ul className="navbar-list">

                            <li>
                                <a href="#home" className="navbar-link" data-nav-link>home</a>
                            </li>

                            <li>
                                <a href="#" className="navbar-link" data-nav-link>about us</a>
                            </li>

                            <li>
                                <a href="#destination" className="navbar-link" data-nav-link>destination</a>
                            </li>

                            <li>
                                <a href="#package" className="navbar-link" data-nav-link>packages</a>
                            </li>

                            <li>
                                <a href="#gallery" className="navbar-link" data-nav-link>gallery</a>
                            </li>

                            <li>
                                <a href="#contact" className="navbar-link" data-nav-link>contact us</a>
                            </li>

                        </ul>

                    </nav>

                    <button className="btn btn-primary">Book Now</button>

                </div>
            </div>

        </header>
    )
}
export default Header;