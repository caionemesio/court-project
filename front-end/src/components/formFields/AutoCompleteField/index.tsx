"use client";

import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import React, { useMemo } from "react";
import { Controller } from "react-hook-form";
import { IAutocompleteField } from "./types";
import accessObjectByString from "../../../utils/acessObcetByString";

export default function AutocompleteField({
  control,
  name,
  label,
  placeholder,
  required,
  disabled,
  multiple = false,
  leftIcon = false,
  options = [],
  optionLabelKey = "label",
  optionCompareKey,
  customOnChange,
  onBlur,
  onChange,
  inputProps,
  AutocompleteProps,
}: IAutocompleteField) {
  const optionIdentifier = useMemo(
    () => optionCompareKey || optionLabelKey,
    [optionCompareKey, optionLabelKey]
  );
  const icon: any = null;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Autocomplete
          {...field}
          {...AutocompleteProps}
          size="small"
          variant="outlined"
          fullWidth
          disabled={disabled}
          multiple={multiple}
          options={options}
          getOptionLabel={(option: object) =>
            accessObjectByString(option, optionLabelKey)
          }
          isOptionEqualToValue={(option: object, value) =>
            accessObjectByString(option, optionIdentifier) ===
            accessObjectByString(value, optionIdentifier)
          }
          componentsProps={{
            popper: {
              modifiers: [
                {
                  name: "flip",
                  enabled: true,
                  options: {
                    altBoundary: true,
                    rootBoundary: "document",
                    padding: 8,
                  },
                },
                {
                  name: "preventOverflow",
                  enabled: true,
                  options: {
                    altAxis: true,
                    altBoundary: true,
                    tether: true,
                    rootBoundary: "document",
                    padding: 8,
                  },
                },
              ],
            },
          }}
          renderInput={(params) => (
            <TextField
              {...inputProps}
              {...params}
              error={fieldState.invalid}
              helperText={fieldState.error?.message}
              label={label}
              placeholder={placeholder}
              required={required}
              InputLabelProps={{
                shrink: true,
                ...params.InputLabelProps,
              }}
              InputProps={{
                ...params.InputProps,
                ...inputProps?.InputProps,
                startAdornment: leftIcon ? (
                  <InputAdornment position="start">{leftIcon}</InputAdornment>
                ) : null,
                endAdornment: icon,
              }}
            />
          )}
          onChange={(_, value) => {
            if (onChange instanceof Function) {
              onChange(value);
            } else {
              field.onChange(value);
            }

            if (customOnChange instanceof Function) {
              customOnChange(value);
            }
          }}
          onBlur={(_: any, value: any) => {
            if (onBlur instanceof Function) {
              onBlur(value);
            } else {
              field.onBlur();
            }
          }}
          value={field.value || null}
        />
      )}
    />
  );
}
