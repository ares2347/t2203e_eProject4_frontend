'use client'
import React, { useEffect, useState } from 'react';
import "./css.css";
import { useRouter } from "next/navigation";
import { UserInfo } from '../../../model/auth/AuthModel';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TripService } from "@/service/trip/tripService";

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

    React.useEffect(() => {
        tripService.getAllTripConfig(0, 10).then((res) => {
            setTripList(res.data ?? []);
        });
    }, []);

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
                        


                        {userInfo ? (
                                <>
                                <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label="Hiện Tại" {...a11yProps(0)} />
                                    <Tab label="Đã Đi" {...a11yProps(1)} />
                                    <Tab label="Đã Huỷ" {...a11yProps(2)} />
                                </Tabs>
                            </Box>
                            <CustomTabPanel value={value} index={0}>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Brand</TableCell>
                                                <TableCell>Depart From</TableCell>
                                                <TableCell>Depart At</TableCell>
                                                <TableCell>Arrive To</TableCell>
                                                <TableCell>Arrive At</TableCell>
                                                <TableCell>Status</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {tripList[0]?.brandName}                                                    </TableCell>
                                                <TableCell >{tripList[0]?.departFrom}</TableCell>
                                                <TableCell >{tripList[0]?.departAt}</TableCell>
                                                <TableCell >{tripList[0]?.arriveTo}</TableCell>
                                                <TableCell >{tripList[0]?.arriveAt}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={1}>
                                Item Two
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={2}>
                                Item Three
                            </CustomTabPanel>
                        </Box>
                                    </>
                            ) : (
                                <p>no data</p>
                            )}


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
