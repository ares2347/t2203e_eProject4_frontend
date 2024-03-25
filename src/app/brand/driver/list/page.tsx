'use client';
import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

const DriverList = () => {
  const [drivers, setDrivers] = useState([
    {
      id: 1,
      fullName: "Nguyễn Trung Kiên",
      phoneNumber: "0123456789",
      email: "nguyenvana@example.com",
      status: "Đang đi khách",
      vehicle: "BMV",
      shift: "Ca sáng",
    },
    {
      id: 2,
      fullName: "Trần Thị Chiến",
      phoneNumber: "0987654321",
      email: "tranthib@example.com",
      status: "Sẵn sàng",
      vehicle: "Xe con",
      shift: "Ca chiều",
    },
   
  ]);

  const ITEMS_PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(drivers.length / ITEMS_PER_PAGE);

  const getCurrentDrivers = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return drivers.slice(startIndex, endIndex);
  };

  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };

  return (
    <Box padding={3}>
      <Typography variant="h4" align="center" gutterBottom>
        Danh sách tài xế
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => console.log("Thêm tài xế mới")}
          >
            Thêm tài xế mới
          </Button>
        </Grid>
        <Grid item xs={12}>
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>Số thứ tự</th>
                <th>Họ và tên</th>
                <th>Số điện thoại</th>
                <th>Email</th>
                <th>Trạng thái</th>
                <th>Phương tiện phụ trách</th>
                <th>Ca chạy đăng kí</th>
                <th>Hành động</th> {/* Di chuyển cột "Hành động" xuống cuối */}
              </tr>
            </thead>
            <tbody>
              {getCurrentDrivers().map((driver, index) => (
                <tr key={driver.id}>
                  <td>{index + 1}</td>
                  <td>{driver.fullName}</td>
                  <td>{driver.phoneNumber}</td>
                  <td>{driver.email}</td>
                  <td>{driver.status}</td>
                  <td>{driver.vehicle}</td>
                  <td>{driver.shift}</td>
                  <td> {/* Cột Hành động */}
                    <Button
                      variant="outlined"
                      color="primary"
                      size="small"
                      onClick={() => console.log("Xem chi tiết", driver.id)}
                    >
                      Xem chi tiết
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      size="small"
                      onClick={() => console.log("Sửa", driver.id)}
                      style={{ marginLeft: "5px" }}
                    >
                      Sửa
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Button
            variant="outlined"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            style={{ marginRight: "10px" }}
          >
            Trang trước
          </Button>
          <span>Trang {currentPage}</span>
          <Button
            variant="outlined"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            style={{ marginLeft: "10px" }}
          >
            Trang sau
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DriverList;
