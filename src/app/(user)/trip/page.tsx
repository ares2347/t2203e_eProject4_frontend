"use client";

import SelectTicket from "@/components/ticket/selectTicket";
import { TripService } from "@/service/trip/tripService";
import { useSearchParams } from "next/navigation";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import React from "react";
import { Box, Button, Container, Dialog, Grid, Step, StepLabel, Stepper, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Divider from "@mui/material/Divider";
import SellIcon from "@mui/icons-material/Sell";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Step1 from "../travel/step1";
import Step3 from "../travel/step3";
import { DataProvider } from "../travel/DataContext";
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

const TripPage = () => {
  const tripService = new TripService();
  const searchParams = useSearchParams();
  const [tripList, setTripList] = React.useState<any>(tripService.getAllTrip());
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
      <Container maxWidth="lg">
        <Grid container>
          <Grid
            item
            container
            xs={12}
            gap={2}
            wrap="nowrap"
            boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            paddingY={2}
            paddingX={2}
            marginY={2}
            alignItems="center"
          >
            {/* TODO: Replace this url */}
            <Grid item xs={3}>
              <img
                src="https://vcdn-dulich.vnecdn.net/2022/06/16/World-Travel-1-2359-1655367719.jpg"
                width="100%"
              />
            </Grid>
            {/* TODO: Replace info */}
            <Grid item direction="column" xs={6} height="100%">
              <Typography
                color="hsl(0, 0%, 30%)"
                fontWeight={700}
                fontSize={18}
                children={`${tripList[0]?.brandName}`}
                paddingBottom={1}
              />
              <Typography
                color="hsl(0, 0%, 30%)"
                fontWeight={500}
                fontSize={14}
                children={`${tripList[0]?.vehicleType}`}
                paddingBottom={1}
              />
              <Grid
                container
                direction="row"
                columns={24}
                wrap="nowrap"
                gap={1}
              >
                <Grid
                  item
                  container
                  direction="column"
                  xs={1}
                  wrap="nowrap"
                  alignItems="center"
                >
                  <Grid
                    item
                    children={
                      <RadioButtonUncheckedIcon
                        sx={{ fontSize: 18, alignSelf: "center" }}
                      />
                    }
                    xs={1}
                  />
                  <Grid
                    borderLeft="4px dotted hsl(0, 0%, 50%)"
                    xs={10}
                    item
                    marginBottom={0.5}
                  />
                  <Grid
                    item
                    children={<LocationOnIcon sx={{ fontSize: 20 }} />}
                    xs={1}
                    alignSelf="center"
                  />
                </Grid>
                <Grid item container direction="column" xs={23}>
                  <Grid
                    item
                    children={
                      <Typography
                        color="hsl(0, 0%, 30%)"
                        fontWeight={700}
                        fontSize={20}
                        children={`${tripList[0]?.departFrom} : ${tripList[0]?.departAt}`}
                      />
                    }
                    xs={1}
                  />
                  <Grid
                    item
                    children={
                      <Typography
                        color="hsl(0, 0%, 30%)"
                        fontWeight={500}
                        fontSize={14}
                        children={`1.30`}
                      />
                    }
                    xs={1}
                  />
                  <Grid
                    item
                    children={
                      <Typography
                        color="hsl(0, 0%, 30%)"
                        fontWeight={700}
                        fontSize={20}
                        children={`${tripList[0]?.arriveAt} : ${tripList[0]?.arriveTo}`}
                      />
                    }
                    xs={1}
                  />
                </Grid>
              </Grid>
              <Typography />
            </Grid>
            <Grid
              item
              container
              direction="column"
              xs={3}
              borderLeft="1px solid hsl(0, 0%, 60%)"
              height="100%"
              paddingX={2}
            >
              <Grid
                item
                container
                xs={4}
                direction="row"
                alignItems="center"
                wrap="nowrap"
              >
                <SellIcon sx={{ fontSize: 18, color: "hsl(0, 0%, 30%)" }} />
                {/* TODO: Update data */}
                <Typography
                  children={`${tripList[0]?.price}`}
                  color="hsl(0, 0%, 30%)"
                  fontWeight={700}
                  fontSize={28}
                />
              </Grid>
              {/* TODO: Update data */}
              <Grid item xs={4}>
                <Typography
                  children={`Số chỗ còn lại: ${tripList[0]?.seatAmount}`}
                  color="hsl(0, 0%, 30%)"
                  fontWeight={500}
                  fontSize={16}
                />
              </Grid>
              <Grid item xs={4}>
                <React.Fragment>
                  <Button
                    children={<Typography>Đặt chỗ ngay</Typography>}
                    fullWidth
                    color="primary" variant="outlined" onClick={handleClickOpen} />

                  <Dialog
                    open={open}
                    onClose={handleClose}
                    maxWidth='md'
                    fullWidth
                  >

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
                  </Dialog>
                </React.Fragment>

              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default TripPage;
