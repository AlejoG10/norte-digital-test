"use client";

import { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import toast from "react-hot-toast";
import { Plus, X } from "lucide-react";

import { useClientModal } from "@/hooks/useClientModal";
import { Sale, branchOffices, clients, products, sales } from "@/data";
import { SaleFormSchema } from "@/schemas";
import { cn, genId } from "@/lib/utils";

import SubHeading from "@/components/dashboard/headings/sub-heading";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import FormCombobox from "@/components/dashboard/form/form-combobox";
import FormInput from "@/components/dashboard/form/form-input";
import FormLabelCustom from "@/components/dashboard/form/form-label-custom";

const SaleForm = () => {
  // custom hooks
  const clientModal = useClientModal();

  // state hooks
  const [, setTrigger] = useState(false);
  const [loading, setLoading] = useState(false);

  // ----------
  // form setup
  // ----------

  const defaultDetail = { name: "", quantity: 0, price: 0, subtotal: 0 };

  const form = useForm<z.infer<typeof SaleFormSchema>>({
    resolver: zodResolver(SaleFormSchema),
    defaultValues: {
      RUT: "",
      branchOffice: "",
      currency: "",
      details: [defaultDetail],
      total: 0,
    },
  });

  const { control, setValue, handleSubmit } = form;

  // dynamic field array
  const {
    fields: details,
    append,
    remove,
  } = useFieldArray({
    name: "details",
    control,
  });

  // watch fields
  const branchOfficeWatch = form.watch("branchOffice");
  const currencyWatch = form.watch("currency");
  const detailsWatch = form.watch("details");

  // ----------------
  // helper functions
  // ----------------

  /**
   * gets the currency of the selected branch office
   * @returns currency or "" if not found
   */
  const getCurrency = () => {
    if (!branchOfficeWatch) return "";

    const currency = branchOffices.find(
      (branchOffice) => branchOffice.country === branchOfficeWatch
    )!.currency;

    return currency;
  };

  /**
   * appends the selected currency to a label
   * @param label
   * @returns complete label with currency
   */
  const appendCurrencyTo = (label: string) => {
    return `${label} ${currencyWatch && `(${currencyWatch})`}`;
  };

  /**
   * gets all the products from the selected branch office
   * @returns products from the selected branch office
   */
  const getProductsFromBranchOffice = () => {
    return products.filter(
      (product) => product.branchOffice === branchOfficeWatch
    );
  };

  /**
   * gets the product at index i from the detail list products
   * @param i index
   * @returns product at index i
   */
  const getProduct = (i: number) => {
    return products.find((product) => product.id === detailsWatch[i].name);
  };

  /**
   * gets the price of the product at index i from the detail list products
   * @param i index
   * @returns product price at index i or 0 if product not found
   */
  const getPrice = (i: number) => {
    return getProduct(i)?.price || 0;
  };

  /**
   * gets the subtotal of the product at index i from the detail list products
   * @param i index
   * @returns subtotal at index i
   */
  const getSubtotal = (i: number) => {
    return detailsWatch[i].quantity * getPrice(i);
  };

  /**
   * gets the total of the sale (sumatory of subtotals)
   * @returns subtotal at index i
   */
  const getTotal = () => {
    return detailsWatch.reduce((acc, _, i) => acc + getSubtotal(i), 0);
  };

  /**
   * useless function to re-render the form at specific times
   */
  const onTrigger = () => {
    setTrigger((prev) => !prev);
  };

  /**
   * saves the current sale with the specified values
   * @param values form values
   */
  const onSubmit = (values: z.infer<typeof SaleFormSchema>) => {
    setLoading(true);

    const { RUT, branchOffice, details, total } = values;

    const newSale: Sale = {
      id: genId(),
      fecha: new Date(),
      sellerRUT: genId(), // TODO: make seller modal
      clientRUT: RUT,
      branchOffice: branchOffice,
      total: total,
      details: details.map((detail) => ({
        productId: detail.name,
        price: detail.price,
        quantity: detail.quantity,
        subtotal: detail.subtotal,
      })),
    };

    sales.splice(0, 0, newSale);

    form.reset();

    setLoading(false);
    toast.success("Sale successfully saved!");
  };

  // ----------
  // useEffects
  // ----------

  /**
   * saves the currency every time branchOffice field is changed
   * removes details section (as product depends on branchesOffice)
   */
  useEffect(() => {
    setValue("currency", getCurrency());
    form.resetField("details");
  }, [branchOfficeWatch]);

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-y-8">
          {/* document section */}
          <section className="flex flex-col gap-y-4">
            <SubHeading title="Document" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-3 md:gap-x-6">
              {/* client */}
              <div className="flex col-span-5 gap-x-3">
                <FormCombobox
                  form={form}
                  name="RUT"
                  label="Client"
                  required
                  placeholder="Select a client"
                  innerPlaceholder="Search clients"
                  emptyText="No clients found."
                  items={clients}
                  itemKey="RUT"
                  itemValue="name"
                  itemValueConcat="lastName"
                  disabled={loading}
                />

                {/* add client button */}
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
              <div className="col-span-4">
                <FormCombobox
                  form={form}
                  name="branchOffice"
                  label="Branch Office"
                  required
                  placeholder="Select a branch office"
                  innerPlaceholder="Search a branch office"
                  emptyText="No branch offices found."
                  items={branchOffices}
                  itemKey="country"
                  itemValue="country"
                  disabled={loading}
                />
              </div>

              {/* currency */}
              <div className="col-span-3">
                <FormInput
                  control={control}
                  name="currency"
                  value={getCurrency()}
                  label="Currency"
                  disabled
                />
              </div>
            </div>
          </section>

          {/* details section */}
          <div className="flex flex-col gap-y-4">
            <SubHeading title="Details" />

            {details.map((detail, i) => (
              <div key={detail.id} className="grid grid-cols-12 gap-x-6">
                {/* product name */}
                <div className="col-span-5">
                  <FormCombobox
                    form={form}
                    name={`details[${i}].name`}
                    label={i === 0 ? "Name" : undefined}
                    required
                    placeholder="Select a product"
                    innerPlaceholder="Search a product"
                    emptyText="No products found."
                    items={getProductsFromBranchOffice()}
                    itemKey="id"
                    itemValue="name"
                    disabled={!branchOfficeWatch || loading}
                    onTrigger={onTrigger}
                  />
                </div>

                {/* product quantity */}
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

                {/* product price */}
                <div className="col-span-2">
                  <FormInput
                    control={control}
                    name={`details[${i}].price`}
                    label={i === 0 ? appendCurrencyTo("Price") : undefined}
                    type="number"
                    setValue={setValue}
                    value={getPrice(i)}
                    disabled
                  />
                </div>

                {/* subtotal */}
                <div className="col-span-2">
                  <FormInput
                    control={control}
                    name={`details[${i}].subtotal`}
                    label={i === 0 ? appendCurrencyTo("Subtotal") : undefined}
                    setValue={setValue}
                    value={getSubtotal(i)}
                    disabled
                  />
                </div>

                {/* remove button */}
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
              className="bg-sky-500 hover:bg-sky-600 w-40"
              type="button"
              onClick={() => append(defaultDetail)}
            >
              Add field
            </Button>
          </div>

          <br />

          {/* total */}
          <div className="grid grid-cols-12 items-center gap-x-6">
            <div className="col-start-8 col-span-2 ml-auto">
              <FormLabelCustom label={appendCurrencyTo("Total")} />
            </div>

            <div className="col-start-10 col-span-2">
              <FormInput
                control={control}
                name="total"
                value={getTotal()}
                setValue={setValue}
                disabled
              />
            </div>
          </div>

          {/* save button */}
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
      </form>
    </Form>
  );
};

export default SaleForm;
