import { Box, Container, Typography } from "@mui/material";
import { IUnauthContainerProps } from "./types";
import Button from "../../Button";
import { useNavigate } from "react-router-dom";

export default function UnauthContainer({
  title,
  subtitle,
  imageUrl,
}: IUnauthContainerProps) {
  const navigate = useNavigate();
  return (
    <Container className="flex flex-1 items-center justify-center gap-12 h-screen">
      <Box className="flex gap-2 flex-col items-start">
        <Typography variant="h4" fontWeight="bold" className="text-error-500 ">
          {title}
        </Typography>
        <Typography variant="body1" className="text-slate-400 max-w-96">
          {subtitle}
        </Typography>
        <Button
          onClick={() => navigate("/")}
          variant="contained"
          size="medium"
          className="mt-6 bg-error-400  "
        >
          Voltar
        </Button>
      </Box>
      <Box className="max-w-96" component="img" src={imageUrl} />
    </Container>
  );
}
