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
import { Button, CircularProgress, Grid, Pagination, Stack } from "@mui/material";

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
      setVehicleConfigList(x.data?.content ?? []);
      setPage((x.data?.pageable?.pageNumber ?? 0) + 1);
      setRowsPerPage(x.data?.pageable?.pageSize ?? 0);
      setTotalPage(x.data?.totalPages ?? 0);
      setIsLoading(false);
    });
  };

  return isLoading ? (
    <Grid
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
    <Paper sx={{ overflow: "hidden" }}>
      <TableContainer sx={{ paddingLeft: 5, maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>STT</TableCell>
              <TableCell>Tên phương tiện</TableCell>
              <TableCell>Loại phương tiện</TableCell>
              <TableCell>Số chỗ ngồi</TableCell>
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
                  <TableCell>{row.vehicleName}</TableCell>
                  <TableCell>{row.vehicleType}</TableCell>
                  <TableCell>{row.seatAmount}</TableCell>
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
