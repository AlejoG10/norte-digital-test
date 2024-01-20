"use client";

import { useState } from "react";
import { Control, UseFormSetValue } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import FormLabelCustom from "@/components/shared/form/form-label-custom";
import { Eye, EyeOff } from "lucide-react";

interface FormFieldProps {
  control: Control<any, any>;
  name: string;
  value?: string | number;
  label?: string;
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
  type = "text",
  required,
  placeholder,
  disabled,
  setValue,
  onTrigger,
}: FormFieldProps) => {
  const [pwdType, setPwdType] = useState<"password" | "text">("password");

  if (value && setValue) {
    setValue(name, value);
  }

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="relative">
          {label && <FormLabelCustom label={label} required={required} />}
          <FormControl>
            <>
              <Input
                placeholder={placeholder}
                type={type === "password" ? pwdType : type}
                {...field}
                value={value}
                disabled={disabled}
                onChangeCapture={onTrigger}
              />
            </>
          </FormControl>

          {/* view password */}
          {type === "password" && (
            <button
              type="button"
              className="absolute right-3 bottom-[10px]"
              onClick={() =>
                setPwdType((prev) =>
                  prev === "password" ? "text" : "password"
                )
              }
            >
              {pwdType === "password" ? (
                <Eye className="h-5 w-5" />
              ) : (
                <EyeOff className="h-5 w-5" />
              )}
            </button>
          )}

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
