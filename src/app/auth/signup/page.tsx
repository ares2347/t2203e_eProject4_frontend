"use client";
import Image from "next/image";
import {
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import "./css.css";
import { LoadingButton } from "@mui/lab";
import { ChangeEvent, useState } from "react";
import logo from "@/assets/images/logo-blue.svg";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { HttpStatusEnum } from "@/model/http/httpEnum";
import { AuthService } from "@/service/auth/authService";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [isLoading, setLoading] = useState(false);
  const [formData, setFormData] = useState<SignupRequest>();
  const [error, setError] = useState<string | null>();
  const [isError, setIsError] = useState<boolean>(false);
  const authService = new AuthService();
  const router = useRouter();

  const onClick = async (event: any) => {
    if (formData) {
      const loginResult = await authService.signup(formData);
      if (loginResult.code == HttpStatusEnum.Success.code) {
        localStorage.setItem("token", loginResult.data?.accessToken as string);
        localStorage.setItem(
          "expired",
          loginResult.data?.expired?.toISOString() as string
        );
        router.push("/");
      } else {
        setError(`${loginResult.code}: ${loginResult.message}`);
        setIsError(true);
      }
    } else {
      setIsError(true);
      setError("Please fill all required field");
    }
    setLoading(false);
  };

  const onFormDataChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) => {
    setFormData({
      fullName:
        field === "fullName"
          ? event.target.value
          : (formData?.fullName as string),
      password:
        field === "password"
          ? event.target.value
          : (formData?.password as string),
      email:
        field === "email"
          ? event.target.value
          : (formData?.email as string),
      phone:
        field === "phone"
          ? event.target.value
          : (formData?.phone as string),
          
    });
  };

  return (
    <Container maxWidth="sm">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        borderRadius={4}
        margin="5vh 0"
        sx={{ minHeight: "90vh", width: "100%", backgroundColor: "#ffffff" }}
      >
        <Grid item padding={2} justifySelf="flex-start">
          <Image src={logo} alt="Logo" height={40} />
        </Grid>
        <Grid item padding={2}>
          <Typography
            color="#3b79c9"
            fontSize={30}
            fontWeight={700}
            textAlign="center"
          >
            Create a new account
          </Typography>
        </Grid>
        <Grid item width="80%" padding={2} paddingTop={0}>
          <TextField
            fullWidth
            variant="standard"
            placeholder="Full Name"
            label="Full Name"
            type="text"
            onChange={(e) => onFormDataChange(e, "fullName")}
          />
        </Grid>
        <Grid item width="80%" padding={2} paddingTop={0}>
          <TextField
            fullWidth
            variant="standard"
            placeholder="Phone Number"
            label="Phone Number"
            type="tel"
            onChange={(e) => onFormDataChange(e, "phone")}
          />
        </Grid>
        <Grid item width="80%" padding={2} paddingTop={0}>
          <TextField
            fullWidth
            variant="standard"
            placeholder="Email"
            label="Email"
            type="email"
            onChange={(e) => onFormDataChange(e, "email")}
          />
        </Grid>
        <Grid item width="80%" padding={2}>
          <TextField
            fullWidth
            variant="standard"
            placeholder="Password"
            label="Password"
            type="password"
            onChange={(e) => onFormDataChange(e, "password")}
          />
        </Grid>
        <Grid
          item
          container
          width="80%"
          justifyContent="space-between"
          alignItems="center"
          padding={2}
        >
          <FormControlLabel
            control={
              <Checkbox
                // checked={checked}
                // onChange={(event) => setChecked(event.target.checked)}
                name="checked"
                color="primary"
                size="small"
              />
            }
            label="Agree with  Terms & Condition."
            color="#404040"
            sx={{
              "& span": { fontSize: 14 },
              fontSize: "8px !important",
            }}
          />
        </Grid>
        <Grid item width="80%">
          <LoadingButton
            loading={isLoading}
            loadingPosition="start"
            startIcon={<PersonAddIcon />}
            variant="contained"
            fullWidth
            size="large"
            style={{ margin: "32px 0" }}
            onClick={onClick}
          >
            Signup
          </LoadingButton>
        </Grid>
        <Grid item paddingBottom={2} width="80%">
          <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
        </Grid>
        <Grid item>
          <Link
            href="/auth/login"
            color="#404040"
            style={{ cursor: "pointer", color: "#404040" }}
            underline="hover"
          >
            <Typography fontSize={14} fontWeight={700} color="#404040">
              Already have an account? Login to continue
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUp;
