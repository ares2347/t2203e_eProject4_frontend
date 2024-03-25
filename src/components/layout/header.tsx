"use client";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Image from 'next/image';
import "@/assets/css/style.css";
import { Button, Grid, Typography } from "@mui/material";
import { MouseEventHandler, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { UserInfo } from "../../model/auth/AuthModel";
import { AuthService } from "@/service/auth/authService";
import Logo from "@/assets/images/logo.svg";
interface NavItem {
  href: string;
  label: string;
  isAuth: boolean;
}

const Header = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const authService = new AuthService();
  useEffect(() => {
    const userInfo = authService.getUserInfo();
    setUserInfo(userInfo);
  }, []);

  const navItems: NavItem[] = [
    {
      href: "/home",
      label: "Trang chủ",
      isAuth: false,
    },
    {
      href: "/about-us",
      label: "Về chúng tôi",
      isAuth: false,
    },
    {
      href: "/contact-us",
      label: "Liên hệ",
      isAuth: false,
    },
    {
      href: "/my-tickets",
      label: "Vé của tôi",
      isAuth: true,
    },
  ];

  function handleLogOut() {
    authService.logout();
    setUserInfo(null);
    router.push("/auth/login");
  }

  return (  
    <Grid className="header" container wrap="nowrap" gap={1} alignItems="center" style={{position: pathname =="/home"? "absolute": "unset"}}>
      <Grid item xs={3} pl={24}>
        <Image src={Logo} alt="Vexecucre" height={100}/>
      </Grid>
      <Grid item container xs={6} alignItems="center" justifyContent="flex-end">
        {navItems
          .filter((x) => !x.isAuth || userInfo != null)
          .map((x) => (
            <Grid item key={x.href} sx={{ color: "white" }}>
              <a href={x.href} className="btn">
                {x.label}
              </a>
            </Grid>
          ))}
      </Grid>
      <Grid item xs={3}>
        {userInfo ? (
          <Grid container alignItems="center">
            <Grid item>
              <Button href="/inforuser">
                <AccountCircleIcon sx={{ fontSize: 32, color: "white" }} />
              </Button>
            </Grid>
            <Grid item>
              <button className="btn" onClick={handleLogOut}>
                Log out
              </button>
            </Grid>
          </Grid>
        ) : (
          <Grid container>
            <Grid item>
              <button className="search-btn" aria-label="Search">
                <a href="/auth/login" className="btn">
                  Login
                </a>
              </button>
            </Grid>
            <Grid item>
              <a href="/auth/signup">
                {" "}
                <button className="btn">Sign-Up</button>
              </a>
            </Grid>
          </Grid>
        )}
      </Grid>

      {/* <header className="header" data-header>
        <div className="overlay" data-overlay></div>

        <div className="header-top">
          <div className="container">
            <a href="/" className="helpline-box">
              <div className="wrapper">
                <p className="helpline-title">Contact:</p>

                <p className="helpline-number">0312834923</p>
              </div>
            </a>

            <a className="logo"></a>

            <div className="header-btn-group">
              {userInfo ? (
                <Button href='/inforuser'>< AccountCircleIcon /></Button>
              ) : (
                <button className="search-btn" aria-label="Search">
                  <a href="/auth/login" className="btn btn-primary">
                    Login
                  </a>
                </button>
              )}
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
                  <a href="/home" className="navbar-link" data-nav-link>
                    home
                  </a>
                </li>

                <li>
                  <a href="/about-us" className="navbar-link" data-nav-link>
                    about us
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
          </div>
        </div>
      </header> */}
    </Grid>
  );
};
export default Header;
