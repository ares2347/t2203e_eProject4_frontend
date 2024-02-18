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
  return (
    <div>
      <SelectTicket />
      <section className="popular" id="destination">
        <div className="container">
          <p className="section-subtitle">Uncover the place</p>

          <h2 className="h2 section-title">A popular destination</h2>

          <p className="section-text">
            It seems to me that some people want to make this announcement, but
            only the first ones, and no one else. The appearance of the
            praisers. Let it be decorated elasticity is held, fit.
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

                  <p className="card-subtitle">
                    <a href="#">Italy</a>
                  </p>

                  <h3 className="h3 card-title">
                    <a href="#">San miguel</a>
                  </h3>

                  <p className="card-text">
                    It seems to me that some of these people want to spread the
                    word.
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

                  <p className="card-subtitle">
                    <a href="#">Dubai</a>
                  </p>

                  <h3 className="h3 card-title">
                    <a href="#">Burj khalifa</a>
                  </h3>

                  <p className="card-text">
                    It seems to me that some of these people want to spread the
                    word.
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

                  <p className="card-subtitle">
                    <a href="#">Japan</a>
                  </p>

                  <h3 className="h3 card-title">
                    <a href="#">Kyoto temple</a>
                  </h3>

                  <p className="card-text">
                    It seems to me that some of these people want to spread the
                    word.
                  </p>
                </div>
              </div>
            </li>
          </ul>

          <button className="btn btn-primary">More destintion</button>
        </div>
      </section>
      <section className="package" id="package">
        <div className="container">
          <p className="section-subtitle">Popular Packeges</p>

          <h2 className="h2 section-title">Checkout Our Packeges</h2>

          <p className="section-text">
            It seems to me that some people want to make this announcement, but
            only the first ones, and no one else. The appearance of the
            praisers. Let it be decorated elasticity is held, fit.
          </p>

          <ul className="package-list">
            <li>
              <div className="package-card">
                <figure className="card-banner1"></figure>

                <div className="card-content">
                  <h3 className="h3 card-title">
                    Experience The Great Holiday On Beach
                  </h3>

                  <p className="card-text">
                    Laoreet, voluptatum nihil dolor esse quaerat mattis
                    explicabo maiores, est aliquet porttitor! Eaque, cras,
                    aspernatur.
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
                        <p className="text">pax: 10</p>
                      </div>
                    </li>

                    <li className="card-meta-item">
                      <div className="meta-box">
                        <LocationOnIcon />
                        <p className="text">Malaysia</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="card-price">
                  <div className="wrapper">
                    <p className="reviews">(25 reviews)</p>

                    <div className="card-rating">
                      <StarIcon fontSize="small" />
                      <StarIcon fontSize="small" />
                    </div>
                  </div>

                  <p className="price">
                    $750
                    <span>/ per person</span>
                  </p>

                  <button className="btn btn-secondary">Book Now</button>
                </div>
              </div>
            </li>

            <li>
              <div className="package-card">
                <figure className="card-banner2"></figure>

                <div className="card-content">
                  <h3 className="h3 card-title">
                    Summer Holiday To The Oxolotan River
                  </h3>

                  <p className="card-text">
                    Laoreet, voluptatum nihil dolor esse quaerat mattis
                    explicabo maiores, est aliquet porttitor! Eaque, cras,
                    aspernatur.
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

                        <p className="text">pax: 10</p>
                      </div>
                    </li>

                    <li className="card-meta-item">
                      <div className="meta-box">
                        <LocationOnIcon />

                        <p className="text">Malaysia</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="card-price">
                  <div className="wrapper">
                    <p className="reviews">(20 reviews)</p>

                    <div className="card-rating">
                      <StarIcon fontSize="small" />
                      <StarIcon fontSize="small" />
                      <StarIcon fontSize="small" />
                      <StarIcon fontSize="small" />
                    </div>
                  </div>

                  <p className="price">
                    $520
                    <span>/ per person</span>
                  </p>

                  <button className="btn btn-secondary">Book Now</button>
                </div>
              </div>
            </li>

            <li>
              <div className="package-card">
                <figure className="card-banner3"></figure>

                <div className="card-content">
                  <h3 className="h3 card-title">
                    Santorini Island's Weekend Vacation
                  </h3>

                  <p className="card-text">
                    Laoreet, voluptatum nihil dolor esse quaerat mattis
                    explicabo maiores, est aliquet porttitor! Eaque, cras,
                    aspernatur.
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

                        <p className="text">pax: 10</p>
                      </div>
                    </li>

                    <li className="card-meta-item">
                      <div className="meta-box">
                        <LocationOnIcon />

                        <p className="text">Malaysia</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="card-price">
                  <div className="wrapper">
                    <p className="reviews">(40 reviews)</p>

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
                    <span>/ per person</span>
                  </p>

                  <button className="btn btn-secondary">Book Now</button>
                </div>
              </div>
            </li>
          </ul>

          <button className="btn btn-primary">View All Packages</button>
        </div>
      </section>
      <section className="gallery" id="gallery">
        <div className="container">
          <p className="section-subtitle">Photo Gallery</p>

          <h2 className="h2 section-title">Photo's From Travellers</h2>

          <p className="section-text">
            It seems to me that some people want to make this announcement, but
            only the first ones, and no one else. The appearance of the
            praisers. Let it be ornamented with elasticity, fit.
          </p>

          <ImageList
            className="gallery-list"
            sx={{ width: 500, height: 450 }}
            variant="woven"
            cols={3}
            gap={8}
          >
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=161&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </section>
      <section className="cta" id="contact">
        <div className="container">
          <div className="cta-content">
            <p className="section-subtitle">Call To Action</p>

            <h2 className="h2 section-title">
              Ready For Unforgatable Travel. Remember Us!
            </h2>

            <p className="section-text">
              Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec
              nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia
              tenetur, aptent.
            </p>
          </div>

          <button className="btn btn-secondary">Contact Us !</button>
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
