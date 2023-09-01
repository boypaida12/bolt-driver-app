/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button } from "@mui/material";
import React from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

function SharedButton({
  buttonText,
  backgroundColor,
  color,
  disabled,
  border,
  className,
  link,
  showButtonArrow = true,
  handleClick
}) {
  return (
    <>
      <Link to={link}>
        <Button
          size="medium"
          type="submit"
          style={{
            backgroundColor,
            color,
            paddingBlock: 8,
            fontSize: "1rem",
            border,
          }}
          fullWidth
          className={`text-capitalize fw-bold ${className}`}
          disabled={disabled}
          onClick={handleClick}
        >
          {buttonText} {showButtonArrow && <HiOutlineArrowLongRight />}
        </Button>
      </Link>
    </>
  );
}

export default SharedButton;
