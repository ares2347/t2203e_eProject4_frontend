'use client'
import '@/assets/css/style.css';
import * as React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box, FormControl, InputLabel, MenuItem } from '@mui/material';
const SelectTicket = () => {
    const [selectedOption1, setSelectedOption1] = React.useState('');
    const [selectedOption2, setSelectedOption2] = React.useState('');

    const handleSelect1Change = (event: SelectChangeEvent) => {
        setSelectedOption1(event.target.value as string);
    };

    const handleSelect2Change = (event: SelectChangeEvent) => {
        setSelectedOption2(event.target.value as string);
    };
    return (
        <div>
            <section className="tour-search">
                <div className="container">

                    <form action="" className="tour-search-form">

                        <div className="input-wrapper" style={{ backgroundColor: 'white', borderRadius: '100px' }}>

                            <FormControl fullWidth >
                                <InputLabel id="from-label" style={{ backgroundColor: 'white', borderRadius: '100px' }}>From</InputLabel>
                                <Select style={{ backgroundColor: 'white', borderRadius: '100px' }}
                                    labelId="go-label"
                                    id="from"
                                    value={selectedOption1}
                                    onChange={handleSelect1Change}
                                >
                                    <MenuItem value="city1">Hà Nội</MenuItem>
                                    <MenuItem value="city2">Hồ Chí Minh</MenuItem>
                                    <MenuItem value="city3">Đà Nẵng</MenuItem>
                                    <MenuItem value="city4">Bình Phước</MenuItem>
                                    <MenuItem value="city5">Bình Dương</MenuItem>
                                    <MenuItem value="city6">Vĩnh phúc</MenuItem>
                                    <MenuItem value="city7">Vĩnh Long</MenuItem>

                                </Select>
                            </FormControl>
                        </div>


                        <div className="input-wrapper" style={{ backgroundColor: 'white', borderRadius: '100px' }}>
                            <FormControl fullWidth >
                                <InputLabel id="to-label" style={{ backgroundColor: 'white', borderRadius: '100px' }}>To</InputLabel>
                                <Select style={{ backgroundColor: 'white', borderRadius: '100px' }}
                                    labelId="to-label"
                                    id='to'
                                    value={selectedOption2}
                                    onChange={handleSelect2Change}
                                >
                                    <MenuItem value="city1">Hà Nội</MenuItem>
                                    <MenuItem value="city2">Hồ Chí Minh</MenuItem>
                                    <MenuItem value="city3">Đà Nẵng</MenuItem>
                                    <MenuItem value="city4">Bình Phước</MenuItem>
                                    <MenuItem value="city5">Bình Dương</MenuItem>
                                    <MenuItem value="city6">Vĩnh phúc</MenuItem>
                                    <MenuItem value="city7">Vĩnh Long</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div className="input-wrapper">
                            <label className="input-label">Checkin Date**</label>
                            <input type="date" name="checkin" id="checkin" required className="input-field" />
                        </div>

                        <div className="input-wrapper">
                            <label className="input-label">Checkout Date*</label>
                            <input type="date" name="checkout" id="checkout" required className="input-field" />
                        </div>
                        <button type="submit" className="btn btn-secondary">Search Now</button>

                    </form>

                </div>
            </section>
        </div>
    )
}
export default SelectTicket;


