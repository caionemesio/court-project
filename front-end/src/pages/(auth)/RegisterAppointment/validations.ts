import { z } from "zod";

function convertToDate(hour: string): Date {
  const [hours, minutes] = hour.split(":").map(Number);
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return date;
}

const invalidHourErrorMessage = "A hora inicial não pode ser maior que a hora final";

const appointmentSchema = z.object({
  title: z.string({ required_error: "Atividade é obrigatória" }).min(1, "Atividade é obrigatória"),
  description: z.string({ required_error: "Descrição é obrigatória" }).min(1, "Descrição é obrigatória"),
  sport: z.object({
    value: z.string({ required_error: "Esporte é obrigatório" }).min(1, "Esporte é obrigatório"),
  }).refine((data) => data.value !== "", {
    message: "Esporte é obrigatório",
  }),
  date: z.date({ required_error: "Data é obrigatória" }),
  startHour: z.object({
    label: z.string({ required_error: "Horário Inicial é obrigatório" }).min(1, "Horário Inicial é obrigatório"),
  }).refine((data) => data.label !== "", {
    message: "Horário Inicial é obrigatório",
  }),
  endHour: z.object({
    label: z.string({ required_error: "Horário Final é obrigatório" }).min(1, "Horário Final é obrigatório"),
  }).refine((data) => data.label !== "", {
    message: "Horário Final é obrigatório",
  }),
}).refine((data) => {
  const start = convertToDate(data.startHour.label);
  const end = convertToDate(data.endHour.label);

  if (start >= end) {
    return false;
  }
  return true;
}, {
  message: invalidHourErrorMessage,
});

export { appointmentSchema };
