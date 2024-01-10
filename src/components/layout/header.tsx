import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '@/assets/css/style.css';
const Header = () => {
    return (
        <div>
            <header className="header" data-header>

                <div className="overlay" data-overlay></div>

                <div className="header-top">
                    <div className="container">

                        <a href="/" className="helpline-box">

                            <div className="wrapper">
                                <p className="helpline-title">Contact:</p>

                                <p className="helpline-number">0312834923</p>
                            </div>

                        </a>

                        <a className="logo">
                        </a>

                        <div className="header-btn-group">
                            <button  className="search-btn" aria-label="Search">
                                <a href="/login" className="btn btn-primary">Login</a>
                            </button>

                        </div>

                    </div>
                </div>

                <div className="header-bottom">
                    <div className="container">

                        <ul className="social-list">

                            <li>
                                <a href="#" className="social-link">
                                    <FacebookIcon />
                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <LinkedInIcon />
                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <YouTubeIcon />
                                </a>
                            </li>

                        </ul>

                        <nav className="navbar" data-navbar>


                            <ul className="navbar-list">

                                <li>
                                    <a href="#home" className="navbar-link" data-nav-link>home</a>
                                </li>

                                <li>
                                    <a href="/about-us" className="navbar-link" data-nav-link>about us</a>
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

                        <button className="btn btn-primary">Sign-In</button>

                    </div>
                </div>

            </header>
            <section className="hero" id="home">
                <div className="container">

                    <h2 className="h1 hero-title">Travel For Every Where</h2>

                    <p className="hero-text">
                        Ac mi duis mollis. Sapiente? Scelerisque quae, penatibus? Suscipit className corporis nostra rem quos
                        voluptatibus habitant?
                        Fames, vivamus minim nemo enim, gravida lobortis quasi, eum.
                    </p>
                </div>
            </section>
        </div>
    )
}
export default Header;