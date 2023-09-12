"use client";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const sendFormSchema = z.object({
  address: z.string().length(62),
  value: z.string().refine((val) => !isNaN(Number(val))),
});

type SendFormValues = z.infer<typeof sendFormSchema>;

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SendFormValues>({
    resolver: zodResolver(sendFormSchema),
  });

  function handleValueChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.value = event.target.value.replace(/[^0-9]/g, "");
  }

  function send(data: SendFormValues) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(send)} className="flex flex-col">
      <label className="mt-2" htmlFor="address">
        Address
      </label>
      <Input id="address" {...register("address")} />
      {errors.address && (
        <p className="text-xs text-red-500">{errors.address.message}</p>
      )}

      <label className="mt-2" htmlFor="value">
        Value
      </label>
      <Input
        id="value"
        {...register("value", { onChange: handleValueChange })}
      />
      {errors.value && (
        <p className="text-xs text-red-500">{errors.value.message}</p>
      )}

      <Button className="mt-4" type="submit">
        Send
      </Button>
    </form>
  );
}
