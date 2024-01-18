"use client";

import { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Plus, X } from "lucide-react";

import { useClientModal } from "@/hooks/useClientModal";
import { cn } from "@/lib/utils";
import { boldFont } from "@/fonts";
import { branchOffices, clients, products } from "@/data";
import { SaleFormSchema } from "@/schemas";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import FormCombobox from "./form-combobox";
import FormInput from "./form-input";

const SaleForm = () => {
  const clientModal = useClientModal();
  const [trigger, setTrigger] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof SaleFormSchema>>({
    resolver: zodResolver(SaleFormSchema),
    defaultValues: {
      clientRUT: "",
      branchOffice: "",
      currency: "",
      details: [
        {
          name: "",
          quantity: 0,
          price: 0,
          subtotal: 0,
        },
      ],
      total: 0,
    },
  });

  const { control, setValue, handleSubmit } = form;

  const {
    fields: details,
    append,
    remove,
  } = useFieldArray({
    name: "details",
    control,
  });

  const branchOfficeWatch = form.watch("branchOffice");
  const currencyWatch = form.watch("currency");
  const detailsWatch = form.watch("details");

  const getCurrency = () =>
    branchOfficeWatch &&
    branchOffices.find(
      (branchOffice) => branchOffice.country === branchOfficeWatch
    )!.currency;

  const getProduct = (i: number) =>
    products.find((product) => product.id === detailsWatch[i].name);

  const getPrice = (i: number) => getProduct(i)?.price || 0;

  const getSubtotal = (i: number) => detailsWatch[i].quantity * getPrice(i);

  const getTotal = () =>
    detailsWatch.reduce((acc, _, i) => acc + getSubtotal(i), 0);

  const onTrigger = () => {
    console.log("triggered!");
    setTrigger((prev) => !prev);
  };

  const onSubmit = (values: z.infer<typeof SaleFormSchema>) => {
    console.log(values);
  };

  const appendCurrency = (label: string) =>
    `${label} ${currencyWatch && `(${currencyWatch})`}`;

  useEffect(() => {
    form.setValue("currency", getCurrency());
  }, [branchOfficeWatch]);

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                  className="relative top-8 bg-sky-500 hover:bg-sky-600"
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
                control={control}
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

            {details.map((detail, i) => (
              <div key={detail.id} className="grid grid-cols-12 gap-x-6">
                {/* name */}
                <div className="col-span-5">
                  <FormCombobox
                    form={form}
                    name={`details[${i}].name`}
                    label={i === 0 ? "Name" : undefined}
                    required
                    placeholder="Select a product"
                    innerPlaceholder="Search a product"
                    emptyText="No products found."
                    items={products
                      .filter(
                        (product) => product.branchOffice === branchOfficeWatch
                      )
                      .sort((a, b) => a.name.localeCompare(b.name))}
                    itemKey="id"
                    itemValue="name"
                    disabled={!branchOfficeWatch || loading}
                    onTrigger={onTrigger}
                  />
                </div>

                {/* quantity */}
                <div className="col-span-2">
                  <FormInput
                    control={control}
                    name={`details[${i}].quantity`}
                    label={i === 0 ? "Quantity" : undefined}
                    type="number"
                    required
                    disabled={!detailsWatch[i].name || loading}
                    onTrigger={onTrigger}
                  />
                </div>

                {/* price */}
                <div className="col-span-2">
                  <FormInput
                    control={control}
                    name={`details[${i}].price`}
                    label={i === 0 ? "Price" : undefined}
                    type="number"
                    value={getPrice(i)}
                    disabled
                  />
                </div>

                {/* subtotal */}
                <div className="col-span-2">
                  <FormInput
                    control={control}
                    name={`details[${i}].subtotal`}
                    label={i === 0 ? appendCurrency("Subtotal") : undefined}
                    value={getSubtotal(i)}
                    disabled
                  />
                </div>

                {/* remove */}
                <div className="col-span-1 ml-auto">
                  <Button
                    size="icon"
                    type="button"
                    className={cn(
                      "relative bg-sky-500 hover:bg-sky-600",
                      i === 0 && "top-8"
                    )}
                    onClick={() => remove(i)}
                    disabled={details.length === 1 || loading}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}

            <Button
              type="button"
              className="bg-sky-500 hover:bg-sky-600 w-40"
              onClick={() =>
                append({
                  name: "",
                  quantity: 0,
                  price: 0,
                  subtotal: 0,
                })
              }
            >
              Add field
            </Button>

            <div className="grid grid-cols-12 gap-x-6">
              {/* total */}
              <div className="col-start-10 col-span-2">
                <FormInput
                  control={control}
                  name="total"
                  value={getTotal()}
                  label={appendCurrency("Total")}
                  disabled
                />
              </div>
            </div>

            <div className="grid grid-cols-12 gap-x-6">
              <div className="col-start-10 col-span-2">
                <Button
                  type="submit"
                  className="bg-sky-500 hover:bg-sky-600 w-full"
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default SaleForm;
