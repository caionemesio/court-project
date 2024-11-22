import Grid from "@mui/material/Grid2";
import { useForm } from "react-hook-form";
import TextField from "../../../components/formFields/TextField";
import Button from "../../../components/Button";
import Autentication from "../../../components/Autentication";
import { zodResolver } from "@hookform/resolvers/zod";
import registerSchema, { IRegister } from "./validations";

export default function Register() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const { control, handleSubmit } = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(registerSchema),
  });

  function onSubmit(data: IRegister) {
    console.log(data);
  }

  return (
    <Autentication
      title="Criar Conta"
      describe="Preencha os campos abaixo para criar sua conta"
    >
      <Grid
        container
        spacing={2}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        className="pt-4"
      >
        <Grid size={12}>
          <TextField control={control} name="name" label="Nome" />
        </Grid>
        <Grid size={12}>
          <TextField control={control} name="email" label="E-mail" />
        </Grid>
        <Grid size={12}>
          <TextField control={control} name="password" label="Senha" password />
        </Grid>
        <Grid size={12}>
          <TextField
            control={control}
            name="confirmPassword"
            label="Confirmar Senha"
            password
          />
        </Grid>
        <Grid size={12} className="flex justify-end">
          <Button type="submit" variant="contained" className="mt-4">
            Criar Conta
          </Button>
        </Grid>
      </Grid>
    </Autentication>
  );
}
