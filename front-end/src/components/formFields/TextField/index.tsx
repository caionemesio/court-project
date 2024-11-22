"use client";

import React from "react";
import {
  IconButton,
  InputAdornment,
  TextField as MUITextField,
} from "@mui/material";
import { Controller } from "react-hook-form";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import { ITextField } from "./types";
import { formatWithMask } from "../../../utils/mask";

export default function TextField({
  control,
  name,
  label,
  mask,
  password,
  leftIcon,
  rightIcon,
  required,
  disabled,
  customOnChange,
  onBlur,
  onChange,
  ...props
}: ITextField) {
  const [showPassword, setShowPassword] = React.useState(false);
  const togglePassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  let icon: any = null;

  if (rightIcon) {
    icon = <InputAdornment position="end">{rightIcon}</InputAdornment>;
  } else if (password) {
    icon = (
      <IconButton onClick={togglePassword}>
        {showPassword ? (
          <VisibilityRoundedIcon />
        ) : (
          <VisibilityOffRoundedIcon />
        )}
      </IconButton>
    );
  }

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <MUITextField
          {...field}
          type={!showPassword && password ? "password" : "text"}
          {...props}
          disabled={disabled}
          error={fieldState.invalid}
          helperText={fieldState.error?.message}
          label={label}
          fullWidth
          variant="outlined"
          size="small"
          required={required}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            startAdornment: leftIcon ? (
              <InputAdornment position="start">{leftIcon}</InputAdornment>
            ) : null,
            endAdornment: icon,
          }}
          onChange={(event) => {
            let newValue = event.target.value;

            if (mask) {
              newValue = formatWithMask({
                mask,
                text: newValue,
              }).masked;
            }

            if (onChange instanceof Function) {
              onChange(newValue);
            } else {
              field.onChange(newValue);
            }

            if (customOnChange instanceof Function) {
              customOnChange(newValue);
            }
          }}
          onBlur={(event) => {
            const newValue = event.target.value;

            if (onBlur instanceof Function) {
              onBlur(newValue);
            } else {
              field.onBlur();
            }
          }}
        />
      )}
    />
  );
}
