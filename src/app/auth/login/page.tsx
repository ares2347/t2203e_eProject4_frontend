"use client";
import { Container, Grid, TextField, Typography } from "@mui/material";
import Image from "next/image";
import "./css.css";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import Link from "next/link";
import logo from "@/assets/images/logo-blue.svg";

const Login = () => {
  const [isLoading, setLoading] = useState(false);
  const onClick = (event: any) => {
    setLoading(!isLoading);
  };
  return (
    <Container maxWidth="md" sx={{ padding: "10vh" }}>
      <Grid
        container
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="center"
        padding={4}
        borderRadius={4}
        sx={{ minHeight: "80vh", backgroundColor: "#ffffff" }}
      >
        <Grid item xs={6}>
          <Image src={logo} alt="Logo" height={95} />
        </Grid>
        <Grid item container direction="column" xs={6} spacing={4}>
          <Grid item alignSelf="center" padding={2}>
            <Typography color="#404040" fontSize={30} fontWeight={700}>
              Login
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              variant="standard"
              placeholder="Email"
              label="Email"
              type="email"
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              variant="standard"
              placeholder="Password"
              label="Password"
              type="password"
            />
          </Grid>
          <Grid item>
            <LoadingButton
              loading={isLoading}
              loadingPosition="start"
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
              href="/auth/forgot-password"
              color="#404040"
              style={{ cursor: "pointer", color: "#404040" }}
            >
              Forgot Password?
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="/auth/signup"
              color="#404040"
              style={{ cursor: "pointer", color: "#404040" }}
            >
              Don't have an account? Create a new one
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
