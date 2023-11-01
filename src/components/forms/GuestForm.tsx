"use client";
import { FormEvent, useState } from "react";

export const GuestForm = () => {
  const [form, setForm] = useState({
    name: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert("submit");
  };

  const onChange = (event: FormEvent<HTMLInputElement>) => {
    setForm({...form, [event.currentTarget.name]: event.currentTarget.value});
  }

  return (
    <form onSubmit={onSubmit}>
        <input type="text" name="name" value={form.name} onChange={onChange} placeholder="Nombre" />
        <button type="submit">Ingresar como invitado</button>
    </form>
  )
}
