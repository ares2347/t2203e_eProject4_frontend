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
import React, { ChangeEvent, useState } from "react";

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
  const [images, setImages] = useState<FileList | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImages = event.target.files;
    if (selectedImages) {
      setImages(selectedImages);
    }
  };
  const handleUploadImages = () => {
    if (images) {
      for (let i = 0; i < images.length; i++) {
        const image = images[i];
        console.log("Uploading image:", image);
        // Thực hiện xử lý tải ảnh lên server tại đây cho từng file ảnh
      }
    }
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
          textAlign='center'
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
          <Grid item container width="100%" gap={2}>
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
                <TextField
                  required
                  id="outlined-required"
                  label="Biển Kiểm Soát"
                  fullWidth
                  type="number"
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
            <Grid item xs={2}>
              <FormControl sx={{ width: "100%" }}>
                <InputLabel id="departFrom">Bến Hiện Tại</InputLabel>
                <Select
                  labelId="departFrom"
                  id="departFromSelect"
                  required
                  label="Bến Hiện Tại"
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
            <Grid item>
              <Typography
                children={'Upload Ảnh'}
              />
              <input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                onChange={handleImageChange}
              />
              <Grid item>
                {images && (
                  <div>
                    {Array.from(images).map((image, index) => (
                      <img key={index} src={URL.createObjectURL(image)} alt={`Uploaded ${index}`} width='30%' />
                    ))}
                  </div>
                )}
              </Grid></Grid>
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
