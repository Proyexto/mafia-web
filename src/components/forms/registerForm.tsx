"use client";
import axios from "axios";
import { FormEvent, useState } from "react";

export const RegisterForm = () => {
  const [form, setForm] = useState({
    email: "",
    username: "",
    pass: "",
    confirmPass: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(form.pass === form.confirmPass){
      axios.post("/api/auth/register", form);
      alert("creado");
    }
    else alert("contraseñas distintas");
  };

  const onChange = (event: FormEvent<HTMLInputElement>) => {
    setForm({...form, [event.currentTarget.name]: event.currentTarget.value});
  }

  return (
    <form onSubmit={onSubmit}>
        <input type="text" name="email" value={form.email} onChange={onChange}placeholder="Email" />
        <input type="text" name="username" value={form.username} onChange={onChange}placeholder="Usuario" />
        <input type="password" name="pass" value={form.pass} onChange={onChange}placeholder="Contraseña" />
        <input type="password" name="confirmPass" value={form.confirmPass} onChange={onChange} placeholder="Confirmar contraseña" />
        <button type="submit">Registrarse</button>
    </form>
  )
}
