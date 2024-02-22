"use client";

import SelectTicket from "@/components/ticket/selectTicket";
import "./css.css";
import { TripService } from "@/service/trip/tripService";
import { useSearchParams } from "next/navigation";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Divider from "@mui/material/Divider";
import SellIcon from "@mui/icons-material/Sell";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const TripPage = () => {
  const tripService = new TripService();
  const searchParams = useSearchParams();
  const [tripList, setTripList] = React.useState<any>(tripService.getAllTrip());
  return (
    <div>
      <SelectTicket />
      <Container maxWidth="lg">
        <Grid container>
          <Grid
            item
            container
            xs={12}
            gap={2}
            wrap="nowrap"
            boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            paddingY={2}
            paddingX={2}
            marginY={2}
            alignItems="center"
          >
            {/* TODO: Replace this url */}
            <Grid item xs={3}>
              <img
                src="https://vcdn-dulich.vnecdn.net/2022/06/16/World-Travel-1-2359-1655367719.jpg"
                width="100%"
              />
            </Grid>
            {/* TODO: Replace info */}
            <Grid item direction="column" xs={6} height="100%">
              <Typography
                color="hsl(0, 0%, 30%)"
                fontWeight={700}
                fontSize={18}
                children="Nhà xe vl"
                paddingBottom={1}
              />
              <Typography
                color="hsl(0, 0%, 30%)"
                fontWeight={500}
                fontSize={14}
                children="Xe xin"
                paddingBottom={1}
              />
              <Grid
                container
                direction="row"
                columns={24}
                wrap="nowrap"
                gap={1}
              >
                <Grid
                  item
                  container
                  direction="column"
                  xs={1}
                  wrap="nowrap"
                  alignItems="center"
                >
                  <Grid
                    item
                    children={
                      <RadioButtonUncheckedIcon
                        sx={{ fontSize: 18, alignSelf: "center" }}
                      />
                    }
                    xs={1}
                  />
                  <Grid
                    borderLeft="4px dotted hsl(0, 0%, 50%)"
                    xs={10}
                    item
                    marginBottom={0.5}
                  />
                  <Grid
                    item
                    children={<LocationOnIcon sx={{ fontSize: 20 }} />}
                    xs={1}
                    alignSelf="center"
                  />
                </Grid>
                <Grid item container direction="column" xs={23}>
                  <Grid
                    item
                    children={
                      <Typography
                        color="hsl(0, 0%, 30%)"
                        fontWeight={700}
                        fontSize={20}
                        children={`Hanoi: 4:30`}
                      />
                    }
                    xs={1}
                  />
                  <Grid
                    item
                    children={
                      <Typography
                        color="hsl(0, 0%, 30%)"
                        fontWeight={500}
                        fontSize={14}
                        children={`1.30`}
                      />
                    }
                    xs={1}
                  />
                  <Grid
                    item
                    children={
                      <Typography
                        color="hsl(0, 0%, 30%)"
                        fontWeight={700}
                        fontSize={20}
                        children={`HaiPhong: 7:30`}
                      />
                    }
                    xs={1}
                  />
                </Grid>
              </Grid>
              <Typography />
            </Grid>
            <Grid
              item
              container
              direction="column"
              xs={3}
              borderLeft="1px solid hsl(0, 0%, 60%)"
              height="100%"
              paddingX={2}
            >
              <Grid
                item
                container
                xs={4}
                direction="row"
                alignItems="center"
                wrap="nowrap"
              >
                <SellIcon sx={{ fontSize: 18, color: "hsl(0, 0%, 30%)" }} />
                {/* TODO: Update data */}
                <Typography
                  children="100.000 VND"
                  color="hsl(0, 0%, 30%)"
                  fontWeight={700}
                  fontSize={28}
                />
              </Grid>
              {/* TODO: Update data */}
              <Grid item xs={4}>
                <Typography
                  children={`Còn lại: Hết mẹ chỗ rồi`}
                  color="hsl(0, 0%, 30%)"
                  fontWeight={500}
                  fontSize={16}
                />
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant="outlined"
                  children={<Typography>Đặt chỗ ngay</Typography>}
                  fullWidth
                  color="primary"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default TripPage;
