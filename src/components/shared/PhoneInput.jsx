/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { InputLabel, MenuItem, TextField } from "@mui/material";
import React from "react";
import data from "./fieldData";

const countryCode = data.countryCode;

function PhoneInput({ handlePhoneChange }) {
  return (
    <>
      <form className="mt-4">
        <InputLabel sx={{ fontWeight: "700" }}>
          <small>Phone</small>
        </InputLabel>
        <div className="d-inline-flex w-100">
          <TextField
            id="countrycode"
            select
            size="small"
            name="country-code"
            className="text-center"
            sx={{
              width: "50%",
              backgroundColor: "#F5F5F5",
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  border: "1px solid #40df6d",
                },
              "& .MuiOutlinedInput-root": {
                borderTopRightRadius: "0",
                borderBottomRightRadius: "0",
              },
            }}
            defaultValue="GHANA"
          >
            {countryCode.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            id="phone"
            placeholder="231246789"
            size="small"
            name="phone"
            onChange={handlePhoneChange}
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  border: "1px solid #40df6d",
                },
              "& .MuiOutlinedInput-root": {
                borderTopLeftRadius: "0",
                borderBottomLeftRadius: "0",
              },
            }}
          />
        </div>
      </form>
    </>
  );
}

export default PhoneInput;
