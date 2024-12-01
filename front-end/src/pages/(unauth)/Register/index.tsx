import Grid from "@mui/material/Grid2";
import { useForm } from "react-hook-form";
import TextField from "../../../components/formFields/TextField";
import Button from "../../../components/Button";
import DefaultForm from "../../../components/DefaultForm";
import WomanImage from "../../../assets/images/working-woman.png";
import { zodResolver } from "@hookform/resolvers/zod";
import registerSchema, { IRegister } from "./validations";
import { useMutation } from "@tanstack/react-query";
import useAuth from "../../../services/useAuth";
import useNotifier from "../../../hooks/useNotifier";

export default function Register() {
  const { register } = useAuth();
  const notify = useNotifier();
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

  const registerMutation = useMutation({
    mutationFn: register,
    onSuccess: () => {
      notify("Usuário criado com sucesso", "success");
    },
    onError: (error: any) => {
      notify("Erro ao criar usuário", "error");
      console.log(error);
    },
  });

  function onSubmit(data: IRegister) {
    registerMutation.mutate(data);
    console.log(data);
  }

  return (
    <DefaultForm
      title="Criar Conta"
      describe="Preencha os campos abaixo para criar sua conta"
      image={WomanImage}
    >
      <Grid
        container
        spacing={2}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        className="pt-4"
      >
        <Grid size={12}>
          <TextField control={control} name="name" label="Nome" required />
        </Grid>
        <Grid size={12}>
          <TextField control={control} name="email" label="E-mail" required />
        </Grid>
        <Grid size={12}>
          <TextField
            control={control}
            name="password"
            label="Senha"
            password
            required
          />
        </Grid>
        <Grid size={12}>
          <TextField
            control={control}
            name="confirmPassword"
            label="Confirmar Senha"
            password
            required
          />
        </Grid>
        <Grid size={12} className="flex justify-end">
          <Button type="submit" variant="contained" className="mt-4">
            Criar Conta
          </Button>
        </Grid>
      </Grid>
    </DefaultForm>
  );
}
