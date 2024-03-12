import './css.css'

import PeopleIcon from '@mui/icons-material/People';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import LinkIcon from '@mui/icons-material/Link';
import { Avatar } from '@mui/material';
import React from 'react';
const AboutUs = () => {
    return (
        <div>
            <body>
                <header className="masthead">
                    <div className="container position-relative">
                        <div className="row justify-content-center">
                            <div className="col-xl-6">
                                <div className="text-center text-white">
                                    <h1 className="mb-5">Về Chúng Tôi</h1>

                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="features-icons bg-light text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                    <div className="features-icons-icon d-flex">< SettingsSystemDaydreamIcon fontSize='large' className="bi-window m-auto text-primary" /></div>
                                    <h3>Hệ Thống</h3>
                                    <p className="lead mb-0">Website đầu tiên trên thế giới bán vé xe trực tuyến.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                    <div className="features-icons-icon d-flex">< LinkIcon fontSize='large' className="bi-window m-auto text-primary" /></div>
                                    <h3>Liên Kết</h3>
                                    <p className="lead mb-0">với hơn 10000 nhà lớn nhỏ trên khắp cả nước.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                                    <div className="features-icons-icon d-flex">< PeopleIcon fontSize='large' className="bi-window m-auto text-primary" /></div>
                                    <h3>Đội Ngũ </h3>
                                    <p className="lead mb-0">Nhân viên tận tụy làm việc trực tuyến 24/7.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="showcase">
                    <div className="container-fluid p-0">
                        <div className="row g-0">
                            <div className="col-lg-6 order-lg-2 text-white showcase-img1" ></div>
                            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                                <h2>Chào Mừng Bạn</h2>
                                <p className="lead mb-0">
                                    đến với website bán vé xe trực tuyến của chúng tôi. Đây là nơi bạn có thể tìm kiếm, so sánh và đặt vé xe khách, xe limousine, xe giường nằm, xe tốc hành và nhiều loại xe khác trên khắp Việt Nam. Chúng tôi hợp tác với hơn 1000 nhà xe uy tín và chất lượng, cung cấp hơn 10.000 chuyến xe mỗi ngày đến hơn 1000 điểm đến trên cả nước.</p>
                            </div>
                        </div>
                        <div className="row g-0">
                            <div className="col-lg-6 text-white showcase-img2" ></div>
                            <div className="col-lg-6 my-auto showcase-text">
                                <h2>Với Thành Trung.com</h2>
                                <p className="lead mb-0">Bạn cũng có thể thanh toán nhanh chóng và an toàn qua nhiều hình thức như thẻ tín dụng, thẻ ATM, ví điện tử, chuyển khoản ngân hàng hoặc tiền mặt tại các điểm giao dịch. Bạn sẽ nhận được xác nhận đặt vé qua email và tin nhắn điện thoại, cũng như có thể theo dõi vị trí xe qua GPS.                        </p>
                            </div>
                        </div>
                        <div className="row g-0">
                            <div className="col-lg-6 order-lg-2 text-white showcase-img3" ></div>
                            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                                <h2>Công ty TNHH</h2>
                                <p className="lead mb-0">Chúng tôi luôn nỗ lực để mang đến cho bạn trải nghiệm đặt vé xe trực tuyến tốt nhất, tiết kiệm thời gian và chi phí. Chúng tôi cũng cam kết hoàn tiền 150% nếu nhà xe không giữ chỗ cho bạn. Ngoài ra, chúng tôi còn cung cấp các dịch vụ khác như thuê xe du lịch, thuê xe máy, bán vé tàu hỏa, vé máy bay và nhiều ưu đãi hấp dẫn khác.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="testimonials text-center bg-light">
                    <div className="container">
                        <h2 className="mb-5">Người Sáng Lập</h2>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                                    <Avatar className="img-fluid rounded-circle mb-3" src='./img/testimonials-1.jpg' />
                                    <h5>Margaret E.</h5>
                                    <p className="font-weight-light mb-0">"Trưởng Phòng Tài Chính"</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                                    <Avatar className="img-fluid rounded-circle mb-3" src="./img/testimonials-2.jpg" />
                                    <h5>Fred S.</h5>
                                    <p className="font-weight-light mb-0">"Tổng Giám Đốc"</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                                    <Avatar className="img-fluid rounded-circle mb-3" src="./img/testimonials-3.jpg" />
                                    <h5>Sarah W.</h5>
                                    <p className="font-weight-light mb-0">"Trưởng bộ phân kinh doanh"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
                <script src="js/scripts.js"></script>

                <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
            </body>
        </div>
    )
}
export default AboutUs