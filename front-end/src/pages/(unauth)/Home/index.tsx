import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HomeImage from "../../../assets/images/image-home.jpg";



export default function Home() {
  return (
    <Box className="flex bg-primary-main min-h-screen justify-center items-start pt-24 p-12">
      <Box className="flex items-center space-x-20">
        <Box className="flex flex-col space-y-4 w-1/2">
          <Typography component={"h1"} className="text-6xl font-bold text-black max-w-lg">
            Agora você pode acompanhar e agendar nossa quadra!
          </Typography >
          <Typography component={"p"} className="text-2xl text-black font-medium max-w-lg">
            Uma iniciativa de alunos que, através de um site, possamos ver os
            horários disponíveis da nossa quadra.
          </Typography>
          <Button variant="contained" className="text-2xl w-3/4 bg-[#004084] rounded-lg">Agende Agora!</Button>
        </Box>

        <Box component="img" src={HomeImage} className="w-auto rounded-3xl">
        </Box>
      </Box>
    </Box>
  );
}