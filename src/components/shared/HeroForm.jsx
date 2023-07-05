/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box, InputLabel, MenuItem, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import data from "./fieldData";
import SharedButton from "./SharedButton";

const cities = data.cities;
const vehicleNumber = data.vehicleNumber;
const countryCode = data.countryCode;

function HeroForm({
  individualHeading,
  fleetHeading,
  individualParagraph,
  fleetOwnerSignUp,
  placeholder,
  helperText,
  cityVehicles,
  cityVehicleDefaultValue,
  individualOwnerSignUp,
  fleetParagraph,
  fleetMainParagraphStart,
  fleetMainParagraphEnd,
  fleetMainParagraphBold,
  cityVehicleName,
  showVehicleNumber,
  showCities,
}) {
  return (
    <>
      <div className="p-3 rounded-1" style={{ backgroundColor: "#FFFF" }}>
        <h1 className="fs-5 fw-bold">{individualHeading}</h1>
        <h1 className="fs-4 fw-bold">{fleetHeading}</h1>
        <p>
          <small>
            {individualParagraph}
            <Link
              to="/fleet-driver"
              style={{ color: "#40df6d" }}
              className="fw-bold"
            >
              {fleetOwnerSignUp}
            </Link>
          </small>
        </p>
        <p>
          <small>
            {fleetMainParagraphStart}
            <span className="fw-bold">{fleetMainParagraphBold}</span>
            {fleetMainParagraphEnd}
          </small>
        </p>
        <p>
          <small>
            {fleetParagraph}
            <Link to="/" style={{ color: "#40df6d" }}>
              {individualOwnerSignUp}
            </Link>
          </small>
        </p>
        <Box component="form" noValidate>
          <InputLabel sx={{ fontWeight: "700" }}>Email</InputLabel>
          <TextField
            required
            id="outlined-required"
            placeholder={placeholder}
            size="small"
            name="email"
            helperText={helperText}
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  border: "1px solid #40df6d",
                },
            }}
          />
          <div className="my-3">
            <InputLabel sx={{ fontWeight: "700" }}>Phone</InputLabel>
            <div className="d-inline-flex w-100">
              <TextField
                id="outlined-select-countrycode"
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
                id="outlined-required"
                placeholder="231246789"
                size="small"
                name="phone"
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
          </div>
          <div className="my-4">
            <InputLabel sx={{ fontWeight: "700" }}>{cityVehicles}</InputLabel>
            <TextField
              id="outlined-select-city"
              select
              size="small"
              name={cityVehicleName}
              fullWidth
              sx={{
                backgroundColor: "#F5F5F5",
                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    border: "1px solid #40df6d",
                  },
              }}
              defaultValue={cityVehicleDefaultValue}
            >
              {showCities &&
                cities.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              {showVehicleNumber &&
                vehicleNumber.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
            </TextField>
          </div>
          <SharedButton buttonText={"Next"} backgroundColor={"#40df6d"} color={"white"}/>
          <p className="mt-3 mb-0 text-muted lh-sm" style={{ fontSize: 12 }}>
            {"By signing up, you accept our "}
            <a href="/" style={{ color: "#40df6d" }}>
              {"Terms of Service "}
            </a>
            {"and "}
            <a href="/" style={{ color: "#40df6d" }}>
              {"Privacy Policy."}
            </a>
          </p>
        </Box>
      </div>
    </>
  );
}

export default HeroForm;
