import { UseFormReturn } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import FormLabelCustom from "./form-label-custom";

interface FormFieldProps {
  form: UseFormReturn<any, any, undefined>;
  name: string;
  value?: string;
  label: string;
  smallLabel?: boolean;
  type?: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
}

const FormInput = ({
  form,
  name,
  value,
  label,
  smallLabel,
  type = "text",
  required,
  placeholder,
  disabled,
}: FormFieldProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabelCustom
            label={label}
            className={`${smallLabel && "text-sm"}`}
            required={required}
          />
          <FormControl>
            <Input
              placeholder={placeholder}
              type={type}
              {...field}
              value={value}
              disabled={disabled}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
