import { Icon } from "@mui/material";
import "@/assets/css/style.css";
import Link from "next/link";
const Header = () => {
  return (
    <div>
      <header className="header" data-header>
        <div className="overlay" data-overlay></div>
        <div className="header-top">
          <div className="container">
            <a href="tel:+01123456790" className="helpline-box">
              <div className="wrapper">
                <p className="helpline-title">For Further Inquires :</p>

                <p className="helpline-number">+01 (123) 4567 90</p>
              </div>
            </a>

            <a className="logo">
              {/* <img src="../assets/images/logo.svg" alt="Tourly logo" /> */}
            </a>

            <div className="header-btn-group">
              <Link href="/auth/login" className="search-btn" aria-label="Search">
                <p>Login</p>
              </Link>
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
              <ul className="navbar-list">
                <li>
                  <Link href="/home" className="navbar-link" data-nav-link>
                    Home
                  </Link>
                </li>

                <li>
                  <a href="/about-us" className="navbar-link" data-nav-link>
                    About us
                  </a>
                </li>

                <li>
                  <a href="#destination" className="navbar-link" data-nav-link>
                    destination
                  </a>
                </li>

                <li>
                  <a href="#package" className="navbar-link" data-nav-link>
                    packages
                  </a>
                </li>

                <li>
                  <a href="#gallery" className="navbar-link" data-nav-link>
                    gallery
                  </a>
                </li>

                <li>
                  <a href="#contact" className="navbar-link" data-nav-link>
                    contact us
                  </a>
                </li>
              </ul>
            </nav>

            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </header>
      <section className="hero" id="home">
        <div className="container">
          <h2 className="h1 hero-title">Journey to explore world</h2>

          <p className="hero-text">
            Ac mi duis mollis. Sapiente? Scelerisque quae, penatibus? Suscipit
            className corporis nostra rem quos voluptatibus habitant? Fames,
            vivamus minim nemo enim, gravida lobortis quasi, eum.
          </p>

          <div className="btn-group">
            <button className="btn btn-primary">Learn More</button>
            <button className="btn btn-secondary">Book now</button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Header;
