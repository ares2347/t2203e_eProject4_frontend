
import { TripService } from '@/app/service/trip/tripService';
import '../css.css'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
const Travel = () => {
    const tripService = new TripService();
    const tripList = tripService.getAllTrip();

    return (
        <ul className="_2tY3C yOn4a" data-test-selector="item-cards-layout-list">
            <li className="_1cn3x "><span role="group">
                <div className="_2sT86 EurVi">
                    <article className="_3Oe1A">
                        <section className="_25Upe">
                            <section className="_2imXI">
                                <div className="_3XNMI"><a
                                    href="https://themeforest.net/item/voevod-a-bespoke-woocommerce-theme/21276462"
                                    aria-label="Voevod - WooCommerce Store">
                                    <div className="_2_3rp " >
                                        <div ><img className="_1xvs1"
                                            src="https://themeforest.img.customer.envatousercontent.com/files/239948860/00_preview.png?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=96cd72e751efbeb74b3bcd0d617a0903"
                                            title="Voevod - WooCommerce Store" alt="Voevod - WooCommerce Store"
                                        /></div>
                                    </div>
                                </a></div>
                                <section className="_1SQpT"><a
                                    href="https://themeforest.net/item/voevod-a-bespoke-woocommerce-theme/21276462"
                                    className="KFSGT" role="toolbar" title="Voevod - WooCommerce Store"></a>
                                    <section className="_3cDcj">

                                    </section>
                                </section>
                            </section>
                        </section>
                        <section className="hypZf">
                            <div className="U157g">
                                <div className="vfsyA">
                                    <div className="_25ygu">
                                        <h3 className="_2WWZB"><a className="_2Pk9X" >{tripList[0].brandName}</a>
                                        </h3>

                                        <div className="JHf2a"><a className="R8zaM">Chính Sách </a></div>
                                    </div>
                                </div>
                                <div className="_1VJk4">
                                    <div className="_4zAGT">
                                        <div className="GeySM"><p className="_2g_QW">Seat: {tripList[0].seatAmount}</p> </div>
                                    </div>
                                    <ul className="_3bM8k">
                                        <li > </li>
                                        <li className="Ck5w-">{tripList[0].departFrom} :  {tripList[0].departAt}</li>
                                        <div className="icon"><ArrowDownwardOutlinedIcon /></div>
                                        <li className="Ck5w-">{tripList[0].arriveTo}   :  {tripList[0].arriveAt}</li>
                                    </ul>

                                    <b>KHÔNG CẦN THANH TOÁN TRƯỚC</b>
                                </div>
                            </div>
                        </section>
                        <section className="_38ivw">
                            <section className="_9q1LS">
                                <section className="_3dJU8">
                                </section>
                                <section className="_7H2LP">
                                    <div className="-DeRq">{tripList[0].price}K VND</div>
                                    <div className="_1I1Wt">
                                        <div className="_3yoIm" aria-label="Rated 4.6 out of 5">
                                        </div>
                                    </div>
                                    <div className="GeySM"><span className="_2g_QW">Số chỗ còn lại:</span> <span className="_3TIJT"> {tripList[0].vehicleType}</span></div>
                                </section>
                                <section className="VRlLl"><a className="_3tfm8 _3ePxY" role="button" target="_blank"
                                    rel="noopener noreferrer">BOOK NOW</a></section>
                            </section>
                        </section>
                    </article>
                </div>
            </span>
            </li>
        </ul>

    )
}

export default Travel


