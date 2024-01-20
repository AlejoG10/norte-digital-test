"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import { useLoginModal } from "@/hooks/useLoginModal";
import { LoginFormSchema } from "@/schemas";
import { admins } from "@/data";
import Modal from "./modal";
import { Form } from "@/components/ui/form";
import FormInput from "@/components/form/form-input";
import { Button } from "@/components/ui/button";
import AuthError from "@/components/form/auth-error";
import { useAuth } from "@/hooks/useAuth";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const auth = useAuth();
  const [authError, setAuthError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { control, handleSubmit } = form;

  const onClose = () => {
    loginModal.onClose();
    form.reset();
  };

  const onSubmit = (values: z.infer<typeof LoginFormSchema>) => {
    setLoading(true);

    const { username, password } = values;

    const admin = admins.find(
      (admin) => admin.username === username && admin.password === password
    );

    if (!admin) {
      setAuthError(true);
      setLoading(false);
      return;
    }

    onClose();
    toast.success("Logged in!");

    setAuthError(false);
    setLoading(false);

    auth.onLogin();

    router.push("/dashboard/new-sale");
  };

  return (
    <Modal title="Welcome back!" isOpen={loginModal.isOpen} onClose={onClose}>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-y-4 mb-6">
            {/* username */}
            <FormInput
              control={control}
              name="username"
              label="Username"
              required
              disabled={loading}
            />

            {/* password */}
            <FormInput
              control={control}
              name="password"
              label="Password"
              type="password"
              required
              disabled={loading}
            />
          </div>

          <div className="flex flex-col gap-y-4">
            {authError && <AuthError />}

            <Button
              type="submit"
              className="bg-sky-500 hover:bg-sky-600 w-full"
            >
              Login
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
};

export default LoginModal;
