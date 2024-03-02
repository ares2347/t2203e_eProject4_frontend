"use client";

import SelectTicket from "@/components/ticket/selectTicket";
import { TripService } from "@/service/trip/tripService";
import { useSearchParams } from "next/navigation";
import React from "react";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Dialog,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Pagination,
  Radio,
  RadioGroup,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SellIcon from "@mui/icons-material/Sell";
import Step1 from "./step1";
import Step3 from "./step3";
import { DataProvider } from "../travel/DataContext";
import { HttpPaginationResponse, HttpResponse } from "@/model/http/httpEnum";
import { format } from "date-fns";

const steps = ["Lựa chọn chỗ ngồi", "Điền thông tin"];
const VehicleType : {[key: string|number]: string} = {
  COACH: "Xe khách"
}

const TripPage = () => {
  const tripService = new TripService();
  const searchParams = useSearchParams();
  const [tripList, setTripList] = React.useState<TripModel[]>();
  const [totalPage, setTotalPage] = React.useState<number>(0);
  const [open, setOpen] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const [sort, setSort] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const [size, setSize] = React.useState(10);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const getFromStep = (seatAmount: number) => {
    return [
      {
        component: <Step1 seatAmount={seatAmount} />,
        message: "Lựa chọn chỗ ngồi",
      },
      {
        component: <Step3 />,
        message: "Điền thông tin",
      },
    ];
  };

  React.useEffect(() => {
    queryTrips(page);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const isStepOptional = (step: number) => {
    return step === 1;
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const onSortSelect = (value: React.ChangeEvent<HTMLInputElement>) => {
    setSort(parseInt(value.currentTarget.value));
  };
  const onPageChanges = (e: React.ChangeEvent<any>, value: number) => {
    queryTrips(value);
  };
  const queryTrips = (page: number) => {
    const departFrom = searchParams.get("from") as string;
    const departAt = format(
      new Date(searchParams.get("checkin") as string),
      "MM-dd-yyyy"
    );
    const arriveTo = searchParams.get("to");
    tripService
      .getAllTripAsync(departFrom, departAt, arriveTo, page - 1, size)
      .then((x) => {     
        setTripList(x.data?.content);
        setPage((x.data?.pageable.pageNumber ?? 0) + 1);
        setSize(x.data?.pageable.pageSize ?? 0);
        setTotalPage(x.data?.totalPages ?? 0);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <SelectTicket />
      <Container maxWidth="lg">
        <Grid container gap={1} wrap="nowrap">
          <Grid item xs={3} marginY={2}>
            <FormControl
              sx={{
                width: "100%",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                paddingY: 2,
                paddingX: 2,
              }}
            >
              <FormLabel
                id="demo-radio-buttons-group-label"
                sx={{ fontWeight: 700 }}
                children="Sắp xếp"
              />
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={0}
                name="sort"
                onChange={(e) => onSortSelect(e)}
              >
                <FormControlLabel
                  value={0}
                  control={<Radio />}
                  label="Mặc định"
                />
                <FormControlLabel
                  value={1}
                  control={<Radio />}
                  label="Giờ đi sớm nhất"
                />
                <FormControlLabel
                  value={2}
                  control={<Radio />}
                  label="Giờ đi muộn nhất"
                />
                <FormControlLabel
                  value={3}
                  control={<Radio />}
                  label="Giá tăng dần"
                />
                <FormControlLabel
                  value={4}
                  control={<Radio />}
                  label="Giá giảm dần"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          {isLoading ? (
            <Grid
              item
              container
              xs={9}
              gap={2}
              wrap="nowrap"
              direction="column"
              alignItems="center"
              justifyContent="center"
              paddingX={2}
              marginY={2}
            >
              <Grid item>
                <CircularProgress />
              </Grid>
            </Grid>
          ) : (
            <Grid
              item
              container
              xs={9}
              gap={2}
              wrap="nowrap"
              direction="column"
              paddingX={2}
              marginY={2}
            >
              {tripList?.map((item) => (
                <Grid
                  item
                  container
                  xs={12}
                  gap={2}
                  wrap="nowrap"
                  boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                  paddingY={2}
                  paddingX={2}
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
                  <Grid item container direction="column" xs={6} height="100%">
                    <Typography
                      color="hsl(0, 0%, 30%)"
                      fontWeight={700}
                      fontSize={18}
                      children={`${item.brandName}`}
                      paddingBottom={1}
                    />
                    <Typography
                      color="hsl(0, 0%, 30%)"
                      fontWeight={500}
                      fontSize={14}
                      children={`${VehicleType[item.vehicleType]}`}
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
                              children={`${item.departFrom} :
                        ${item.departAt.slice(0, -3)}`}
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
                              children={`${item.arriveTo} : 
                        ${item.arriveAt.slice(0, -3)}`}
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
                      <SellIcon
                        sx={{ fontSize: 14, color: "hsl(0, 0%, 30%)" }}
                      />
                      {/* TODO: Update data */}
                      <Typography
                        children={` VND ${item.price.toLocaleString()}`}
                        color="hsl(0, 0%, 30%)"
                        fontWeight={700}
                        fontSize={20}
                      />
                    </Grid>
                    {/* TODO: Update data */}
                    <Grid item xs={4}>
                      <Typography
                        children={`Số chỗ còn lại: ${item.seatRemains ?? 0}`}
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
                          color="primary"
                          variant="outlined"
                          onClick={handleClickOpen}
                        />

                        <Dialog
                          open={open}
                          onClose={handleClose}
                          maxWidth="lg"
                          PaperProps={{ sx: { padding: 4 } }}
                          fullWidth
                        >
                          <DataProvider>
                            <Box sx={{ width: "100%" }}>
                              <Stepper activeStep={activeStep}>
                                {getFromStep(item.seatAmount).map(
                                  (label, index) => {
                                    const stepProps: { completed?: boolean } =
                                      {};
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
                                        <StepLabel {...labelProps}>
                                          {label.message}
                                        </StepLabel>
                                      </Step>
                                    );
                                  }
                                )}
                              </Stepper>
                              {activeStep === steps.length ? (
                                <React.Fragment>
                                  <Typography sx={{ mt: 2, mb: 1 }}>
                                    Cảm ơn bạn đã cung cấp thông tin
                                  </Typography>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      flexDirection: "row",
                                      pt: 2,
                                    }}
                                  >
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
                                  {
                                    getFromStep(item.seatAmount)[activeStep]
                                      .component
                                  }

                                  <Box
                                    sx={{
                                      display: "flex",
                                      flexDirection: "row",
                                      pt: 2,
                                    }}
                                  >
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
              ))}
              <Grid item>
                <Stack alignItems="center">
                  <Pagination
                    count={totalPage}
                    page={page}
                    color="primary"
                    onChange={onPageChanges}
                  />
                </Stack>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default TripPage;
