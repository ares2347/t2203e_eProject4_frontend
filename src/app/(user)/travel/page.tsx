"use client";

import SelectTicket from "@/components/ticket/selectTicket";
import { TripService } from "@/service/trip/tripService";
import { useSearchParams } from "next/navigation";
import React from "react";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  Dialog,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemText,
  Pagination,
  Radio,
  RadioGroup,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SellIcon from "@mui/icons-material/Sell";
import Step1 from "./step1";
import Step2 from "./step2";

import Step3 from "./step3";
import { DataProvider } from "../travel/DataContext";
import { HttpPaginationResponse, HttpResponse } from "@/model/http/httpEnum";
import { format } from "date-fns";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const steps = ["Lựa chọn chỗ ngồi", "Điểm Đón Trả", "Điền thông tin"];

const VehicleType: { [key: string | number]: string } = {
  COACH: "Xe khách"
}

const TripPage = () => {
  const tripService = new TripService();
  const searchParams = useSearchParams();
  const [tripList, setTripList] = React.useState<TripModel[]>();
  const [totalPage, setTotalPage] = React.useState<number>(0);
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);

  const [activeStep, setActiveStep] = React.useState(0);
  const [sort, setSort] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const [size, setSize] = React.useState(10);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const getFromStep = (seatAmount: number, price: number) => {
    return [
      {
        component: <Step1 seatAmount={seatAmount} price={price} />,
        message: "Lựa chọn chỗ ngồi",
      },
      {
        component: <Step2 />,
        message: "Điểm Đón Trả",
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
  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
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
                    <Grid item xs={1}>
                      <Typography
                        children={`Số chỗ còn lại: ${item.seatRemains ?? 0}`}
                        color="hsl(0, 0%, 30%)"
                        fontWeight={500}
                        fontSize={16}
                      />
                    </Grid>
                    <Grid item>
                      <Button
                        children={<Typography>Thông Tin</Typography>}
                        fullWidth
                        color="primary"
                        variant="outlined"
                        onClick={handleClickOpen1}
                      />
                      <Dialog
                        open={open1}
                        onClose={handleClose1}
                        maxWidth="md"
                        PaperProps={{ sx: { padding: 4 } }}
                        fullWidth
                      >
                        <Box sx={{ width: '100%' }}>
                          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                              <Tab sx={{ paddingRight: 20 }} label="Hình ảnh xe" {...a11yProps(0)} />
                              <Tab sx={{ paddingRight: 20 }} label="Thông tin tài xế" {...a11yProps(1)} />
                              <Tab sx={{ paddingRight: 15 }} label="Chính Sách" {...a11yProps(2)} />
                            </Tabs>
                          </Box>
                          <CustomTabPanel value={value} index={0}>
                            <Grid item>
                              <ImageList sx={{ width: 600, height: 450, paddingLeft: 20 }} cols={3} rowHeight={164}>
                                {itemData.map((item) => (
                                  <ImageListItem key={item.img}>
                                    <img
                                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                      alt={item.title}
                                      loading="lazy"
                                    />
                                  </ImageListItem>
                                ))}
                              </ImageList>
                            </Grid>
                          </CustomTabPanel>
                          <CustomTabPanel value={value} index={1}>
                            <Stack direction="row" spacing={2}>
                              <Grid item
                                container
                                direction="column"
                                xs={5}
                                height="100%"
                              >
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                <Typography children={`Nguyen Van A`} />
                                <Typography children={`Lai xe`} />
                                <Typography children={`0131423134`} />
                              </Grid>
                              <Grid item
                                container
                                direction="column"
                                xs={5}
                                borderLeft="1px solid hsl(0, 0%, 60%)"
                                height="100%"
                                paddingX={6}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                <Typography children={`Nguyen Van B`} />
                                <Typography children={`Phu xe`} />
                                <Typography children={`0131423134`} />
                              </Grid>
                            </Stack>
                          </CustomTabPanel>
                          <CustomTabPanel value={value} index={2}>
                            <Typography
                              children={`Chính sách của chúng tôi`}
                              color="hsl(0, 0%, 30%)"
                              fontWeight={700}
                              fontSize={20}
                              textAlign='center'
                            />
                            <Typography
                              children={`Yêu cầu khi lên xe`}
                              color="hsl(0, 0%, 30%)"
                              fontWeight={300}
                              fontSize={20}
                            />
                            <List>
                              <ListItem>
                                <ListItemText primary="- Có mặt tại văn phòng/quầy vé/bến xe trước 30 phút để làm thủ tục lên xe" />
                              </ListItem>
                              <ListItem>
                                <ListItemText primary="- Xuất trình SMS/Email đặt vé trước khi lên xe" />
                              </ListItem>
                              <ListItem>
                                <ListItemText primary="- Không mang đồ ăn, thức ăn có mùi lên xe" />
                              </ListItem>
                              <ListItem>
                                <ListItemText primary="- Không hút thuốc, uống rượu, sử dụng chất kích thích trên xe" />
                              </ListItem>
                              <ListItem>
                                <ListItemText primary="- Không mang các vật dễ cháy nổ lên xe" />
                              </ListItem>
                              <ListItem>
                                <ListItemText primary="- Không vứt rác trên xe" />
                              </ListItem>
                              <ListItem>
                                <ListItemText primary="- Không làm ồn, gây mất trật tự trên xe" />
                              </ListItem>
                              <Grid
                                item
                                container
                                direction="column"
                                borderBottom="1px solid hsl(0, 0%, 60%)"
                                height="100%"
                                paddingX={20}
                              />
                            </List>
                            <Typography
                              children={`Hành lý xách tay`}
                              color="hsl(0, 0%, 30%)"
                              fontWeight={300}
                              fontSize={20}
                            />
                            <List>
                              <ListItem>
                                <ListItemText primary="- Tổng trọng lượng hành lý không vượt quá 3 kg" />
                              </ListItem>
                              <Grid
                                item
                                container
                                direction="column"
                                borderBottom="1px solid hsl(0, 0%, 60%)"
                                height="100%"
                                paddingX={20}
                              />
                            </List>
                            <Typography
                              children={`Trẻ em và phụ nữ có thai`}
                              color="hsl(0, 0%, 30%)"
                              fontWeight={300}
                              fontSize={20}
                            />
                            <List>
                              <ListItem>
                                <ListItemText primary="- Trẻ em dưới 3 tuổi hoặc dưới 100 cm được miễn phí vé nếu ngồi cùng ghế/giường với bố mẹ" />
                              </ListItem>
                              <ListItem>
                                <ListItemText primary="- Trẻ em từ 3 tuổi hoặc cao từ 100 cm trở lên mua vé như người lớn" />
                              </ListItem>
                              <ListItem>
                                <ListItemText primary="- Phụ nữ có thai cần đảm bảo sức khỏe trong suốt quá trình di chuyển" />
                              </ListItem>
                              <Grid
                                item
                                container
                                direction="column"
                                borderBottom="1px solid hsl(0, 0%, 60%)"
                                height="100%"
                                paddingX={20}
                              />
                            </List><Typography
                              children={`Xuất hóa đơn GTGT`}
                              color="hsl(0, 0%, 30%)"
                              fontWeight={300}
                              fontSize={20}
                            />
                            <List>
                              <ListItem>
                                <ListItemText primary="- Nhà xe có cung cấp hóa đơn GTGT cho dịch vụ xe khách, phí xuất hóa đơn là 10 % trên giá dịch vụ quý khách đã mua" />
                              </ListItem>
                              <ListItem>
                                <ListItemText primary="= Nhà xe từ chối xuất lại hóa đơn nếu hành khách cung cấp sai thông tin" />
                              </ListItem>
                            </List>
                          </CustomTabPanel>
                        </Box>
                      </Dialog>
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
                          <DataProvider initData={{ tripId: item.tripId, tripConfigId: item.tripConfigId }}>
                            <Box sx={{ width: "100%" }}>
                              <Stepper activeStep={activeStep}>
                                {getFromStep(item.seatAmount, item.price).map(
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
                                    getFromStep(item.seatAmount, item.price)[activeStep]
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
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];
export default TripPage;
