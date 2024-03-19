"use client";

import { HttpStatusEnum } from "@/model/http/httpEnum";
import { TripService } from "@/service/trip/tripService";
import { VehicleService } from "@/service/vehicle/vehicleService";
import {
  Box,
  Typography,
  Grid,
  CircularProgress,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  SelectChangeEvent,
  Switch,
  FormLabel,
} from "@mui/material";
import { LocalizationProvider, TimeField } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

const AddTrip = () => {
  const vehicleService = new VehicleService();
  const tripService = new TripService();
  const router = useRouter();
  const [formData, setFormData] = React.useState<AddTripConfigRequest>();
  const [departFrom, setDepartFrom] = React.useState<string>();
  const [arriveTo, setArriveTo] = React.useState<string>();
  const [departAt, setDepartAt] = React.useState<string>();
  const [arriveAt, setArriveAt] = React.useState<string>();
  const [vehicleId, setVehicleId] = React.useState<string>("");
  const [isRepeated, setIsRepeated] = React.useState<boolean>(false);
  const [price, setPrice] = React.useState<number>(0);
  const [vehicleList, setVehicleList] = React.useState<VehicleModel[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  React.useEffect(() => {
    vehicleService.getAllVehicleListConfigAsync(0, 10).then((x) => {
      setVehicleList(x.data?.data ?? []);
      setIsLoading(false);
    });
  }, []);
  const handleDepartFromChange = (e: SelectChangeEvent) => {
    setDepartFrom(e.target.value);
  };
  const handleArriveToChange = (e: SelectChangeEvent) => {
    setArriveTo(e.target.value);
  };
  const handleDepartAtChange = (val: string | null) => {
    setDepartAt(val ?? "00:00:00");
  };
  const handleArriveAtChange = (val: string | null) => {
    setArriveAt(val ?? "00:00:00");
  };
  const handleVehicleIdChange = (e: SelectChangeEvent) => {
    setVehicleId(e.target.value);
  };
  const handleIsRepeatedChange = () => { };
  const handlePriceChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPrice(parseFloat(e.currentTarget.value));
  };
  const handleSubmit = () => {
    setIsLoading(true);
    tripService
      .addTripConfig({
        arriveAt: dayjs(arriveAt).format("HH:mm:ss"),
        arriveTo: arriveTo ?? "",
        departAt: dayjs(departAt).format("HH:mm:ss"),
        departFrom: departFrom ?? "",
        isRepeated: isRepeated,
        price: price,
        vehicleId: vehicleId,
        stops: ""
      })
      .then((x) => {
        if (x.code == HttpStatusEnum.Success.code) {
          router.push("/brand/trip");
        }
      })
      .finally(() => setIsLoading(false));
  };
  const [inputList, setInputList] = useState<[{ [key: string]: string }]>([{ firstName: "", lastName: "" }]);

  // handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { name, value } = e.target;
    const list: [{ [key: string]: string }] = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index: number) => {
    const list: [{ [key: string]: string }] = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    const list: [{ [key: string]: string }] = [...inputList];
    list.concat({ firstName: "", lastName: "" });
    setInputList(list);
  };
  return (
    <>
      <Box
        component="form"
        paddingX={3}
        paddingY={3}
        noValidate
        autoComplete="off"
        bgcolor="white"
      >
        <Typography
          children="Tạo chuyến mới"
          fontSize={28}
          textAlign='center'
          fontWeight={600}
        />
        <Grid item container width="100%" gap={2} wrap="nowrap">
          <FormControl sx={{ width: "100%" }}>
            <InputLabel id="vehicleType">Loại phương tiện</InputLabel>
            <Select
              labelId="vehicleType"
              id="vehicleTypeSelect"
              required
              value={formData?.vehicleId}
              label="Loại phương tiện"
              onChange={(e) => handleVehicleIdChange(e)}
            >
              {vehicleList.map((x) => (
                <MenuItem value={x.vehicleConfigId}>
                  {x.vehicleName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            required
            id="outlined-required"
            label="Số chỗ ngồi"
            fullWidth
            type="number"
          />

        </Grid>
        {isLoading ? (
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
          <Grid container paddingY={3} spacing={3}>
            <Grid item xs={6} wrap="nowrap" gap={2} direction="column">
              <Typography textAlign='center'>Chuyến A</Typography>
              <Grid item xs={2}>
                <FormControl sx={{ width: "100%" }}>
                  <InputLabel id="departFrom">Thành Phố</InputLabel>
                  <Select
                    labelId="departFrom"
                    id="departFromSelect"
                    required
                    value={formData?.departFrom}
                    label="Điểm xuất phát"
                    onChange={(e) => handleDepartFromChange(e)}
                  >
                    <MenuItem value="Hà Nội">Hà Nội</MenuItem>
                    <MenuItem value="Hồ Chí Minh">Hồ Chí Minh</MenuItem>
                    <MenuItem value="Hải Phòng">Hải Phòng</MenuItem>
                    <MenuItem value="Đà Nẵng">Đà Nẵng</MenuItem>
                    <MenuItem value="Bình Phước">Bình Phước</MenuItem>
                    <MenuItem value="Bình Dương">Bình Dương</MenuItem>
                    <MenuItem value="Vĩnh phúc">Vĩnh phúc</MenuItem>
                    <MenuItem value="Vĩnh Long">Vĩnh Long</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimeField
                    label="Giờ Chuyến Đầu"
                    value={departAt}
                    format="HH:mm:ss"
                    onChange={(newValue) => handleDepartAtChange(newValue)}
                  />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimeField
                    label="Giờ Chuyến Cuối"
                    value={arriveAt}
                    onChange={(newValue) => handleArriveAtChange(newValue)}
                    format="HH:mm:ss"
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={6}>
                {inputList.map((x, i) => {
                  return (
                    <div>
                      <input
                        name="firstName"
                        placeholder="Bến"
                        value={x.firstName}
                        onChange={e => handleInputChange(e, i)}
                      />
                      <input
                        className="ml10"
                        name="lastName"
                        placeholder="Giá"
                        value={x.lastName}
                        onChange={e => handleInputChange(e, i)}
                      />
                      <div className="btn-box">
                        {inputList.length !== 1 && <button
                          className="mr10"
                          onClick={() => handleRemoveClick(i)}>Remove</button>}
                        {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
                      </div>
                    </div>
                  );
                })}
              </Grid>
              <Grid>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimeField
                    label="Thời Gian Chuyến Kế"
                    value={arriveAt}
                    onChange={(newValue) => handleArriveAtChange(newValue)}
                    format="HH:mm:ss"
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
            <Grid item xs={6} wrap="nowrap" gap={2} direction="column">
              <Typography textAlign='center'>Chuyến B</Typography>
              <Grid item xs={2}>
                <FormControl sx={{ width: "100%" }}>
                  <InputLabel id="departFrom">Thành Phố</InputLabel>
                  <Select
                    labelId="departFrom"
                    id="departFromSelect"
                    required
                    value={formData?.departFrom}
                    label="Điểm xuất phát"
                    onChange={(e) => handleDepartFromChange(e)}
                  >
                    <MenuItem value="Hà Nội">Hà Nội</MenuItem>
                    <MenuItem value="Hồ Chí Minh">Hồ Chí Minh</MenuItem>
                    <MenuItem value="Hải Phòng">Hải Phòng</MenuItem>
                    <MenuItem value="Đà Nẵng">Đà Nẵng</MenuItem>
                    <MenuItem value="Bình Phước">Bình Phước</MenuItem>
                    <MenuItem value="Bình Dương">Bình Dương</MenuItem>
                    <MenuItem value="Vĩnh phúc">Vĩnh phúc</MenuItem>
                    <MenuItem value="Vĩnh Long">Vĩnh Long</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimeField
                    label="Giờ Chuyến Đầu"
                    value={departAt}
                    format="HH:mm:ss"
                    onChange={(newValue) => handleDepartAtChange(newValue)}
                  />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimeField
                    label="Giờ Chuyến Cuối"
                    value={arriveAt}
                    onChange={(newValue) => handleArriveAtChange(newValue)}
                    format="HH:mm:ss"
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={6}>
                {inputList.map((x, i) => {
                  return (
                    <div>
                      <input
                        name="firstName"
                        placeholder="Bến"
                        value={x.firstName}
                        onChange={e => handleInputChange(e, i)}
                      />
                      <input
                        className="ml10"
                        name="lastName"
                        placeholder="Giá"
                        value={x.lastName}
                        onChange={e => handleInputChange(e, i)}
                      />
                      <div className="btn-box">
                        {inputList.length !== 1 && <button
                          className="mr10"
                          onClick={() => handleRemoveClick(i)}>Remove</button>}
                        {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
                      </div>
                    </div>
                  );
                })}
              </Grid>
              <Grid>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimeField
                    label="Thời Gian Chuyến Kế"
                    value={arriveAt}
                    onChange={(newValue) => handleArriveAtChange(newValue)}
                    format="HH:mm:ss"
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
            <Grid item container width="100%" gap={2} wrap="nowrap">
              <Grid wrap="nowrap" gap={2} item xs={4}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimeField
                    label="Thời Gian Di Chuyển"
                    value={arriveAt}
                    onChange={(newValue) => handleArriveAtChange(newValue)}
                    format="HH:mm:ss"
                  />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimeField
                    label="Thời Gian Nghỉ"
                    value={arriveAt}
                    onChange={(newValue) => handleArriveAtChange(newValue)}
                    format="HH:mm:ss"
                  />
                </LocalizationProvider>

              </Grid>
              <Grid item xs={4}>
                <TextField
                  required
                  id="price"
                  label="Giá tiền"
                  fullWidth
                  type="number"
                  value={price}
                  onChange={handlePriceChange}
                />
              </Grid>
              {/* <Grid item xs={6}>
                <FormControl>
                  <div>
                    <FormLabel>Lặp lại hàng ngày?</FormLabel>
                  </div>
                  <Switch
                    checked={isRepeated}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setIsRepeated(event.target.checked)
                    }

                  />
                </FormControl>
              </Grid> */}
            </Grid>
            <Grid item container alignItems="flex-end" direction="row">
              <Grid item flex={1} />
              <Button
                onClick={handleSubmit}
                variant="contained"
                children="Tạo chuyến đi mới"
                size="large"
              />
            </Grid>
          </Grid>
        )}
      </Box>
    </>
  );
};

export default AddTrip;
