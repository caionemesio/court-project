import { Box, Typography } from "@mui/material";
import { IDefaultFormProps } from "./types";

export default function DefaultForm({
  children,
  title,
  image,
  imageStyle,
  describe,
}: IDefaultFormProps) {
  return (
    <Box className="flex p-4 justify-around items-center h-[80vh]  ">
      <Box className="max-w-96 bg-white p-6 shadow-xl rounded-lg border border-gray-200">
        <Box className="bg-blue-500 w-full py-4 px-6 rounded-t-lg">
          <Typography variant="h5" className="text-white font-semibold">
            {title}
          </Typography>
          <Typography className="text-white text-sm">{describe}</Typography>
        </Box>
        {children}
      </Box>
      {image && (
        <Box component="img" src={image} alt="imagem" sx={imageStyle} />
      )}
    </Box>
  );
}
