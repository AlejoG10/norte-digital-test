import { Asterisk } from "lucide-react";

import { FormLabel } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { semiBoldFont } from "@/fonts";

interface FormLabelCustom {
  label: string;
  required?: boolean;
  className?: string;
}

const FormLabelCustom = ({ label, required, className }: FormLabelCustom) => {
  return (
    <FormLabel
      className={cn(
        semiBoldFont.className,
        "flex text-base text-slate-800 w-fit",
        className
      )}
    >
      {label}
      {required && (
        <Asterisk color="red" size={12} className="relative left-1" />
      )}
    </FormLabel>
  );
};

export default FormLabelCustom;
