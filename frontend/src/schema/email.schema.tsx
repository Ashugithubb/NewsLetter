import z from "zod";

export const emailSchema = z.object({
  email: z.string().min(6,{ message: 'Invalid email address' }),
});

type LoginFormData = z.infer<typeof emailSchema>;