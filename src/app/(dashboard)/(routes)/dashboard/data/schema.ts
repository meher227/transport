import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
});

export type Task = z.infer<typeof taskSchema>;

export const vehicleSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string(),
  driver_name: z.string(),
  driver_mobile: z.string(),
  lr_no: z.string(),
  lr_date: z.string(),
});

export type Vehicle = z.infer<typeof vehicleSchema>;
