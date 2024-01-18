"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useClientModal } from "@/hooks/useClientModal";
import { Client, clients } from "@/data";
import { ClientFormSchema } from "@/schemas";
import Modal from "./modal";
import { Form } from "@/components/ui/form";
import FormInput from "@/components/dashboard/form/form-input";
import { Button } from "@/components/ui/button";

const ClientModal = () => {
  const clientModal = useClientModal();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof ClientFormSchema>>({
    resolver: zodResolver(ClientFormSchema),
    defaultValues: {
      RUT: "",
      name: "",
      lastName: "",
      telephone: "",
      city: "",
      street: "",
      number: undefined,
      commune: "",
    },
  });

  const { control } = form;

  const onSubmit = (values: z.infer<typeof ClientFormSchema>) => {
    setLoading(true);

    const { city, street, number, commune } = values;

    const newClient: Client = {
      ...values,
      address: {
        city,
        street,
        number,
        commune,
      },
    };

    clients.push(newClient);

    form.reset();
    clientModal.onClose();

    setLoading(false);
  };

  if (!clientModal.isOpen) return null;

  return (
    <Modal
      title="Add a New Client"
      dims="sm:w-9/12 md:w-8/12 lg:w-7/12 xl:w-1/2 sm:h-fit sm:max-h-[400px] overflow-y-scroll"
      onClose={clientModal.onClose}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-y-4 mb-6">
            {/* RUT */}
            <FormInput
              control={control}
              name="RUT"
              label="RUT"
              smallLabel
              required
              disabled={loading}
            />

            {/* name */}
            <FormInput
              control={control}
              name="name"
              label="Name"
              smallLabel
              required
              disabled={loading}
            />

            {/* lastName */}
            <FormInput
              control={control}
              name="lastName"
              label="Last Name"
              smallLabel
              required
              disabled={loading}
            />

            {/* telephone */}
            <FormInput
              control={control}
              name="telephone"
              label="Telephone"
              smallLabel
              required
              disabled={loading}
            />

            {/* city */}
            <FormInput
              control={control}
              name="city"
              label="City"
              smallLabel
              required
              disabled={loading}
            />

            {/* telephone */}
            <FormInput
              control={control}
              name="street"
              label="Street"
              smallLabel
              required
              disabled={loading}
            />

            {/* number */}
            <FormInput
              control={control}
              name="number"
              label="Number"
              smallLabel
              type="number"
              required
              disabled={loading}
            />

            {/* commune */}
            <FormInput
              control={control}
              name="commune"
              label="Commune"
              smallLabel
              required
              disabled={loading}
            />
          </div>

          <Button type="submit" className="bg-sky-500 hover:bg-sky-600 w-full">
            Save
          </Button>
        </form>
      </Form>
    </Modal>
  );
};

export default ClientModal;
