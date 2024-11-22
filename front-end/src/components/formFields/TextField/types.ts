
import React from 'react';
import { Control } from 'react-hook-form';
import { TextFieldProps } from '@mui/material';
import { Mask } from '../../../types/Regex';

export type ITextField = {
  control: Control<any, any>;
  name: string;
  label?: string;
  placeholder?: string;
  mask?: Mask;
  password?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
  customOnChange?: (values: any) => void;
  onBlur?: (values: any) => void;
  onChange?: (values: any) => void;
} & TextFieldProps;
