"use client";
import { FormEvent } from "react";
import Link from "next/link";

export default function SignIn() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert("submit");
  };

  return (
    <section>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Nombre" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Ingresar</button>
      </form>
      <div>
        <Link href="/">Inicio</Link>
        <Link href="/auth/signup">Registrarse</Link>
      </div>
    </section>
  );
}
