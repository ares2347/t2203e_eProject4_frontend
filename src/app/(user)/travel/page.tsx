"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./css.css";
import { DataProvider } from "./DataContext";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import { TripService } from "@/service/trip/tripService";
import SelectTicket from "@/components/ticket/selectTicket";
import Step1 from "./step1";
import Step3 from "./step3";
import { useDataContext } from "./DataContext";
import { useSearchParams } from "next/navigation";

const steps = ["Lựa chọn chỗ ngồi", "Điền thông tin"];
const formstep = [
  {
    component: <Step1 />,
    message: "Lựa chọn chỗ ngồi",
  },
  {
    component: <Step3 />,
    message: "Điền thông tin",
  },
];

const Travel = () => {
  const tripService = new TripService();
  const searchParams = useSearchParams();
  const [tripList, setTripList] = React.useState<any>(tripService.getAllTrip());

  React.useEffect(() => {
    tripService.getAllTripConfig(0, 10).then((res) => {
      setTripList(res.data ?? []);
    });
  }, []);

  const [activeStep, setActiveStep] = React.useState(0);
  const isStepOptional = (step: number) => {
    return step === 1;
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div>
      <SelectTicket />
      <ul className="_2tY3C yOn4a" data-test-selector="item-cards-layout-list">
        <li className="_1cn3x ">
          <span role="group">
            <div className="_2sT86 EurVi">
              <article className="_3Oe1A">
                <section className="_25Upe">
                  <section className="_2imXI">
                    <div className="_3XNMI">
                      <a
                        href="https://themeforest.net/item/voevod-a-bespoke-woocommerce-theme/21276462"
                        aria-label="Voevod - WooCommerce Store"
                      >
                        <div className="_2_3rp ">
                          <div>
                            <img
                              className="_1xvs1"
                              src="https://themeforest.img.customer.envatousercontent.com/files/239948860/00_preview.png?auto=compress%2Cformat&amp;fit=crop&amp;crop=top&amp;w=590&amp;h=300&amp;s=96cd72e751efbeb74b3bcd0d617a0903"
                              title="Voevod - WooCommerce Store"
                              alt="Voevod - WooCommerce Store"
                            />
                          </div>
                        </div>
                      </a>
                    </div>
                    <section className="_1SQpT">
                      <a
                        href="https://themeforest.net/item/voevod-a-bespoke-woocommerce-theme/21276462"
                        className="KFSGT"
                        role="toolbar"
                        title="Voevod - WooCommerce Store"
                      ></a>
                      <section className="_3cDcj"></section>
                    </section>
                  </section>
                </section>
                <section className="hypZf">
                  <div className="U157g">
                    <div className="vfsyA">
                      <div className="_25ygu">
                        <h3 className="_2WWZB">
                          <a className="_2Pk9X">{tripList[0]?.brandName}</a>
                        </h3>

                        <div className="JHf2a">
                          <a className="R8zaM">Chính Sách </a>
                        </div>
                      </div>
                    </div>
                    <div className="_1VJk4">
                      <div className="_4zAGT">
                        <div className="GeySM">
                          <p className="_2g_QW">
                            Seat: {tripList[0]?.seatAmount}
                          </p>{" "}
                        </div>
                      </div>
                      <ul className="_3bM8k">
                        <li> </li>
                        <li className="Ck5w-">
                          {searchParams.get("from") ?? tripList[0]?.departFrom}{" "}
                          : {tripList[0]?.departAt}
                        </li>
                        <div className="icon">
                          <ArrowDownwardOutlinedIcon />
                        </div>
                        <li className="Ck5w-">
                          {searchParams.get("to") ?? tripList[0]?.arriveTo} :{" "}
                          {tripList[0]?.arriveAt}
                        </li>
                      </ul>

                      <b>KHÔNG CẦN THANH TOÁN TRƯỚC</b>
                    </div>
                  </div>
                </section>
                <section className="_38ivw">
                  <section className="_9q1LS">
                    <section className="_3dJU8"></section>
                    <section className="_7H2LP">
                      <div className="-DeRq">{tripList[0]?.price} VND</div>

                      <div className="GeySM">
                        <span className="_2g_QW">Số chỗ còn lại:</span>{" "}
                        <span className="_3TIJT">
                          {" "}
                          {tripList[0]?.vehicleType}
                        </span>
                      </div>
                    </section>
                    <section className="VRlLl">
                      <a
                        className="_3tfm8 _3ePxY"
                        role="button"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        BOOK NOW <ArrowDropDownIcon />{" "}
                      </a>
                    </section>
                  </section>
                </section>
              </article>
            </div>
          </span>
        </li>
        <DataProvider>
          <Box sx={{ width: "100%" }}>
            <Stepper activeStep={activeStep}>
              {formstep.map((label, index) => {
                const stepProps: { completed?: boolean } = {};
                const labelProps: {
                  optional?: React.ReactNode;
                } = {};
                if (isStepOptional(index)) {
                  labelProps.optional = (
                    <Typography variant="caption"></Typography>
                  );
                }

                return (
                  <Step key={label.message} {...stepProps}>
                    <StepLabel {...labelProps}>{label.message}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  Cảm ơn bạn đã cung cấp thông tin
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Trở Lại
                  </Button>
                  <a href="/success">
                    <Button>Xem Chi Tiết</Button>
                  </a>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {formstep[activeStep].component}

                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Trở lại
                  </Button>
                  <Box sx={{ flex: "1 1 auto" }} />

                  <Button onClick={handleNext}>Tiếp</Button>
                </Box>
              </React.Fragment>
            )}
          </Box>
        </DataProvider>
      </ul>
    </div>
  );
};

export default Travel;
