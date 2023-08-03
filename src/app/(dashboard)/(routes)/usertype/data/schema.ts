import { z } from "zod";

export const usertypeSchema = z.object({
  id: z.string(),
  user_type: z.string(),
  role_description: z.string(),
  created_by: z.string(),
  created_on: z.string(),
});

export type Vehicle = z.infer<typeof usertypeSchema>;
