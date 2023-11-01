"use client";
import { FormEvent } from "react";
import Link from "next/link";

export default function SignUp() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert("submit");
  };

  return (
    <section>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Nombre" />
        <input type="password" placeholder="Contraseña" />
        <input type="password" placeholder="Confirmar contraseña" />
        <button type="submit">Registrarse</button>
      </form>
      <div>
        <Link href="/">Inicio</Link>
        <Link href="/auth/signin">Ingresar</Link>
      </div>
    </section>
  );
}
