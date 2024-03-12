"use client";
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "@/assets/css/style.css";
import { Button, Typography } from "@mui/material";
import { MouseEventHandler, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import React from 'react';
import { UserInfo } from '../../model/auth/AuthModel';
import { AuthService } from '@/service/auth/authService';
const Header = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const router = useRouter();
  const authService = new AuthService();
  useEffect(() => {
    const userInfo = authService.getUserInfo();
    setUserInfo(userInfo);
  }, []);

  function handleLogOut() {
    authService.logout();
    setUserInfo(null);
    router.push("/auth/login");
  }

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
            {userInfo ? (
              <button className="btn btn-primary" onClick={handleLogOut}>Log out</button>
            ) : (
              <a href="/auth/signup">
                {" "}
                <button className="btn btn-primary">Sign-Up</button>
              </a>
            )}
          </div>
        </div>
      </header>
      <section className="hero" id="home">
        <div className="container">
          <h2 className="h1 hero-title">Travel For Every Where</h2>

          <p className="hero-text">
            Địa chỉ đăng ký kinh doanh: 8C Chữ Đồng Tử, Phường 7, Quận Tân Bình, Thành Phố Hồ Chí Minh, Việt Nam

            Địa chỉ: Lầu 2, tòa nhà H3 Circo Hoàng Diệu, 384 Hoàng Diệu, Phường 6, Quận 4, Tp. Hồ Chí Minh, Việt Nam
            Tầng 3, toà nhà 101 Láng Hạ, Đường 101 Láng Hạ, Phường Láng Hạ, Quận Đống Đa, Hà Nội, Việt Nam
            Giấy chứng nhận ĐKKD số 0315133726 do Sở KH và ĐT TP. Hồ Chí Minh cấp lần đầu ngày 27/6/2018
          </p>
        </div>
      </section>
    </div>
  );
};
export default Header;
