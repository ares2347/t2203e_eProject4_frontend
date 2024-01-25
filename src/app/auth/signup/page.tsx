"use client";
import Image from 'next/image';
import { Container, Grid, TextField, Typography } from "@mui/material";
import "./css.css";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import Link from "next/link";
import logo from "@/assets/images/logo-blue.svg"



const SignUp = () => {
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
          <Image src={logo} alt="Logo" height={95}/>
        </Grid>
        <Grid item container direction="column" xs={6} spacing={3}>
          <Grid item alignSelf="center">
            <Typography color="#404040" fontSize={30} fontWeight={700}>
              Create a new account
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              variant="standard"
              placeholder="Full Name"
              label="Full Name"
              type="text"
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              variant="standard"
              placeholder="Phone"
              label="Phone"
              type="tel"
            />
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
              style={{ margin: "20px 0" }}
              onClick={onClick}
            >
              Create new
            </LoadingButton>
          </Grid>
          <Grid item>
            <Link
              href="/auth/login"
              color="#404040"
              style={{ cursor: "pointer" }}
            >
              Already have an account? Login to your account
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUp;