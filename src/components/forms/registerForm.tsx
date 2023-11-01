"use client";
import { FormEvent, useState } from "react";

export const RegisterForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
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
        <input type="text" name="email" value={form.email} onChange={onChange}placeholder="Email" />
        <input type="password" name="password" value={form.password} onChange={onChange}placeholder="Contraseña" />
        <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={onChange} placeholder="Confirmar contraseña" />
        <button type="submit">Registrarse</button>
    </form>
  )
}
