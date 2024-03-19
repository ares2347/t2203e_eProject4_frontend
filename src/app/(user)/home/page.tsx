"use client";

import '../css/main.css'
import Link from "next/link";
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "@/assets/css/style.css";
import PeopleIcon from "@mui/icons-material/People";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import "@/assets/images/popular-1.jpg";
import "@/assets/images/popular-2.jpg";
import "@/assets/images/popular-3.jpg";
import SelectTicket from "@/components/ticket/selectTicket";

const MainPage = () => {

    const textStyle = {
    fontFamily: 'Roboto, sans-serif',
  };
  
  return (
    
    <div>
      <SelectTicket />
      <section className="popular" id="destination">
        <div className="container">
          <p style={textStyle} className="section-subtitle">Khám Phá Nơi</p>

          <h2 style={textStyle} className="h2 section-title">Đặt Vé Xe Trực Tuyến - Dễ Dàng và Tiện Lợi</h2>

          <p style={textStyle} className="section-text">
           Đặt vé xe trực tuyến với chúng tôi - tiện lợi và nhanh chóng. Khám phá thế giới mới mỗi ngày, chỉ cần vài cú click!
          </p>

          <ul className="popular-list">
            <li>
              <div className="popular-card">
                <figure className="card-img1"></figure>

                <div className="card-content">
                  <div className="card-rating">
                    <StarIcon fontSize="small" />
                    <StarIcon fontSize="small" />
                    <StarIcon fontSize="small" />
                  </div>

                  {/* <p className="card-subtitle">
                    <a href="#">Tàu Hỏa</a>
                  </p> */}

                  <h3 style={textStyle} className="h3 card-title">
                    <a href="#">Xe Khách</a>
                  </h3>

                  <p style={textStyle} className="card-text">
                    Xe khách - điểm xuất phát của mỗi chuyến hành trình, kết nối những người khác nhau trên cùng một con đường.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="popular-card">
                <figure className="card-img2"></figure>

                <div className="card-content">
                  <div className="card-rating">
                    <StarIcon fontSize="small" />
                    <StarIcon fontSize="small" />
                    <StarIcon fontSize="small" />
                    <StarIcon fontSize="small" />
                    <StarHalfIcon fontSize="small" />
                  </div>

                  {/* <p className="card-subtitle">
                    <a href="#">Dubai</a>
                  </p> */}

                  <h3 style={textStyle} className="h3 card-title">
                    <a href="#">Tàu Hỏa</a>
                  </h3>

                  <p style={textStyle} className="card-text">
                    Tàu hỏa - hành trình vượt qua thời gian và không gian, mang lại trải nghiệm du lịch đầy phấn khích và độc đáo.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="popular-card">
                <figure className="card-img3"></figure>

                <div className="card-content">
                  <div className="card-rating">
                    <StarIcon fontSize="small" />
                    <StarIcon fontSize="small" />
                  </div>

                  {/* <p className="card-subtitle">
                    <a href="#">Japan</a>
                  </p> */}

                  <h3 className="h3 card-title">
                    <a style={textStyle} href="#">Máy Bay</a>
                  </h3>

                  <p style={textStyle} className="card-text">
                    Máy bay - cánh cửa mở ra thế giới, mang đến sự tốc độ, tiện lợi và sự phiêu lưu đích thực trên không trung.
                  </p>
                </div>
              </div>
            </li>
          </ul>

          <button style={textStyle} className="btn btn-primary">Đặt Vé Ngay</button>
        </div>

      <div className="container">
      <h2 style={textStyle}>Ưu đãi vé xe</h2>
      <ul className="cards">
        <li className="card">
          <div>
            <h3 style={textStyle} className="card-title">Tàu hỏa</h3>
            <div style={textStyle} className="card-content">
              <p>Trải nhiệm tuyệt vời cùng tàu hỏa</p>
            </div>
          </div>
          <div className="card-link-wrapper">
            <a href="" className="card-link">Xem chi tiết</a>
          </div>
        </li>
        <li className="card">
          <div>
            <h3 className="card-title">Máy bay</h3>
            <div className="card-content">
              <p>Hưởng thụ tuyệt vời với cảnh bay trên không</p>
            </div>
          </div>
          <div className="card-link-wrapper">
            <a href="" className="card-link">Xem chi tiết</a>
          </div>
        </li>
        <li className="card">
          <div>
            <h3 className="card-title">Xe Khách</h3>
            <div className="card-content">
              <p>Nhanh chóng dịch vụ tuyệt vời</p>
            </div>
          </div>
          <div className="card-link-wrapper">
            <a href="" className="card-link">Xem chi tiết</a>
          </div>
        </li>
        <li className="card">
          <div>
            <h3 className="card-title">Service 4</h3>
            <div className="card-content">
              <p>Aenean posuere mauris quam, pellentesque auctor mi bibendum nec. Sed scelerisque lacus nisi, quis auctor lorem ornare vel.</p>
            </div>
          </div>
          <div className="card-link-wrapper">
            <a href="" className="card-link">Xem chi tiết</a>
          </div>
        </li>
        <li className="card">
          <div>
            <h3 className="card-title">Service 4</h3>
            <div className="card-content">
              <p>Aenean posuere mauris quam, pellentesque auctor mi bibendum nec. Sed scelerisque lacus nisi, quis auctor lorem ornare vel.</p>
            </div>
          </div>
          <div className="card-link-wrapper">
            <a href="" className="card-link">Xem chi tiết</a>
          </div>
        </li>
      </ul>
    </div>

      </section>
      <section className="package" id="package">
        <div className="container">
          <p style={textStyle} className="section-subtitle">Tuyển chọn chuyến</p>

          <h2 style={textStyle} className="h2 section-title">Khám phá các Ưu đãi của chúng tôi</h2>

          <p className="section-text">
            Dành cho bạn, có vẻ như một số người muốn chia sẻ thông điệp này, nhưng chỉ những người đầu tiên, không ai khác. Sự xuất hiện của những người khen ngợi được lưu giữ. Hãy để chúng tôi trang trí nó một cách linh hoạt, để phản ánh đúng bản chất của trang web bán vé xe của chúng tôi.
          </p>

          <ul className="package-list">
            <li>
              <div className="package-card">
                <figure className="card-banner1"></figure>

                <div className="card-content">
                  <h3 className="h3 card-title">
                    TRẢI NGHIỆM DU LỊCH ĐẦY HỨNG KHỞI VỚI VÉ XE CHÍNH THỨC
                  </h3>

                  <p className="card-text">
                    Điểm bán vé xe, không có gì đáng tiếc về việc tìm hiểu chi tiết lớn hơn, đó là phần mềm tải xuống! Qua, ngày mai, tình cờ.
                  </p>

                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <div className="meta-box">
                        <AccessTimeIcon fontSize="medium" />
                        <p className="text">7D/6N</p>
                      </div>
                    </li>

                    <li className="card-meta-item">
                      <div className="meta-box">
                        <PeopleIcon />
                        <p className="text">Khách: 10</p>
                      </div>
                    </li>

                    <li className="card-meta-item">
                      <div className="meta-box">
                        <LocationOnIcon />
                        <p className="text">Đà Nẵng</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="card-price">
                  <div className="wrapper">
                    <p className="reviews">(25 Đánh Giá)</p>

                    <div className="card-rating">
                      <StarIcon fontSize="small" />
                      <StarIcon fontSize="small" />
                    </div>
                  </div>

                  <p className="price">
                    $750
                    <span>/ Mỗi người</span>
                  </p>

                  <button className="btn btn-secondary">Đặt Vé Ngay</button>
                </div>
              </div>
            </li>

            <li>
              <div className="package-card">
                <figure className="card-banner2"></figure>

                <div className="card-content">
                  <h3 className="h3 card-title">
                    TRẢI NHIỆM ĐÁNG NHỚ KHI ĐI DU LỊCH BẰNG TÀU HỎA
                  </h3>

                  <p className="card-text">
                    Trên tàu hỏa, không có gì ngọt ngào hơn việc tìm kiếm sự giải thích chi tiết về những trải nghiệm lớn hơn, là những chuyến đi không thể quên! Điều này sẽ xảy ra, ngay trong ngày mai.
                  </p>

                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <div className="meta-box">
                        <AccessTimeIcon fontSize="medium" />

                        <p className="text">7D/6N</p>
                      </div>
	
                      <div className="meta-box">
                        <PeopleIcon />

                        <p className="text">Khách: 10</p>
                      </div>
                    </li>

                    <li className="card-meta-item">
                      <div className="meta-box">
                        <LocationOnIcon />

                        <p className="text">Phú Quốc</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="card-price">
                  <div className="wrapper">
                    <p className="reviews">(20 Đánh Giá)</p>

                    <div className="card-rating">
                      <StarIcon fontSize="small" />
                      <StarIcon fontSize="small" />
                      <StarIcon fontSize="small" />
                      <StarIcon fontSize="small" />
                    </div>
                  </div>

                  <p className="price">
                    $520
                    <span>/ Mỗi người</span>
                  </p>

                  <button className="btn btn-secondary">Đặt Vé Ngay</button>
                </div>
              </div>
            </li>

            <li>
              <div className="package-card">
                <figure className="card-banner3"></figure>

                <div className="card-content">
                  <h3 className="h3 card-title">
                    Trải nhiệm bằng đường hàng không thật tuyệt vời
                  </h3>

                  <p className="card-text">
                    Dịch vụ hàng không, trải nghiệm không gì có thể so sánh được với việc khám phá những điều tuyệt vời, vượt ra ngoài bản thân, là điều không thể bỏ qua! Chắc chắn, ngày mai, sẽ là một chuyến đi đáng nhớ.
                  </p>

                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <div className="meta-box">
                        <AccessTimeIcon fontSize="medium" />

                        <p className="text">7D/6N</p>
                      </div>
                      <div className="meta-box">
                        <PeopleIcon />

                        <p className="text">Khách: 10</p>
                      </div>
                    </li>

                    <li className="card-meta-item">
                      <div className="meta-box">
                        <LocationOnIcon />

                        <p className="text">Hà Nội</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="card-price">
                  <div className="wrapper">
                    <p className="reviews">(40 Đánh Giá)</p>

                    <div className="card-rating">
                      <StarIcon fontSize="small" />
                      <StarIcon fontSize="small" />
                      <StarIcon fontSize="small" />
                      <StarIcon fontSize="small" />
                      <StarIcon fontSize="small" />
                    </div>
                  </div>

                  <p className="price">
                    $660
                    <span>/ Mỗi người</span>
                  </p>

                  <button className="btn btn-secondary">Đặt Vé Ngay</button>
                </div>
              </div>
            </li>
          </ul>

          <button className="btn btn-primary">Khám phá tất cả các lựa chọn</button>
        </div>
      </section>
      <section className="gallery" id="gallery">
        <div className="container">
          <p style={textStyle} className="section-subtitle">Thư viện ảnh</p>

          <h2 style={textStyle} className="h2 section-title">Ảnh từ những hành khách</h2>
          <p className="section-text">
Dường như có một số người muốn đưa ra thông báo này, nhưng chỉ những người đầu tiên, và không có ai khác. Sự xuất hiện của những người tán dương. Hãy để nó được trang trí với tính linh hoạt, phù hợp.
          </p>

          {/* <ImageList
            className="gallery-list"
            sx={{ width: 500, height: 450 }}
            variant="woven"
            cols={3}
            gap={8}
          >
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
	@@ -392,129 +404,177 @@ const MainPage = () => {
                />
              </ImageListItem>
            ))}
          </ImageList> */}
          <div className="root"> {/* Đảm bảo rằng root class được định nghĩa trong file CSS */}
      <ImageList className="galleryList" cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              className="image"
              src={`${item.img}?w=161&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
        </div>
      </section>
        {/* <div className="container mt-5" style={styles.body}>
      <div className="d-flex justify-content-center row">
        <div className="col-md-8">
          <div className="d-flex flex-column comment-section">
            <div className="bg-white p-2">
              <div className="d-flex flex-row user-info">
                <img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40" alt="User Avatar" />
                <div className="d-flex flex-column justify-content-start ml-2">
                  <span className="d-block font-weight-bold name" style={styles.name}>Marry Andrews</span>
                  <span className="date text-black-50" style={styles.date}>Shared publicly - Jan 2020</span>
                </div>
              </div>
              <div className="mt-2">
                <p className="comment-text" style={styles.commentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
            <div className="bg-white">
              <div className="d-flex flex-row fs-12" style={styles.fs12}>
                <div className="like p-2 cursor" style={styles.cursorHover}><i className="fa fa-thumbs-o-up"></i><span className="ml-1">Like</span></div>
                <div className="like p-2 cursor" style={styles.cursorHover}><i className="fa fa-commenting-o"></i><span className="ml-1">Comment</span></div>
                <div className="like p-2 cursor" style={styles.cursorHover}><i className="fa fa-share"></i><span className="ml-1">Share</span></div>
              </div>
            </div>
            <div className="bg-light p-2">
              <div className="d-flex flex-row align-items-start">
                <img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40" alt="User Avatar" />
                <textarea className="form-control ml-1 shadow-none textarea" ></textarea>
              </div>
              <div className="mt-2 text-right">
                <button className="btn btn-primary btn-sm shadow-none" type="button">Post comment</button>
                <button className="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}

      <section className="cta" id="contact">
        <div className="container">
          <div className="cta-content">
            <p style={textStyle} className="section-subtitle">Đặt Vé Ngay Bây Giờ</p>

            <h2 style={textStyle} className="h2 section-title">
             Sẵn sàng cho chuyến du lịch đáng nhớ.Hãy nhớ đến chúng tôi! 
            </h2>

            <p style={textStyle} className="section-text">
                Mua vé xe của chúng tôi ngay hôm nay để trải nghiệm chuyến đi không thể quên!
            </p>
          </div>

          <button style={textStyle} className="btn btn-secondary">Liên Hệ Chúng Tôi!</button>
        </div>
      </section>
    </div>
  );
};
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
];
export default MainPage;  