"use client";
import { FormEvent } from "react";
import Link from "next/link";
import { ForgotGetForm } from "@/components";

export default function Forgot() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert("submit");
  };

  return (
    <section>
      <ForgotGetForm/>
      <nav>
        <Link href="/">Inicio</Link>
        <Link href="/auth/signin">Ingresar</Link>
      </nav>
    </section>
  );
}
