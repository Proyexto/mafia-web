"use client";
import { FormEvent } from "react";
import { ForgotGetForm, MainLayout } from "@/components";

export default function Forgot() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert("submit");
  };

  return (
    <MainLayout className="flex justify-center items-center">
      <ForgotGetForm/>
    </MainLayout>
  );
}
