"use client";
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
import Image from "next/image";
import "./css.css";
import { LoadingButton } from "@mui/lab";
import { ChangeEvent, useState } from "react";
import logo from "@/assets/images/logo-blue.svg";
import { LoginFormModel } from "../AuthenticationModel";
import { debounce } from "@/util/Helper";
import LoginIcon from '@mui/icons-material/Login';

const Login = () => {
  const [isLoading, setLoading] = useState(false);
  const [formData, setFormData ] = useState<LoginFormModel>()

  const onFormDataChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
    setFormData({
      identifier: field === "identifier" ? event.target.value : formData?.identifier,
      password: field === "password" ? event.target.value : formData?.identifier
    })
  }
  const onClick = (event: any) => {
    setLoading(!isLoading);
    console.log("🚀 ~ onClick ~ formData:", formData);
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
            Hi, Welcome Back
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            color="#333333"
            fontSize={14}
            fontWeight={700}
            textAlign="center"
          >
            Sign in with your social account
          </Typography>
        </Grid>
        <Grid item padding={2} width="80%">
          <LoadingButton
            color="info"
            loading={isLoading}
            loadingPosition="start"
            startIcon={<LoginIcon/>}
            variant="contained"
            fullWidth
            size="large"
            onClick={onClick}
          >
            Sign in with blah blah
          </LoadingButton>
        </Grid>
        <Grid
          item
          padding="8px 24px"
          container
          direction="row"
          alignItems="center"
        >
          <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
          <Typography
            color="#404040"
            fontSize={14}
            fontWeight={300}
            textAlign="center"
            padding={1}
          >
            OR
          </Typography>
          <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
        </Grid>
        <Grid item>
          <Typography
            color="#333333"
            fontSize={14}
            fontWeight={700}
            textAlign="center"
          >
            Sign in with your credential
          </Typography>
        </Grid>
        <Grid item width="80%" padding={2} paddingTop={0}>
          <TextField
            fullWidth
            variant="standard"
            placeholder="Phone/Email"
            label="Phone/Email"
            type="text"
            value={formData?.identifier}
            onChange={(e) => onFormDataChange(e, "identifier")}
          />
        </Grid>
        <Grid item width="80%" padding={2}>
          <TextField
            fullWidth
            variant="standard"
            placeholder="Password"
            label="Password"
            type="password"
            value={formData?.password}
            onChange={(e) => onFormDataChange(e, "password")}
          />
        </Grid>
        <Grid
          item
          container
          width="80%"
          justifyContent="space-between"
          alignItems="center"
          padding="0 16px"
        >
          <Grid item>
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
              label="Remember me"
              color="#404040"
              sx={{
                "& span": { fontSize: 14 },
                fontSize: "8px !important",
              }}
            />
          </Grid>
          <Grid item>
            <Link
              href="/auth/forgot-password"
              color="#404040"
              style={{ cursor: "pointer", color: "#404040" }}
              underline="hover"
            >
              <Typography fontSize={14} fontWeight={500} color="#3b79c9">
                Forgot Password?
              </Typography>
            </Link>
          </Grid>
        </Grid>
        <Grid item width="80%">
          <LoadingButton
            loading={isLoading}
            loadingPosition="start"
            startIcon={<LoginIcon/>}
            variant="contained"
            fullWidth
            size="large"
            style={{ margin: "32px 0" }}
            onClick={onClick}
          >
            Login
          </LoadingButton>
        </Grid>
        <Grid item>
          <Link
            href="/auth/signup"
            color="#404040"
            style={{ cursor: "pointer", color: "#404040" }}
            underline="hover"
          >
            <Typography fontSize={14} fontWeight={700} color="#404040">
              Don't have an account? Create a new one
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
