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
import { useRouter } from "next/navigation";
import React, { ChangeEvent } from "react";

const AddTrip = () => {
  const vehicleService = new VehicleService();
  const tripService = new TripService();
  const router = useRouter();
  const [formData, setFormData] = React.useState<AddTripConfigRequest>();
  const [departFrom, setDepartFrom] = React.useState<string>();
  const [arriveTo, setArriveTo] = React.useState<string>();
  const [departAt, setDepartAt] = React.useState<string>();
  const [arriveAt, setArriveAt] = React.useState<string>();
  const [vehicleId, setVehicleId] = React.useState<string>();
  const [isRepeated, setIsRepeated] = React.useState<boolean>();
  const [price, setPrice] = React.useState<number>();
  const [vehicleList, setVehicleList] = React.useState<VehicleModel[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    vehicleService.getAllVehicleConfigAsync().then((x) => {
      console.log("🚀 ~ vehicleService.getAllVehicleConfigAsync ~ x:", x)
      setVehicleList(x.data ?? []);
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
  const handleIsRepeatedChange = () => {};
  const handlePriceChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPrice(parseFloat(e.currentTarget.value));
  };

  const handleSubmit = () => {
    setIsLoading(true);
    if (formData)
      tripService
        .addTripConfig(formData)
        .then((x) => {
          if (x.code == HttpStatusEnum.Success.code) {
            router.push("/brand/trip");
          }
        })
        .finally(() => setIsLoading(false));
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        paddingX={4}
        paddingY={2}
        noValidate
        autoComplete="off"
        bgcolor="white"
      >
        <Typography
          children="Tạo phương tiện mới"
          fontSize={28}
          fontWeight={600}
        />
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
          <Grid container gap={2} direction="column">
            <Grid item xs={6}>
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
            </Grid>
            <Grid item xs={6}>
              <FormControl sx={{ width: "100%" }}>
                <InputLabel id="departFrom">Điểm xuất phát</InputLabel>
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
                  label="Giờ xuất phát"
                  value={departAt}
                  onChange={(newValue) => handleDepartAtChange(newValue)}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={6}>
              <FormControl sx={{ width: "100%" }}>
                <InputLabel id="arriveTo">Điểm kết thúc</InputLabel>
                <Select
                  labelId="arriveTo"
                  id="arriveToSelect"
                  required
                  value={formData?.arriveTo}
                  label="Điểm kết thúc"
                  onChange={(e) => handleArriveToChange(e)}
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
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimeField
                  label="Giờ đến nơi"
                  value={arriveAt}
                  onChange={(newValue) => handleArriveAtChange(newValue)}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item container width="100%" gap={2} wrap="nowrap">
              <Grid item xs={6}>
                <TextField
                  required
                  id="outlined-required"
                  label="Giá tiền"
                  fullWidth
                  type="number"
                  value={price}
                  onChange={handlePriceChange}
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl>
                  <div>
                    <FormLabel>Lặp lại hàng ngày?</FormLabel>
                  </div>
                  <Switch
                    checked={isRepeated}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setIsRepeated(event.target.checked)
                    }
                    // color={isRepeated ? "success" : "neutral"}
                    // variant={isRepeated ? "solid" : "outlined"}
                    // endDecorator={isRepeated ? "On" : "Off"}
                    // slotProps={{
                    //   endDecorator: {
                    //     sx: {
                    //       minWidth: 24,
                    //     },
                    //   },
                    // }}
                  />
                </FormControl>
              </Grid>
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
