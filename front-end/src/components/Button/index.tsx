import { CircularProgress, Button as CustomButton } from "@mui/material";
import { IButtonProps } from "./types";

export default function Button({
  loading,
  loadingMessage = "Enviando...",
  disabled,
  children,
  ...props
}: IButtonProps) {
  return (
    <CustomButton disabled={disabled || loading} {...props}>
      {loading ? loadingMessage : children}{" "}
      {loading && <CircularProgress className="ml-2 text-base-400" />}{" "}
    </CustomButton>
  );
}
