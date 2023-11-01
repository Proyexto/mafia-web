"use client";
import { FormEvent } from "react";
import Link from "next/link";
import { ForgotForm } from "@/components";

export default function SignUp() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert("submit");
  };

  return (
    <section>
      <ForgotForm/>
      <nav>
        <Link href="/">Inicio</Link>
        <Link href="/auth/signin">Ingresar</Link>
      </nav>
    </section>
  );
}
