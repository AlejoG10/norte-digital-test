"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import toast from "react-hot-toast";

import { useClientModal } from "@/hooks/useClientModal";
import { Client, clients } from "@/data";
import { ClientFormSchema } from "@/schemas";
import Modal from "./modal";
import { Form } from "@/components/ui/form";
import FormInput from "@/components/shared/form/form-input";
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
      telephone: 0,
      city: "",
      street: "",
      number: 0,
      commune: 0,
    },
  });

  const { control, handleSubmit } = form;

  const onClose = () => {
    clientModal.onClose();
    form.reset();
  };

  const onSubmit = (values: z.infer<typeof ClientFormSchema>) => {
    setLoading(true);

    const { RUT, name, lastName, telephone, city, street, number, commune } =
      values;

    const newClient: Client = {
      RUT,
      name,
      lastName,
      telephone,
      address: {
        city,
        street,
        number,
        commune,
      },
    };

    clients.splice(0, 0, newClient);

    form.reset();
    clientModal.onClose();

    setLoading(false);
    toast.success("Client successfully created!");
  };

  return (
    <Modal
      isOpen={clientModal.isOpen}
      title="Add a New Client"
      onClose={onClose}
    >
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-y-4 mb-6">
            {/* RUT */}
            <FormInput
              control={control}
              name="RUT"
              label="RUT"
              required
              disabled={loading}
            />

            {/* name */}
            <FormInput
              control={control}
              name="name"
              label="Name"
              required
              disabled={loading}
            />

            {/* lastName */}
            <FormInput
              control={control}
              name="lastName"
              label="Last Name"
              required
              disabled={loading}
            />

            {/* telephone */}
            <FormInput
              control={control}
              name="telephone"
              label="Telephone"
              type="number"
              required
              disabled={loading}
            />

            {/* city */}
            <FormInput
              control={control}
              name="city"
              label="City"
              required
              disabled={loading}
            />

            {/* street */}
            <FormInput
              control={control}
              name="street"
              label="Street"
              required
              disabled={loading}
            />

            {/* number */}
            <FormInput
              control={control}
              name="number"
              label="Number"
              type="number"
              required
              disabled={loading}
            />

            {/* commune */}
            <FormInput
              control={control}
              name="commune"
              label="Commune"
              type="number"
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
