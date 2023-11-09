"use client";
import axios from "axios";
import { FormEvent, useState } from "react";

export const SignInForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios.post("/api/auth/signin", form).then((response) => {
      console.log(response.data)
      alert("ingreso")
    }).catch((error) => {
      if(error.response.status === 401){
        alert("Usuario o contraseña incorrectos");
      }
      else{
        alert("Error desconocido");
      }
    });
  };

  const onChange = (event: FormEvent<HTMLInputElement>) => {
    setForm({...form, [event.currentTarget.name]: event.currentTarget.value});
  }

  return (
    <form onSubmit={onSubmit}>
        <input type="text" name="email" value={form.email} onChange={onChange} placeholder="Nombre" />
        <input type="password" name="password" value={form.password} onChange={onChange} placeholder="Contraseña" />
        <button type="submit">Ingresar</button>
    </form>
  )
}
