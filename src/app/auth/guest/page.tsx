"use client";
import { FormEvent } from "react";
import Link from "next/link";
import { GuestForm } from "@/components";

export default function Guest() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert("submit");
  };

  return (
    <section>
      <GuestForm/>
      <div>
        <Link href="/auth/signin">Ingresar</Link>
        <Link href="/auth/signup">Registrarse</Link>
      </div>
    </section>
  );
}
