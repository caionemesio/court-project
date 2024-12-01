import { z } from "zod";

function convertToDate(hour: string): Date {
  const [hours, minutes] = hour.split(":").map(Number);
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return date;
}

const appointmentSchema = z
  .object({
    title: z
      .string({ required_error: "Atividade é obrigatória" })
      .min(1, "Atividade é obrigatória"),
    description: z
      .string({ required_error: "Descrição é obrigatória" })
      .min(1, "Descrição é obrigatória"),
    sport: z
      .object({
        value: z
          .string({ required_error: "Esporte é obrigatório" })
          .min(1, "Esporte é obrigatório"),
      })
      .nullable()
      .refine((data) => data !== null, {
        message: "Esporte é obrigatório",
      }),
    date: z
      .date()
      .nullable()
      .refine((data) => data !== null, {
        message: "Data é obrigatória",
      }).transform((value) => (value ? value.toISOString() : null)),

    startHour: z
      .object({
        label: z
          .string({ required_error: "Horário Inicial é obrigatório" })
          .min(1, "Horário Inicial é obrigatório"),
      })
      .nullable()
      .refine((data) => data !== null, {
        message: "Horário Inicial é obrigatória",
      }),
    endHour: z
      .object({
        label: z
          .string({ required_error: "Horário Final é obrigatória" })
          .min(1, "Horário Final é obrigatória"),
      })
      .nullable()
      .refine((data) => data !== null, {
        message: "Horário Final é obrigatória",
      }),
  })
  .refine(
    (data) => {
      if (!data.startHour || !data.endHour) return true;

      const start = convertToDate(data.startHour.label);
      const end = convertToDate(data.endHour.label);
      return start < end;
    },
    {
      message: "Hora inicial inválida",
      path: ["startHour"],
    }
  );

type IAppointmentSchema = z.infer<typeof appointmentSchema>;

export { appointmentSchema };
export type { IAppointmentSchema };
