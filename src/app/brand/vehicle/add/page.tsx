"use client";

import { VehicleService } from "@/service/vehicle/vehicleService";
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { ChangeEvent } from "react";

const AddTrip = () => {
  const [vehicleType, setVehicleType] = React.useState<string>("");
  const [vehicleName, setVehicleName] = React.useState<string>();
  const [seatAmount, setSeatAmount] = React.useState<number>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter();
  const vehicleService = new VehicleService();

  const handleVehicleTypeChange = (event: SelectChangeEvent) => {
    setVehicleType(event.target.value as string);
  };
  const handleVehicleNameChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setVehicleName(event.currentTarget.value as string);
  };
  const handleSeatAmountChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSeatAmount(parseInt(event.currentTarget.value as string));
  };

  const handleSubmit = () => {
    setIsLoading(true);
    if (seatAmount && vehicleName)
      vehicleService
        .addVehicleConfig({
          seatAmount: seatAmount,
          vehicleName: vehicleName,
          vehicleType: vehicleType,
          seatConfig: [],
        })
        .then((res) => {
          if (res.code == 200) {
            setIsLoading(false);
            router.push("/brand/vehicle/list");
          } else {
            setIsLoading(false);
          }
        });
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
            <Grid item xs={12}>
              <TextField
                required
                id="outlined-required"
                label="Tên phương tiện"
                fullWidth
                value={vehicleName}
                onChange={handleVehicleNameChange}
              />
            </Grid>
            <Grid item container width="100%" gap={2} wrap="nowrap">
              <Grid item xs={6}>
                <TextField
                  required
                  id="outlined-required"
                  label="Số chỗ ngồi"
                  fullWidth
                  type="number"
                  value={seatAmount}
                  onChange={handleSeatAmountChange}
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl sx={{ width: "100%" }}>
                  <InputLabel id="vehicleType">Loại phương tiện</InputLabel>
                  <Select
                    labelId="vehicleType"
                    id="vehicleTypeSelect"
                    value={vehicleType}
                    label="Loại xe"
                    onChange={handleVehicleTypeChange}
                  >
                    <MenuItem value="COACH">Xe Khách</MenuItem>
                    <MenuItem value="LIMOSINE">Xe Limosine</MenuItem>
                    <MenuItem value="CAR">Xe con</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item container alignItems="flex-end" direction="row">
              <Grid item flex={1} />
              <Button
                onClick={handleSubmit}
                variant="contained"
                children="Tạo phương tiện mới"
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
