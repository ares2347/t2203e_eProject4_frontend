"use client";
import ChairIcon from "@mui/icons-material/Chair";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import "./css.css";
import { Key, MouseEventHandler } from "react";
import { SeatStatus } from "@/model/ticket/TicketEnum";

interface SeatComponentProps {
  status: SeatStatus;
  label: number | string | null;
  onClick: MouseEventHandler | undefined;
  index: number;
}
const SeatComponent = (
  props: SeatComponentProps,
  key: Key | null | undefined
) => {
  const colorMapping: { [key in SeatStatus]: any } = {
    [SeatStatus.AVAILABLE]: "action",
    [SeatStatus.BOOKED]: "primary",
    [SeatStatus.SELECTED]: "success",
    [SeatStatus.UNAVAILABLE]: "disabled",
  };
  return (
    <div>
      {props.status == SeatStatus.AVAILABLE ? (
        <ChairOutlinedIcon
          key={key}
          className={`seat ${props.status} seat${props.index%4}`}
          onClick={props.onClick}
          color={colorMapping[props.status]}
          sx={{
            transform: "rotate(90deg)",
          }}
        >
          {props.label}
        </ChairOutlinedIcon>
      ) : (
        <ChairIcon
          key={key}
          className={`seat ${props.status} seat${props.index%4}`}
          onClick={props.onClick}
          color={colorMapping[props.status]}
          sx={{
            transform: "rotate(90deg)",
          }}
        >
          {props.label}
        </ChairIcon>
      )}
    </div>
  );
};

export default SeatComponent;
