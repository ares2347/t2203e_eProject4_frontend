'use client'
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SellIcon from "@mui/icons-material/Sell";
import React, { useEffect, useState } from 'react';
import "./css.css";
import { useRouter, useSearchParams } from "next/navigation";
import { UserInfo } from '../../../model/auth/AuthModel';
import Tabs from '@mui/material/Tabs';

import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TripService } from "@/service/trip/tripService";
import { Alert, Button, Container, Grid } from '@mui/material';

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
const AccountPage = () => {
    const tripService = new TripService();
    const [tripList, setTripList] = React.useState<any>(tripService.getAllTrip());
    const searchParams = useSearchParams();



    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    useEffect(() => {
        if (typeof window !== "undefined") {
            const userInfoPayload = localStorage.getItem("userInfo")
                ? JSON.parse(localStorage.getItem("userInfo") as string)
                : null;
            setUserInfo(userInfoPayload);
        } else {
            setUserInfo(null);
        }
        console.log("aaa");
    }, []);

    const [activeContent, setActiveContent] = useState<string>('thongTinTaiKhoan');

    const showContent = (id: string) => {
        setActiveContent(id);
    };
    function updateAccountInfo(): void {
        throw new Error('Function not implemented.');
    }

    return (
        <div className="container-1">
            <div className="left-panel">
                <h2>Thông Tin Tài Khoản</h2>
                <div className="menu-item" onClick={() => showContent('thongTinTaiKhoan')}>
                    Thông tin tài khoản
                </div>

                <div className="menu-item" onClick={() => showContent('veCuaToi')}>
                    Vé của tôi
                </div>

                <div className="menu-item" onClick={() => showContent('quanLiThe')}>
                    Quản lí thẻ
                </div>

            </div>

            <div className="right-panel">
                <div className="content-wrapper">
                    <div className={`content ${activeContent === 'thongTinTaiKhoan' ? 'active' : ''}`} id="thongTinTaiKhoan">
                        <h2>Thông tin tài khoản</h2>

                        <div className="form-group">
                            {userInfo ? (
                                <><label htmlFor="fullname">Họ và tên:</label>
                                    <input type="text" id="fullname" defaultValue={`${userInfo.fullName}`} /></>

                            ) : (
                                <p>no data</p>
                            )}
                        </div>
                        <div className="form-group">
                            {userInfo ? (
                                <><label htmlFor="fullname">Số Điện Thoại:</label>
                                    <input type="text" id="phone" defaultValue={`${userInfo.phoneNumber}`} /></>
                            ) : (
                                <p>no data</p>
                            )}
                        </div>
                        <div className="form-group">
                            {userInfo ? (
                                <><label htmlFor="fullname">Email:</label>
                                    <input type="email" id="email" defaultValue={`${userInfo.email}`} /></>
                            ) : (
                                <p>no data</p>
                            )}
                        </div>
                        <div className="form-group">
                            <button onClick={() => updateAccountInfo()}>Cập nhật thông tin</button>
                        </div>
                    </div>
                    <div className={`content ${activeContent === 'veCuaToi' ? 'active' : ''}`} id="veCuaToi">
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label="Hiện Tại" {...a11yProps(0)} />
                                    <Tab label="Đã Đi" {...a11yProps(1)} />
                                    <Tab label="Đã Huỷ" {...a11yProps(2)} />
                                </Tabs>
                            </Box>
                            <CustomTabPanel value={value} index={0}>
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
                                                                    children={`${searchParams.get("from") ?? tripList[0]?.departFrom} :
                        ${tripList[0]?.departAt}`}
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
                                                                    children={`${searchParams.get("from") ?? tripList[0]?.arriveTo} : 
                        ${tripList[0]?.arriveAt}`}
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
                                                    <Button href='/success'
                                                        children={<Typography>Xem Vé</Typography>}
                                                        fullWidth
                                                        color="secondary" variant="outlined" />

                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Button
                                                        children={<Typography>Hoàn Vé</Typography>}
                                                        fullWidth
                                                        color="error" variant="outlined" />

                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Container>
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={1}>
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
                                                                    children={`${searchParams.get("from") ?? tripList[0]?.departFrom} :
                        ${tripList[0]?.departAt}`}
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
                                                                    children={`${searchParams.get("from") ?? tripList[0]?.arriveTo} : 
                        ${tripList[0]?.arriveAt}`}
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

                                                <Grid item xs={6}>
                                                    <Alert severity="success">Hoàn Thành</Alert>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Container>                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={2}>
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
                                                                    children={`${searchParams.get("from") ?? tripList[0]?.departFrom} :
                        ${tripList[0]?.departAt}`}
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
                                                                    children={`${searchParams.get("from") ?? tripList[0]?.arriveTo} : 
                        ${tripList[0]?.arriveAt}`}
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

                                                <Grid item xs={6}>
                                                    <Alert severity="error">Đã Huỷ</Alert>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Container>                             </CustomTabPanel>
                        </Box>
                    </div>
                    <div className={`content ${activeContent === 'quanLiThe' ? 'active' : ''}`} id="quanLiThe">
                        <h2>Quản lí thẻ</h2>
                        <div className="card-section">
                            <h2>Thẻ ATM nội địa</h2>
                            <button className="add-card-button">Thêm thẻ mới</button>
                        </div>
                        <div className="card-section">
                            <h2>Thẻ thanh toán quốc tế</h2>
                            <button className="add-card-button">Thêm thẻ mới</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountPage;
