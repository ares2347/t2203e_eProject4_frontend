import * as React from "react";
import { useDataContext , DataProvider } from "./DataContext";
import "./css.css";
import ChairIcon from "@mui/icons-material/Chair";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import { Typography } from "@mui/joy";
import GppGoodIcon from "@mui/icons-material/GppGood";
import SeatComponent from "./SeatComponent";
import { SeatStatus } from "@/model/ticket/TicketEnum";
import { Grid } from "@mui/material";
import { Label } from "@mui/icons-material";

class DataModel{
   ArrayIndex :number[] = []
}
interface StepProps {
  seatAmount: number,
  price: number
}
export const instance = new DataModel();
const Step1 = (props: StepProps) => {
  const calculateTotalPrice = () => {
    const totalPrice = selectedSeats.filter(x => x === SeatStatus.SELECTED).length * props.price;
    return totalPrice;
  };
  const { data, updateData } = useDataContext();
  //TODO: change initial value
  const [selectedSeats, setSelectedSeats] = React.useState<SeatStatus[]>(() => {
    const initalArr = new Array<SeatStatus>(props.seatAmount);
    for (var i = 0; i < initalArr.length; i++) {
      if(instance.ArrayIndex.includes(i)) initalArr[i] = SeatStatus.SELECTED;
      else initalArr[i] = SeatStatus.AVAILABLE;
    }
    return initalArr;
  });
  const toggleSeat = async (index: number) => {
    if(!instance.ArrayIndex.includes(index)) instance.ArrayIndex.push(index);
    else instance.ArrayIndex = instance.ArrayIndex.filter(item => item !== index);
    const newArr = selectedSeats.map((item, i) => {
      if (i === index) {
        if (item == SeatStatus.SELECTED) return SeatStatus.AVAILABLE;
        else if (item == SeatStatus.AVAILABLE) return SeatStatus.SELECTED;
      }
      return item;
    });
    setSelectedSeats(newArr);
    updateData({...data, selectedSeats: newArr.reduce((r: number[], v, i) => r.concat(v == SeatStatus.SELECTED ? i : []), [])});
  };
  return (
    <Grid container spacing={2} justifyContent="space-around">
      <Grid
        item
        container
        xs={2}
        alignItems="center"
        justifyContent="space-evenly"
        marginTop="30px"
        marginBottom="15px"
        paddingBottom="16px"
        borderRadius={4}
        sx={{
          backgroundColor: "#f3f3f3",
        }}
      >
        <Grid item xs={4}>
          <ChairOutlinedIcon color="action" />
        </Grid>
        <Grid item xs={8}>
          <Typography children={`: ${SeatStatus.AVAILABLE}`} />
        </Grid>
        <Grid item xs={4}>
          <ChairIcon color="success" />
        </Grid>
        <Grid item xs={8}>
          <Typography children={`: ${SeatStatus.SELECTED}`} />
        </Grid>
        <Grid item xs={4}>
          <ChairIcon color="primary" />
        </Grid>
        <Grid item xs={8}>
          <Typography children={`: ${SeatStatus.BOOKED}`} />
        </Grid>
        <Grid item xs={4}>
          <ChairIcon color="disabled" />
        </Grid>
        <Grid item xs={8}>
          <Typography children={`: ${SeatStatus.UNAVAILABLE}`} />
        </Grid>
      </Grid>
      <Grid
        item
        xs={9}
        container
        alignItems="center"
        justifyContent="space-evenly"
        marginTop="30px"
        marginBottom="15px"
        paddingBottom="16px"
        borderRadius={4}
        sx={{
          backgroundColor: "#f3f3f3",
        }}
        columns={selectedSeats.length/4}
        direction="column"
        maxHeight="320px"
      >
        {Array.from({ length: props.seatAmount }, (_, index) => (
          <Grid item xs={3} key={index}>
            <SeatComponent
              key={index}

              label={index + 1}
              onClick={() => toggleSeat(index)}
              status={selectedSeats[index]}
              index={index}
            />
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12}>
      <Typography children = {`Tổng giá: ${calculateTotalPrice().toLocaleString()} VND`} fontWeight={700} fontSize={24} textAlign="end"/>
      </Grid>
    </Grid>
  );
};
export default Step1;
