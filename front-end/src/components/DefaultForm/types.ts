import { SxProps } from "@mui/material";

interface IDefaultFormProps {
  children: React.ReactNode;
  title: string;
  describe: string;
  image?: string;
  imageStyle?: SxProps;
}

export type { IDefaultFormProps };
