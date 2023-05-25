/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box, InputLabel, MenuItem, TextField } from "@mui/material";
import React from "react";
import { Button } from "react-bootstrap";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const countryCode = [
  {
    value: "GHANA",
    label: "+233",
  },
  {
    value: "NIGERIA",
    label: "+234",
  },
  {
    value: "ESTONIA",
    label: "+372",
  },
  {
    value: "UK",
    label: "+44",
  },
];

const cities = [
  {
    value: "Accra",
    label: "Accra",
  },
  {
    value: "Tema",
    label: "Tema",
  },
  {
    value: "Kumasi",
    label: "Kumasi",
  },
  {
    value: "Koforidua",
    label: "Koforidua",
  },
];

const vehicleNumber = [
  {
    value: "1-10",
    label: "1-10",
  },
  {
    value: "11-20",
    label: "11-20",
  },
  {
    value: "21 and above",
    label: "21 and above",
  },
];

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
            <a href="/fleet-driver" style={{ color: "#40df6d" }}>
              {fleetOwnerSignUp}
            </a>
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
            <a href="/" style={{ color: "#40df6d" }}>
              {individualOwnerSignUp}
            </a>
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
          <Button
            variant="contained"
            size="large"
            type="submit"
            style={{
              backgroundColor: "#40df6d",
              color: "#ffff",
              paddingBlock: 12,
              fontSize: 18,
            }}
            className="w-100"
          >
            Next <HiOutlineArrowLongRight />
          </Button>
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
