import {
  Box,
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
const Step3 = () => {
  const { data, updateData } = useDataContext();
  const handle2Change = (e: { target: { value: string } }) => {
    updateData({ step2Data: e.target.value });
  };
  const handle3Change = (e: { target: { value: string } }) => {
    updateData({ step3Data: e.target.value });
  };
  const handle4Change = (e: { target: { value: string } }) => {
    updateData({ step4Data: e.target.value });
  };

  return (
    <div>
      <FormControl
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          width: "100%"
        }}
      >
        <Stack
          component="form"
          sx={{
            width: "80%"
          }}
          noValidate
          autoComplete="off"
          gap={2}
        >
          <Typography
            color="primary"
            level="title-md"
            variant="soft"
            textAlign={"center"}
          >
            Vui Lòng Điền Thông Tin
          </Typography>
          <TextField
            label="Name"
            value={data.step2Data || ""}
            onChange={handle2Change}
            variant="outlined"
          />
          <TextField
            label="Phone"
            value={data.step3Data || ""}
            onChange={handle3Change}
            variant="outlined"
          />
          <TextField
            label="Address"
            value={data.step4Data || ""}
            onChange={handle4Change}
            variant="outlined"
          />
        </Stack>
      </FormControl>
    </div>
  );
};
export default Step3;
