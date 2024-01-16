'use client'
import '@/assets/css/style.css';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
const SelectTicket = () => {
    const [departure, setInputValue] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setInputValue(event.target.value);
    };
    return (
        <div>
            <section className="tour-search">
                <div className="container">

                    <form action="" className="tour-search-form">

                        <div className="input-wrapper">
                            <label className="input-label">Search Destination*</label>
                            <input type="text" name="destination" id="destination" required placeholder="Enter Destination"
                                className="input-field" />
                        </div>

                        <div className="input-wrapper">
                            <label className="input-label">Pax Number*</label>

                            <input type="number" name="people" id="people" required placeholder="No.of People" className="input-field" />
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


