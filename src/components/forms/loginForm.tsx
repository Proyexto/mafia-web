"use client";
import { FormEvent, useState } from "react";

export const LoginForm = () => {
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
        <button type="submit">Ingresar</button>
    </form>
  )
}
