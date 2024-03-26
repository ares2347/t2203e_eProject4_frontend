"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button, Paper, TextField } from "@mui/material";
import { ReferenceDataService } from "@/service/referencedata/referenceDataService";
import { TripService } from "@/service/trip/tripService";
import { VehicleType } from "@/model/vehicle/VehicleModel";
import { TripModel, TripStatusEnum, TripStatusList } from "@/model/trip/TripModel";
function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const TripList = () => {
  const [age, setAge] = React.useState("");
  const [cityList, setCityList] = React.useState<ReferenceDataModel[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [stationList, setStationList] = React.useState<ReferenceDataModel[]>(
    []
  );
  const [tripList, setTripList] = React.useState<TripModel[]>([]);
  const referenceDataService = new ReferenceDataService();
  const tripService = new TripService();

  React.useEffect(() => {
    referenceDataService
      .getReferenceDataByType("CITY")
      .then((res) => {
        setCityList(res.data ?? []);
      })
      .catch(() => {
        setCityList([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
    referenceDataService
      .getReferenceDataByType("STATION")
      .then((res) => {
        setStationList(res.data ?? []);
      })
      .catch(() => {
        setStationList([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
    tripService.getAllBrandTripsAsync("", "", "", "", 0, 10).then((res) => {
      setTripList(res.data?.data ?? []);
    });
  }, []);
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <Paper sx={{ overflow: "hidden" }}>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Chuyến</TableCell>
              <TableCell>Bến Xuất Phát</TableCell>
              <TableCell>Thời gian</TableCell>
              <TableCell>Phương tiện</TableCell>
              <TableCell>Số Chỗ</TableCell>
              <TableCell>Biển Kiểm Soát</TableCell>
              <TableCell>Tài xế</TableCell>
              <TableCell>Trạng thái</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tripList.map((trip) => (
              <TableRow
                key={trip.tripId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  {
                    cityList.find((x) => x.code == trip.startCity)
                      ?.codeDescription
                  }{" "}
                  -{" "}
                  {
                    cityList.find((x) => x.code == trip.endCity)
                      ?.codeDescription
                  }
                </TableCell>
                <TableCell>
                  {
                    stationList.find((x) => x.code == trip.startStation)
                      ?.codeDescription
                  }
                </TableCell>
                <TableCell>
                  {trip.startDate}
                  <br />
                  {trip.startTime.slice(0, 5)}{" "}
                </TableCell>
                <TableCell>
                  {VehicleType[trip.vehicleType]} - {trip.vehicle?.vehicleBrand}
                </TableCell>
                <TableCell>{trip.seatAmount}</TableCell>
                <TableCell>{trip.vehicle?.licensePlate}</TableCell>
                <TableCell> Nguyễn Văn A</TableCell>
                <TableCell>
                  <Box sx={{ minWidth: 40 }}>
                    <FormControl sx={{ minWidth: 120 }}>
                      <Select
                        size="small"
                        value={trip.tripStatus}
                        onChange={handleChange}
                        disabled
                      >
                        {TripStatusList.map((x) => (
                          <MenuItem value={x} key={x}>
                            {TripStatusEnum[x]}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </TableCell>
                <TableCell>
                  {" "}
                  <Button size="small" variant="contained">
                    Submit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TripList;
