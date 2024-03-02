import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Stack,
  TextField,
} from "@mui/material";
import Typography from "@mui/joy/Typography";
import GppGoodIcon from "@mui/icons-material/GppGood";
import { useDataContext } from "./DataContext";
import { ChangeEvent } from "react";
import { LocalizationProvider, DatePicker } from "@mui/lab";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { TicketService } from "@/service/ticket/ticketService";
import { useRouter } from "next/router";
const Step3 = () => {
  const { data, updateData } = useDataContext();
  // const router = useRouter();
  const ticketService = new TicketService();
  const handleNameChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    updateData({ ...data, customerName: e.currentTarget.value });
  };
  const handlePhoneChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    updateData({ ...data, customerPhone: e.currentTarget.value });
  };
  const handleEmailChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    updateData({ ...data, customerEmail: e.currentTarget.value });
  };
  const handleDobChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    updateData({
      ...data,
      customerDob: dayjs(e.currentTarget.value).format("MM-dd-yyy"),
    });
  };
  const handleIcChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    updateData({ ...data, customerIc: e.currentTarget.value });
  };
  const handleSubmit = () => {
    ticketService.bookTicketAsync(
      data.selectedSeats.map((x: number) => {
        return {
          tripId: "",
          tripConfigId: "",
          pickupPoint: data.pickupPoint ?? "",
          dropoffPoint: data.dropoffPoint ?? "",
          customerName: data.customerName ?? "",
          customerDob: data.customerDob ?? new Date().toLocaleDateString(),
          customerIc: data.customerIc ?? "",
          customerEmail: data.customerEmail ?? "",
          customerPhone: data.customerPhone ?? "",
          seat: (x + 1).toString(),
        } as BookTicketRequest;
      })).then(x => 
        // router.push("/")
        console.log(x)
    );
  };

  return (
    <div>
      <FormControl
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          width: "100%",
        }}
      >
        <Stack
          component="form"
          sx={{
            width: "80%",
          }}
          noValidate
          autoComplete="off"
          gap={2}
        >
          <Typography textAlign={"center"}>Vui Lòng Điền Thông Tin</Typography>
          <TextField
            label="Họ và Tên"
            value={data.customerName}
            onChange={handleNameChange}
            variant="outlined"
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Controlled picker"
              value={dayjs(data.customerDob)}
              onChange={handleDobChange}
            />
          </LocalizationProvider>
          <TextField
            label="Email"
            value={data.customerEmail}
            onChange={handleEmailChange}
            variant="outlined"
          />
          <TextField
            label="Số điện thoại"
            value={data.customerPhone}
            onChange={handlePhoneChange}
            variant="outlined"
            type="tel"
          />
          <TextField
            label="CMND/CCCD"
            value={data.customerIc}
            onChange={handleIcChange}
            variant="outlined"
          />
          <Button children="Thanh toán" onClick={handleSubmit} />
        </Stack>
      </FormControl>
    </div>
  );
};
export default Step3;
