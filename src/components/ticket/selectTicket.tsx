"use client";
import "@/assets/css/style.css";
import * as React from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Box, FormControl, InputLabel, MenuItem } from "@mui/material";
import { useSearchParams } from "next/navigation";
const SelectTicket = () => {
  const searchParams = useSearchParams();
  const [selectedOption1, setSelectedOption1] = React.useState(
    searchParams.get("from") || ""
  );
  const [selectedOption2, setSelectedOption2] = React.useState(
    searchParams.get("to") || ""
  );
  const [checkin, setCheckin] = React.useState(
    searchParams.get("checkin") || ""
  );
  const [checkout, setCheckout] = React.useState(
    searchParams.get("checkout") || ""
  );

  const handleSelect1Change = (event: SelectChangeEvent) => {
    setSelectedOption1(event.target.value as string);
  };

  const handleSelect2Change = (event: SelectChangeEvent) => {
    setSelectedOption2(event.target.value as string);
  };

  const handleSetCheckin = (event: SelectChangeEvent) => {
    setCheckin(event.target.value as string);
  };

  const handleSetCheckout = (event: SelectChangeEvent) => {
    setCheckout(event.target.value as string);
  };
  return (
    <div>
      <section className="tour-search">
        <div className="container">
          <form action="./travel" method="get" className="tour-search-form">
            <div
              className="input-wrapper"
              style={{ backgroundColor: "white", borderRadius: "100px" }}
            >
              <FormControl fullWidth>
                <InputLabel
                  id="from-label"
                  style={{ backgroundColor: "white", borderRadius: "100px" }}
                >
                  From
                </InputLabel>
                <Select
                  style={{ backgroundColor: "white", borderRadius: "100px" }}
                  labelId="go-label"
                  id="from"
                  name="from"
                  value={selectedOption1}
                  onChange={handleSelect1Change}
                >
                  <MenuItem value="Hà Nội">Hà Nội</MenuItem>
                  <MenuItem value="Hồ Chí Minh">Hồ Chí Minh</MenuItem>
                  <MenuItem value="Đà Nẵng">Đà Nẵng</MenuItem>
                  <MenuItem value="Bình Phước">Bình Phước</MenuItem>
                  <MenuItem value="Bình Dương">Bình Dương</MenuItem>
                  <MenuItem value="Vĩnh phúc">Vĩnh phúc</MenuItem>
                  <MenuItem value="Vĩnh Long">Vĩnh Long</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div
              className="input-wrapper"
              style={{ backgroundColor: "white", borderRadius: "100px" }}
            >
              <FormControl fullWidth>
                <InputLabel
                  id="to-label"
                  style={{ backgroundColor: "white", borderRadius: "100px" }}
                >
                  To
                </InputLabel>
                <Select
                  style={{ backgroundColor: "white", borderRadius: "100px" }}
                  labelId="to-label"
                  id="to"
                  name="to"
                  value={selectedOption2}
                  onChange={handleSelect2Change}
                >
                  <MenuItem value="Hà Nội">Hà Nội</MenuItem>
                  <MenuItem value="Hồ Chí Minh">Hồ Chí Minh</MenuItem>
                  <MenuItem value="Đà Nẵng">Đà Nẵng</MenuItem>
                  <MenuItem value="Bình Phước">Bình Phước</MenuItem>
                  <MenuItem value="Bình Dương">Bình Dương</MenuItem>
                  <MenuItem value="Vĩnh phúc">Vĩnh phúc</MenuItem>
                  <MenuItem value="Vĩnh Long">Vĩnh Long</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="input-wrapper">
              <label className="input-label">Checkin Date*</label>
              <input
                type="date"
                name="checkin"
                id="checkin"
                value={checkin}
                min={new Date().toDateString()}
                required
                className="input-field"
                onChange={handleSetCheckin}
              />
            </div>

            <div className="input-wrapper">
              <label className="input-label">Checkout Date*</label>
              <input
                type="date"
                name="checkout"
                id="checkout"
                required
                className="input-field"
                value={checkout}
                onChange={handleSetCheckout}
              />
            </div>
            <button type="submit" className="btn btn-secondary">
              Search Now
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
export default SelectTicket;
