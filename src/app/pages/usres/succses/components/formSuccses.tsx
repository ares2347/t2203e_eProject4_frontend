import { TicketService } from '@/app/service/ticket/ticketService';
import '../css.css'

const Sucsses = () => {

    const ticketService = new TicketService();
    const ticketList = ticketService.getAllTicket();

    return (
        <div className="order-status order-success">
            <div className="animation-ctn">
                <div className="icon icon--order-success svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="154px" height="154px">
                        <g fill="none" stroke="#22AE73" stroke-width="2">
                            <circle cx="77" cy="77" r="72" ></circle>
                            <circle id="colored" fill="#22AE73" cx="77" cy="77" r="72" ></circle>
                            <polyline className="st0" stroke="#fff" stroke-width="10" points="43.5,77.8 63.7,97.9 112.2,49.4 " />
                        </g>
                    </svg>
                </div>
            </div>
            <div className="top-part">
                <i className="far fa-check-circle"></i>
                <h3>
                    ĐẶT VÉ THÀNH CÔNG
                    <span>Order code:{ticketList[0].ticketID}</span>
                </h3>
                <small>
                    Cảm ơn bạn đã đăng kí và sủ dụng dịch vụ của chúng tôi,chúc bạn có một chuyến đi vui vẻ,hạnh phúc bên người thân của mình.
                </small>
            </div>
            <ul>
                <li>
                    <div>Tên khách hàng:</div>
                    <div>{ticketList[0].customerName}</div>
                </li>

                <li>
                    <div>Giới tính :</div>
                    <div>{ticketList[0].customerGender}</div>
                </li>
                <li>
                    <div>Tuổi:</div>
                    <div>{ticketList[0].customerAge}</div>
                </li>
                <li>
                    <div>Số điện thoại:</div>
                    <div>0{ticketList[0].customerPhone}</div>
                </li>
                <li>
                    <div>Giá tiền :</div>
                    <div>{ticketList[0].total}$</div>
                </li>
                <li>
                    <div>Thời gian đặt:</div>
                    <div>11-11-2020 22:22:30</div>
                </li>
                <li>
                    <div>Trạng thái:</div>
                    <div>{ticketList[0].isDeleted}</div>
                </li>
            </ul>
            <div className="frame">
                <button className="custom-btn btn-16">Xem thông tin chi tiết</button>
            </div>
        </div>
    )
}
export default Sucsses