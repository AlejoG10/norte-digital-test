"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Plus } from "lucide-react";

import { useClientModal } from "@/hooks/useClientModal";
import { cn } from "@/lib/utils";
import { boldFont } from "@/fonts";
import { branchOffices, clients } from "@/data";
import { SaleFormSchema } from "@/schemas";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import FormCombobox from "./form-combobox";
import FormInput from "./form-input";

const SaleForm = () => {
  const clientModal = useClientModal();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof SaleFormSchema>>({
    resolver: zodResolver(SaleFormSchema),
    defaultValues: {
      clientRUT: "",
      branchOffice: "",
      currency: "",
    },
  });

  const branchOfficeWatch = form.watch("branchOffice");

  const getCurrency = () =>
    branchOfficeWatch &&
    branchOffices.find(
      (branchOffice) => branchOffice.country === branchOfficeWatch
    )?.currency;

  const onSubmit = () => {};

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-y-8">
          {/* document section */}
          <div className="flex flex-col gap-y-4">
            <h2 className={cn(boldFont.className, "text-xl text-slate-800")}>
              Document
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-3 lg:gap-x-6">
              {/* client */}
              <div className="flex gap-x-2 w-full">
                <FormCombobox
                  form={form}
                  name="clientRUT"
                  label="Client"
                  required
                  placeholder="Select a client"
                  innerPlaceholder="Search clients"
                  emptyText="No clients found."
                  items={clients.sort((a, b) => a.RUT.localeCompare(b.RUT))}
                  itemKey="RUT"
                  itemValue="RUT"
                  disabled={loading}
                />

                <Button
                  size="icon"
                  type="button"
                  className="relative top-8 bg-sky-500 hover:bg-sky-600 focus:bg-sky-600"
                  onClick={clientModal.onOpen}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              {/* branch office */}
              <FormCombobox
                form={form}
                name="branchOffice"
                label="Branch Office"
                required
                placeholder="Select a branch office"
                innerPlaceholder="Search a branch office"
                emptyText="No branch offices found."
                items={branchOffices.sort((a, b) =>
                  a.country.localeCompare(b.country)
                )}
                itemKey="country"
                itemValue="country"
                disabled={loading}
              />

              {/* currency */}
              <FormInput
                form={form}
                name="currency"
                value={getCurrency()}
                label="Currency"
                disabled
              />
            </div>
          </div>

          {/* details section */}
          <div className="flex flex-col gap-y-4">
            <h2 className={cn(boldFont.className, "text-xl text-slate-800")}>
              Details
            </h2>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default SaleForm;
