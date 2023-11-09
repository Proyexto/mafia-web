"use client";
import { FormEvent } from "react";
import { GuestForm, MainLayout } from "@/components";

export default function Guest() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert("submit");
  };

  return (
    <MainLayout className="flex justify-center items-center">
      <GuestForm/>
    </MainLayout>
  );
}
