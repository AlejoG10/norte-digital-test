import { useEffect, useRef, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import FormLabelCustom from "./form-label-custom";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";

interface FormComboboxProps {
  form: UseFormReturn<any, any, undefined>;
  name: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  innerPlaceholder?: string;
  emptyText?: string;
  items: any[];
  itemKey: string;
  itemValue: string;
  disabled?: boolean;
}

const FormCombobox = ({
  form,
  name,
  label,
  required,
  placeholder,
  innerPlaceholder,
  emptyText,
  items,
  itemKey,
  itemValue,
  disabled,
}: FormComboboxProps) => {
  const [showItems, setShowItems] = useState(false);
  const triggerRef = useRef<any>(null);
  const contentRef = useRef<any>(null);

  const onWindowClick = (e: Event) => {
    const target = e.target;

    const triggerCurr = triggerRef.current;
    const contentCurr = contentRef.current;

    if (
      triggerCurr &&
      contentCurr &&
      !triggerCurr.contains(target) &&
      !contentCurr.contains(target)
    ) {
      e.preventDefault();
      e.stopPropagation();
      setShowItems(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", onWindowClick);
    return () => window.removeEventListener("click", onWindowClick);
  }, []);

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col w-full">
          <FormLabelCustom label={label} required={required} />
          <Popover>
            <div className="relative w-full">
              <PopoverTrigger asChild ref={triggerRef} disabled={disabled}>
                <FormControl>
                  <Button
                    variant="outline"
                    role="combobox"
                    onClick={() => setShowItems((prev) => !prev)}
                    className={cn(
                      "w-full justify-between mb-2",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value
                      ? items.find((item) => item[itemValue] === field.value)[
                          itemValue
                        ]
                      : placeholder}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              {showItems && (
                <div
                  ref={contentRef}
                  className="absolute bg-popover rounded-md border text-popover-foreground shadow-md outline-none w-full z-10"
                >
                  <Command>
                    <CommandInput placeholder={innerPlaceholder} />
                    <CommandEmpty>{emptyText}</CommandEmpty>
                    <CommandGroup className="max-h-[200px] overflow-y-scroll">
                      {items.map((item) => (
                        <CommandItem
                          key={item[itemKey]}
                          value={item[itemValue]}
                          onSelect={() => {
                            form.setValue(name, item[itemKey]);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              item[itemValue] === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {item[itemValue]}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </div>
              )}
            </div>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormCombobox;
