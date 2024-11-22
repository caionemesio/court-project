import Grid from "@mui/material/Grid2";
import Autentication from "../../../components/Autentication";
import { useForm } from "react-hook-form";
import TextField from "../../../components/formFields/TextField";
import Button from "../../../components/Button";
import { Link, Typography } from "@mui/material";

export default function Login() {
  const { control, handleSubmit } = useForm({});
  function onSubmit(data: any) {
    console.log(data);
  }
  return (
    <Autentication
      title="Bem-vindo de volta"
      describe="Faça login para acessar sua conta"
    >
      <Grid
        container
        spacing={2}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        className="pt-4"
      >
        <Grid size={12}>
          <TextField control={control} name="email" label="E-mail" />
        </Grid>
        <Grid size={12}>
          <TextField control={control} name="password" label="Senha" password />
        </Grid>
        <Grid size={12} className="flex justify-end">
          <Button type="submit" variant="contained" className="mt-4">
            Entrar
          </Button>
        </Grid>
        <Grid size={12} className="text-center mt-4">
          <Typography variant="body2" className="text-gray-600 ">
            Não tem uma conta?
            <Link href="/cadastro" className="pl-2" underline="hover">
              Cadastre-se aqui
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Autentication>
  );
}
