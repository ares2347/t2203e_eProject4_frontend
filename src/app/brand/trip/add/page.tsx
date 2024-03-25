"use client";

import { HttpStatusEnum } from "@/model/http/httpEnum";
import { VehicleType } from "@/model/vehicle/VehicleModel";
import { ReferenceDataService } from "@/service/referencedata/referenceDataService";
import { TripService } from "@/service/trip/tripService";
import { Add, Remove } from "@mui/icons-material";
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
  IconButton,
} from "@mui/material";
import { LocalizationProvider, TimeField } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

interface StationMappingItem {
  station: string;
  from: string;
  price: number;
}
const AddTrip = () => {
  const tripService = new TripService();
  const referenceDataService = new ReferenceDataService();
  const router = useRouter();
  const [cityList, setCityList] = React.useState<ReferenceDataModel[]>([]);
  const [startStationList, setStartStationList] = React.useState<
    ReferenceDataModel[]
  >([]);
  const [endStationList, setEndStationList] = React.useState<
    ReferenceDataModel[]
  >([]);
  const [formData, setFormData] = React.useState<AddTripConfigRequest>();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const vehicleList = ["COACH", "CAR", "LIMOUSINE"];

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
  }, []);
  const handleSubmit = () => {
    if (formData) {
      setIsLoading(true);
      tripService
        .addTripConfig(formData)
        .then((x) => {
          if (x.code == HttpStatusEnum.Success.code) {
            router.push("/brand/trip");
          }
        })
        .finally(() => setIsLoading(false));
    }
  };
  const [inputStartList, setInputStartList] = useState<StationMappingItem[]>([
    { station: "", from: "", price: 0 },
  ]);
  const [inputEndList, setInputEndList] = useState<StationMappingItem[]>([
    { station: "", from: "", price: 0 },
  ]);

  // handle input change
  const handleInputChange = (data: object, index: number) => {
    inputStartList[index] = { ...inputStartList[index], ...data };
    setInputStartList([...inputStartList]);
    patchForm({ stationsMapping: [...inputStartList, ...inputEndList] });
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index: number) => {
    inputStartList.splice(index, 1);
    setInputStartList([...inputStartList]);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputStartList([...inputStartList, { station: "", from: "", price: 0 }]);
  };

  // handle input change
  const handleInputChange2 = (data: object, index: number) => {
    inputEndList[index] = { ...inputEndList[index], ...data };
    setInputEndList([...inputEndList]);
    patchForm({ stationsMapping: [...inputStartList, ...inputEndList] });
  };

  // handle click event of the Remove button
  const handleRemoveClick2 = (index: number) => {
    inputEndList.splice(index, 1);
    setInputEndList([...inputEndList]);
  };

  // handle click event of the Add button
  const handleAddClick2 = () => {
    setInputEndList([...inputEndList, { station: "", from: "", price: 0 }]);
  };

  const patchForm = (value: object) => {
    setFormData({ ...formData, ...value });
    if (Object.keys(value).includes("startCity")) {
      setIsLoading(true);
      referenceDataService
        .getStationReferenceDataByCity(Object.values(value)[0])
        .then((res) => {
          setStartStationList(res.data ?? []);
        })
        .catch(() => {
          setStartStationList([]);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    if (Object.keys(value).includes("endCity")) {
      setIsLoading(true);
      referenceDataService
        .getStationReferenceDataByCity(Object.values(value)[0])
        .then((res) => {
          setEndStationList(res.data ?? []);
        })
        .catch(() => {
          setEndStationList([]);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    console.log("🚀 ~ patchForm ~ formData:", formData);
  };

  const validateForm = (key: string) => {
    switch (key) {
      case "startCity":
        return false;
      case "startStation":
        return false;
      case "endCity":
        return false;
      case "endStation":
        return false;
      case "routeDuration":
        return false;
      case "earliestStartTimeFromStart":
        return false;
      case "latestStartTimeFromStart":
        return false;
      case "earliestStartTimeFromEnd":
        return false;
      case "latestStartTimeFromEnd":
        return false;
      case "gapDurationBetweenTrip":
        return false;
      case "gapDurationBetweenRoute":
        return false;
      case "stationsMapping":
        return false;
      case "vehicleType":
        return false;
      case "seatAmount":
        return false;
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
          children="Tạo chuyến mới"
          fontSize={28}
          textAlign="center"
          fontWeight={600}
        />
        {isLoading ? (
          <Grid
            container
            item
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
            <Grid item container width="100%" gap={2} wrap="nowrap">
              <FormControl sx={{ width: "100%" }}>
                <InputLabel id="vehicleType">Loại phương tiện</InputLabel>
                <Select
                  labelId="vehicleType"
                  id="vehicleTypeSelect"
                  required
                  value={formData?.vehicleType}
                  label="Loại phương tiện"
                  onChange={(e) => patchForm({ vehicleType: e.target.value })}
                >
                  {vehicleList.map((x) => (
                    <MenuItem value={x} key={x}>
                      {VehicleType[x]}
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
                value={formData?.seatAmount}
                onChange={(e) =>
                  patchForm({ seatAmount: parseInt(e.target.value) })
                }
              />
            </Grid>
            <Grid item xs={6} wrap="nowrap" direction="column">
              <Typography textAlign="center">Chuyến A</Typography>
              <Grid item xs={2} py={1}>
                <FormControl sx={{ width: "100%" }}>
                  <InputLabel id="departFrom">Thành Phố</InputLabel>
                  <Select
                    labelId="departFrom"
                    id="departFromSelect"
                    required
                    value={formData?.startCity}
                    label="Điểm xuất phát"
                    onChange={(e) => patchForm({ startCity: e.target.value })}
                  >
                    {cityList.map((x) => (
                      <MenuItem value={x.code} key={x.code}>
                        {x.codeDescription}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item container xs={6} gap={1} py={1} wrap="nowrap">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Grid item xs={6}>
                    <TimeField
                      label="Giờ Chuyến Đầu"
                      value={dayjs(
                        formData?.earliestStartTimeFromStart,
                        "HH:mm:ss"
                      )}
                      format="HH:mm:ss"
                      fullWidth
                      onChange={(newValue) =>
                        patchForm({
                          earliestStartTimeFromStart:
                            dayjs(newValue).format("HH:mm:ss"),
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TimeField
                      label="Giờ Chuyến Cuối"
                      value={dayjs(
                        formData?.latestStartTimeFromStart,
                        "HH:mm:ss"
                      )}
                      fullWidth
                      onChange={(newValue) =>
                        patchForm({
                          latestStartTimeFromStart:
                            dayjs(newValue).format("HH:mm:ss"),
                        })
                      }
                      format="HH:mm:ss"
                    />
                  </Grid>
                </LocalizationProvider>
              </Grid>
              {inputStartList.map((x, i) => {
                return (
                  <Grid item container xs={6} py={1} gap={1} wrap="nowrap">
                    <Grid item xs={6}>
                      <FormControl sx={{ width: "100%" }}>
                        <InputLabel id="departFrom">Bến</InputLabel>
                        <Select
                          labelId="departFrom"
                          id="departFromSelect"
                          required
                          value={x.station}
                          label="Bến"
                          fullWidth
                          disabled={
                            formData?.startCity == "" ||
                            formData?.startCity == undefined
                          }
                          onChange={(e) =>
                            handleInputChange({ station: e.target.value }, i)
                          }
                        >
                          {startStationList.map((x) => (
                            <MenuItem value={x.code} key={x.code}>
                              {x.codeDescription}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        className="ml10"
                        name="lastName"
                        placeholder="Giá"
                        value={x.price}
                        type="number"
                        InputProps={{ inputProps: { min: 0 } }}
                        disabled={
                          formData?.startCity == "" ||
                          formData?.startCity == undefined
                        }
                        onChange={(e) =>
                          handleInputChange(
                            { price: parseInt(e.target.value) },
                            i
                          )
                        }
                        fullWidth
                      />
                    </Grid>
                    <Grid item container xs={1} wrap="nowrap">
                      {inputStartList.length !== 1 && (
                        <Grid
                          item
                          children={
                            <IconButton
                              disabled={
                                formData?.startCity == "" ||
                                formData?.startCity == undefined
                              }
                              onClick={() => handleRemoveClick(i)}
                              size="large"
                              children={<Remove />}
                            />
                          }
                        />
                      )}
                      {inputStartList.length - 1 === i && (
                        <Grid
                          item
                          children={
                            <IconButton
                              disabled={
                                formData?.startCity == "" ||
                                formData?.startCity == undefined
                              }
                              onClick={handleAddClick}
                              size="large"
                              children={<Add />}
                            />
                          }
                        />
                      )}
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
            <Grid item xs={6} wrap="nowrap" gap={2} direction="column">
              <Typography textAlign="center">Chuyến B</Typography>
              <Grid item xs={2} py={1}>
                <FormControl sx={{ width: "100%" }}>
                  <InputLabel id="departFrom">Thành Phố</InputLabel>
                  <Select
                    labelId="departFrom"
                    id="departFromSelect"
                    required
                    value={formData?.endCity}
                    label="Điểm xuất phát"
                    onChange={(e) => patchForm({ endCity: e.target.value })}
                  >
                    {cityList.map((x) => (
                      <MenuItem value={x.code} key={x.code}>
                        {x.codeDescription}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item container xs={6} gap={1} py={1} wrap="nowrap">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Grid item xs={6}>
                    <TimeField
                      label="Giờ Chuyến Đầu"
                      value={dayjs(
                        formData?.earliestStartTimeFromEnd,
                        "HH:mm:ss"
                      )}
                      format="HH:mm:ss"
                      onChange={(newValue) =>
                        patchForm({
                          earliestStartTimeFromEnd:
                            dayjs(newValue).format("HH:mm:ss"),
                        })
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TimeField
                      label="Giờ Chuyến Cuối"
                      value={dayjs(
                        formData?.latestStartTimeFromEnd,
                        "HH:mm:ss"
                      )}
                      onChange={(newValue) =>
                        patchForm({
                          latestStartTimeFromEnd:
                            dayjs(newValue).format("HH:mm:ss"),
                        })
                      }
                      format="HH:mm:ss"
                      fullWidth
                    />
                  </Grid>
                </LocalizationProvider>
              </Grid>
              {inputEndList.map((x, i) => {
                return (
                  <Grid item container xs={6} py={1} gap={1} wrap="nowrap">
                    <Grid item xs={6}>
                    <FormControl sx={{ width: "100%" }}>
                        <InputLabel id="startStation">Bến</InputLabel>
                        <Select
                          labelId="startStation"
                          id="startStationSelect"
                          required
                          value={x.station}
                          label="Bến"
                          fullWidth
                          disabled={
                            formData?.endCity == "" ||
                            formData?.endCity == undefined
                          }
                          onChange={(e) =>
                            handleInputChange2({ station: e.target.value }, i)
                          }
                        >
                          {endStationList.map((x) => (
                            <MenuItem value={x.code} key={x.code}>
                              {x.codeDescription}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        name="lastName2"
                        placeholder="Giá"
                        value={x.price}
                        InputProps={{ inputProps: { min: 0 } }}
                        fullWidth
                        disabled={
                          formData?.endCity == "" ||
                          formData?.endCity == undefined
                        }
                        onChange={(e) =>
                          handleInputChange2(
                            { price: parseInt(e.target.value) },
                            i
                          )
                        }
                      />
                    </Grid>
                    <Grid item container xs={1} wrap="nowrap">
                      {inputEndList.length !== 1 && (
                        <Grid
                          item
                          children={
                            <IconButton
                              onClick={() => handleRemoveClick2(i)}
                              disabled={
                                formData?.endCity == "" ||
                                formData?.endCity == undefined
                              }
                              size="large"
                              children={<Remove />}
                            />
                          }
                        />
                      )}
                      {inputEndList.length - 1 === i && (
                        <Grid
                          item
                          children={
                            <IconButton
                              onClick={handleAddClick2}
                              disabled={
                                formData?.endCity == "" ||
                                formData?.endCity == undefined
                              }
                              size="large"
                              children={<Add />}
                            />
                          }
                        />
                      )}
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
            <Grid item xs={12} container gap={2} py={1} wrap="nowrap">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Grid item xs={4}>
                  <TimeField
                    label="Thời Gian Di Chuyển Của Một Chuyến"
                    value={dayjs(formData?.routeDuration, "HH:mm:ss")}
                    onChange={(newValue) =>
                      patchForm({
                        routeDuration: dayjs(newValue).format("HH:mm:ss"),
                      })
                    }
                    format="HH:mm:ss"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={4}>
                  <TimeField
                    label="Thời Gian Nghỉ Trước Khi Quay Về"
                    value={dayjs(formData?.gapDurationBetweenTrip, "HH:mm:ss")}
                    onChange={(newValue) =>
                      patchForm({
                        gapDurationBetweenTrip:
                          dayjs(newValue).format("HH:mm:ss"),
                      })
                    }
                    format="HH:mm:ss"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={4}>
                  <TimeField
                    label="Thời Gian Lặp Lại Giữa Hai Chuyến"
                    value={dayjs(formData?.gapDurationBetweenRoute, "HH:mm:ss")}
                    onChange={(newValue) =>
                      patchForm({
                        gapDurationBetweenRoute:
                          dayjs(newValue).format("HH:mm:ss"),
                      })
                    }
                    format="HH:mm:ss"
                    fullWidth
                  />
                </Grid>
              </LocalizationProvider>
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
