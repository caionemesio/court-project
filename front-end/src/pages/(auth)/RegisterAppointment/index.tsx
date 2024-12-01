import { Box, Grid2 } from "@mui/material";
import DefaultForm from "../../../components/DefaultForm";
import { useForm } from "react-hook-form";
import TextField from "../../../components/formFields/TextField";
import DateField from "../../../components/formFields/DateField";
import AutocompleteField from "../../../components/formFields/AutoCompleteField";
import { mockingHours, mockingSports } from "./mockingData";
import basketBallDunk from "../../../assets/images/basketballDunk.jpg";
import Button from "../../../components/Button";
import { useMutation } from "@tanstack/react-query";
import useSchedule from "../../../services/useSchedule";
import useNotifier from "../../../hooks/useNotifier";
import { zodResolver } from "@hookform/resolvers/zod";
import { appointmentSchema } from "./validations";

export default function RegisterAppointment() {
  const initialValues = {
    title: "",
    description: "",
    sport: null,
    date: null,
    startHour: null,
    endHour: null,
  };
  const { control, handleSubmit, reset } = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(appointmentSchema),
  });
  const notify = useNotifier();
  const { postSchedule } = useSchedule();
  const postScheduletmentMutation = useMutation({
    mutationFn: postSchedule,
    onSuccess: () => {
      notify("Agendamento solicitado com sucesso", "success");
      reset();
    },
    onError: () => {
      notify("Erro ao solicitar agendamento", "error");
    },
  });

  function onSubmit(data: any) {
    postScheduletmentMutation.mutate(data);
  }

  return (
    <Box className="mt-4">
      <DefaultForm
        title="Solicite seu agendamento da quadra"
        describe="Preencha os campos abaixo para solicitar o agendamento da quadra"
        image={basketBallDunk}
        imageStyle={{ width: "600px", borderRadius: "12px" }}
      >
        <Grid2
          container
          spacing={2}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          className="pt-4"
        >
          <Grid2 size={12}>
            <TextField
              control={control}
              name="title"
              label="Atividade"
              // required
            />
          </Grid2>
          <Grid2 size={12}>
            <TextField
              control={control}
              name="description"
              label="Descrição"
              // required
            />
          </Grid2>
          <Grid2 size={12}>
            <AutocompleteField
              name="sport"
              label="Esporte"
              control={control}
              options={mockingSports}
              optionLabelKey="label"
              // required
            />
          </Grid2>
          <Grid2 size={12}>
            <DateField
              control={control}
              name="date"
              label="Data"
              // required
              minDate={new Date()}
            />
          </Grid2>
          <Grid2 size={6}>
            <AutocompleteField
              name="startHour"
              control={control}
              label="Horário Inicial"
              options={mockingHours}
              optionLabelKey="label"
              // required
            />
          </Grid2>
          <Grid2 size={6}>
            <AutocompleteField
              name="endHour"
              control={control}
              label="Horário Final"
              options={mockingHours}
              optionLabelKey="label"
              // required
            />
          </Grid2>
          <Grid2 size={12} className="flex justify-end">
            <Button type="submit" variant="contained" className="mt-4">
              Solicitar
            </Button>
          </Grid2>
        </Grid2>
      </DefaultForm>
    </Box>
  );
}
