"use client";
import { FormEvent, useState } from "react";

export const GuestForm = () => {
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
        <button type="submit">Ingresar como invitado</button>
    </form>
  )
}
