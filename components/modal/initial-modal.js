"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import '../../app/globals.css';
import * as z from "zod";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Field,
  FieldLabel,
  FieldError,
  FieldGroup,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Validation Schema
const formSchema = z.object({
  name: z
    .string()
    .min(1, "Server name is required.")
    .max(32, "Server name is too long."),
});

export const InitialModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("UI Mock Submit:", values);

      form.reset();
      setIsOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Create a Server</Button>
      </DialogTrigger>

      <DialogContent className="bg-white text-black p-0 overflow-hidden border-none shadow-2xl">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold text-zinc-800">
            Customize your server
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            Give your new server a personality with a name. You can always change it later.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-8 px-6">
            <div className="flex items-center justify-center text-center">
              <div className="w-20 h-20 bg-zinc-200 rounded-full flex items-center justify-center border-2 border-dashed border-zinc-400 text-zinc-500 cursor-pointer hover:bg-zinc-300 transition">
                Img
              </div>
            </div>

            <FieldGroup>
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel className="uppercase text-xs font-bold text-zinc-500">
                      Server Name
                    </FieldLabel>

                    <Input
                      {...field}
                      disabled={isLoading}
                      placeholder="Enter server name"
                      className="bg-zinc-200 border-0 focus-visible:ring-0 text-black placeholder:text-zinc-400"
                    />

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
          </div>

          <DialogFooter className="bg-gray-100 px-6 py-4">
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full md:w-auto bg-indigo-500 text-white hover:bg-indigo-600 transition"
            >
              {isLoading ? "Creating..." : "Create"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};