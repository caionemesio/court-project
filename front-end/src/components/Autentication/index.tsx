import { Box, Typography } from "@mui/material";
import WomanImage from "../../assets/images/working-woman.png";
import { IAutenticationProps } from "./types";

export default function Autentication({
  children,
  title,
  describe,
}: IAutenticationProps) {
  return (
    <Box className="flex p-4 justify-around items-center  ">
      <Box className="max-w-96 bg-white p-6 shadow-xl rounded-lg border border-gray-200">
        <Box className="bg-blue-500 w-full py-4 px-6 rounded-t-lg">
          <Typography variant="h5" className="text-white font-semibold">
            {title}
          </Typography>
          <Typography className="text-white text-sm">{describe}</Typography>
        </Box>
        {children}
      </Box>
      <img src={WomanImage} alt="Mulher trabalhando no computador" />
    </Box>
  );
}
