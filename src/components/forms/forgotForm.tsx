"use client";
import { FormEvent, useState } from "react";

export const ForgotForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert("submit");
  };

  return (
    <form onSubmit={onSubmit}>
        <input type="text" placeholder="Nombre" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Recuperar</button>
    </form>
  )
}
