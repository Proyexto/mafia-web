"use client";
import { FormEvent } from "react";
import Link from "next/link";

export default function Home() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert("submit");
  };

  return (
    <section>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Nombre" />
        <button type="submit">Ingresar como invitado</button>
      </form>
      <div>
        <Link href="/auth/signin">Ingresar</Link>
        <Link href="/auth/signup">Registrarse</Link>
      </div>
    </section>
  );
}
