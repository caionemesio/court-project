import * as z from "zod";

const registerSchema = z
  .object({
    name: z
      .string({ required_error: "O nome é obrigatório" })
      .min(3, "O nome deve ter no mínimo 3 caracteres"),
    email: z
      .string({ required_error: "O e-mail é obrigatório" })
      .min(1, "O e-mail é obrigatório")
      .email("Digite um e-mail válido"),
    password: z
      .string({ required_error: "A senha é obrigatória" })
      .min(1, "A senha é obrigatória")
      .min(8, "A senha deve ter no mínimo 8 caracteres")
      .regex(/[A-Za-z]/, "A senha deve conter ao menos uma letra")
      .regex(/[0-9]/, "A senha deve conter ao menos um número"),
    confirmPassword: z
      .string({ required_error: "A confirmação da senha é obrigatória" })
      .min(1, "A confirmação da senha é obrigatória"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

type IRegister = z.infer<typeof registerSchema>

export type { IRegister };
export default registerSchema;
