import { ButtonProps } from '@mui/material';

interface IButtonProps extends ButtonProps {
  loading?: boolean;
  removeBackground?: boolean;
  loadingMessage?: string;
}

export type { IButtonProps };