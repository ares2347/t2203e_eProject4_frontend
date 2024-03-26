'use client';
import { Avatar, Box, Button, CircularProgress, Grid, TextField, Typography } from "@mui/material";
import React, { ChangeEvent, useState } from "react";

const Driver = () => {
    const [fullName, setFullName] = useState<string>("");
    const [dateOfBirth, setDateOfBirth] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [idNumber, setIdNumber] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [images, setImages] = useState<FileList | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleFullNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFullName(event.target.value);
    };

    const handleDateOfBirthChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDateOfBirth(event.target.value);
    };

    const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(event.target.value);
    };

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleIdNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIdNumber(event.target.value);
    };

    const handleAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAddress(event.target.value);
    };

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedImages = event.target.files;
        if (selectedImages) {
            setImages(selectedImages);
        }
    };

    const handleRegister = () => {
        setIsLoading(true);
    };

    return (
        <Box
            component="form"
            paddingX={3}
            paddingY={3}
            noValidate
            autoComplete="off"
            bgcolor="white"
        >
            <Typography
                textAlign="center"
                children="Đăng ký tài xế"
                fontSize={28}
                fontWeight={600}
            />
            {isLoading ? (
                <Grid
                    container
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
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            required
                            id="fullName"
                            label="Họ và Tên"
                            fullWidth
                            value={fullName}
                            onChange={handleFullNameChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            id="dateOfBirth"
                            label="Ngày tháng năm sinh"
                            type="date"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={dateOfBirth}
                            onChange={handleDateOfBirthChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            id="phoneNumber"
                            label="Số điện thoại"
                            fullWidth
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            id="email"
                            label="Email"
                            type="email"
                            fullWidth
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            id="idNumber"
                            label="Số CMND"
                            fullWidth
                            value={idNumber}
                            onChange={handleIdNumberChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            id="address"
                            label="Địa chỉ thường trú"
                            fullWidth
                            value={address}
                            onChange={handleAddressChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography children={"Upload Ảnh chân dung"} />
                        <input
                            accept="image/*"
                            id="contained-button-file"
                            multiple
                            type="file"
                            onChange={handleImageChange}
                        />
                        <Grid item>
                            {images && (
                                <div>
                                    {Array.from(images).map((image, index) => (
                                        <img
                                            key={index}
                                            src={URL.createObjectURL(image)}
                                            alt={`Uploaded ${index}`}
                                            width="30%"
                                        />
                                    ))}
                                </div>
                            )}
                        </Grid>
                    </Grid>
                    <Grid item container justifyContent="center">
                        <Button
                            onClick={handleRegister}
                            variant="contained"
                            children="Đăng ký"
                            size="large"
                        />
                    </Grid>
                </Grid>
            )}
        </Box>
    );
};

export default Driver;