/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { InputLabel, TextField } from "@mui/material";
import React from "react";


function EmailInput({ handleEmailChange, handlePasswordChange }) {
  
  

  return (
    <>
      <div className="mt-4">
        <InputLabel sx={{ fontWeight: "700" }}>
          <small>Driver username/email</small>
        </InputLabel>
        <TextField
          id="email"
          placeholder={"Email or username"}
          size="small"
          name="email"
          onChange={handleEmailChange}
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                border: "1px solid #40df6d",
              },
          }}
        />
        <InputLabel sx={{ fontWeight: "700", mt: 3 }}>
          <small>Password</small>
        </InputLabel>
        <TextField
          id="password"
          size="small"
          name="password"
          type="password"
          required={true}
          onChange={handlePasswordChange}
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                border: "1px solid #40df6d",
              },
          }}
        />
      </div>
    </>
  );
}

export default EmailInput;
