import { Control, UseFormSetValue } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import FormLabelCustom from "@/components/dashboard/form/form-label-custom";

interface FormFieldProps {
  control: Control<any, any>;
  name: string;
  value?: string | number;
  label?: string;
  smallLabel?: boolean;
  type?: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  setValue?: UseFormSetValue<any>;
  onTrigger?: () => void;
}

const FormInput = ({
  control,
  name,
  value,
  label,
  smallLabel,
  type = "text",
  required,
  placeholder,
  disabled,
  setValue,
  onTrigger,
}: FormFieldProps) => {
  if (value && setValue) {
    setValue(name, value);
  }

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabelCustom
              label={label}
              className={`${smallLabel && "text-sm"}`}
              required={required}
            />
          )}
          <FormControl>
            <Input
              placeholder={placeholder}
              type={type}
              {...field}
              value={value}
              disabled={disabled}
              onChangeCapture={onTrigger}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
