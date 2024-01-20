import * as z from "zod";

/**
 * sale details form schema and validations
 */
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
    })
    .int({
      message: "Quantity must be an integer",
    }),
  price: z.string(),
  subtotal: z.string(),
});

/**
 * sale form schema and validations
 * used when creating a new sale
 */
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
  total: z.string(),
});

/**
 * client form schema and validations
 * used when creating a new client
 */
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
    })
    .int({
      message: "Telephone must be an integer",
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
    })
    .int({
      message: "Number must be an integer",
    }),
  commune: z.coerce
    .number({
      required_error: "Commune is required",
      invalid_type_error: "Commune must be a number",
    })
    .positive({
      message: "Commune must be positive",
    })
    .int({
      message: "Commune must be an integer",
    }),
});

/**
 * login form schema and validations
 * used to login
 */
export const LoginFormSchema = z.object({
  username: z.string().min(1, {
    message: "Username is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});
