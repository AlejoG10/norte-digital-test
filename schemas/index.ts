import * as z from "zod";

const DetailsFormSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  quantity: z.coerce
    .number({
      required_error: "Quantity is required",
      invalid_type_error: "Quantity must be a number",
    })
    .positive({
      message: "Quantity must be positive",
    }),
  price: z.coerce.number(),
  subtotal: z.coerce.number(),
});

export const SaleFormSchema = z.object({
  RUT: z.string().min(1, {
    message: "Client is required",
  }),
  branchOffice: z.string().min(1, {
    message: "Branch office is required",
  }),
  currency: z.string(),
  details: z.array(DetailsFormSchema).nonempty({
    message: "At least one product is required",
  }),
  total: z.coerce.number(),
});

export const ClientFormSchema = z.object({
  RUT: z.string().min(1, {
    message: "RUT is required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
  lastName: z.string().min(1, {
    message: "Last name is required",
  }),
  telephone: z.coerce
    .number({
      required_error: "Telephone is required",
      invalid_type_error: "Telephone must be a number",
    })
    .positive({
      message: "Telephone must be positive",
    }),
  city: z.string().min(1, {
    message: "City is required",
  }),
  street: z.string().min(1, {
    message: "Street is required",
  }),
  number: z.coerce
    .number({
      required_error: "Number is required",
      invalid_type_error: "Number must be a number",
    })
    .positive({
      message: "Number must be positive",
    }),
  commune: z.coerce
    .number({
      required_error: "Commune is required",
      invalid_type_error: "Commune must be a number",
    })
    .positive({
      message: "Commune must be positive",
    }),
});
