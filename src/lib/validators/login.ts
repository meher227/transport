import { z } from "zod";

export const loginValidator = z.object({
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(4, {
    message: "Password must be at least 8 characters.",
  }),
});
