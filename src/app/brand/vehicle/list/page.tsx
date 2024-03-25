"use client";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { VehicleService } from "@/service/vehicle/vehicleService";
import { Box, Button, CircularProgress, FormControl, Grid, InputLabel, MenuItem, Pagination, Select, SelectChangeEvent, Stack, TextField } from "@mui/material";
import { VehicleModel } from "@/model/vehicle/VehicleModel";

export default function VehicleConfigList() {
  const vehicleService = new VehicleService();

  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [totalPage, setTotalPage] = React.useState<number>(0);

  const [vehicleConfigList, setVehicleConfigList] = React.useState<
    VehicleModel[]
  >([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    queryVehicleConfig(page);
  }, []);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const queryVehicleConfig = (page: number) => {
    vehicleService.getAllVehicleListConfigAsync(page - 1, rowsPerPage).then((x) => {
      setVehicleConfigList(x.data?.data ?? []);
      setPage((x.data?.page ?? 0) + 1);
      setRowsPerPage(x.data?.page ?? 0);
      setTotalPage(x.data?.totalPage ?? 0);
      setIsLoading(false);
    });
  };
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return isLoading ? (

    <Grid>
      <CircularProgress />
    </Grid>
  ) : (
    <Paper sx={{ overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }} >
        <Table sx={{ width: 1200 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>STT</TableCell>
              <TableCell>Tên nhà xe</TableCell>
              <TableCell>Loại phương tiện</TableCell>
              <TableCell>Số chỗ ngồi</TableCell>
              <TableCell>Biển Kiểm Soát</TableCell>
              <TableCell>Bến Hiện Tại</TableCell>
              {/* <TableCell>Tài Xế</TableCell> */}
              <TableCell>Trạng Thái</TableCell>
              <TableCell>Chỉnh Sửa</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vehicleConfigList.map((row, index) => {
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.vehicleConfigId}
                >
                  <TableCell>{index + 1 + rowsPerPage * (page - 1)}</TableCell>
                  <TableCell>{row.licensePlate}</TableCell>
                  <TableCell>{row.vehicleType}</TableCell>
                  <TableCell>{row.seatAmount}</TableCell>
                  <TableCell>{row.licensePlate}</TableCell>
                  <TableCell>{row.currentStation}</TableCell>
                  {/* <TableCell>
                    <TextField
                      size="small"
                      required
                      id="Tai xe"
                      defaultValue="Nguyễn Văn A"
                    />
                  </TableCell> */}
                  <TableCell>
                    <Box sx={{ minWidth: 40 }}>
                      <FormControl sx={{ minWidth: 120 }}>
                        <Select
                          size="small"
                          value={age}
                          onChange={handleChange}
                        >
                          <MenuItem value={10}>Chưa Chạy</MenuItem>
                          <MenuItem value={20}>Đang Chạy</MenuItem>
                          <MenuItem value={30}>Đã Chạy</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </TableCell>
                  <TableCell><Button variant="outlined" color="error">Huỷ</Button> <Button variant="outlined">Sửa</Button></TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack alignItems="center">
        <Pagination
          count={totalPage}
          page={page}
          color="primary"
          onChange={handleChangePage}
        />
      </Stack>
    </Paper>
  );
}
