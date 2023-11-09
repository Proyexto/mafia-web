"use client";
import axios from "axios";
import { FormEvent, useState } from "react";

export const ForgotGetForm = () => {
  const [form, setForm] = useState({
    email: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    
    axios.post("/api/auth/forgot", form).then((response) => {
      console.log(response.data)
    }).catch((error) => {
      console.log(error.response.data)
    });
  };

  const onChange = (event: FormEvent<HTMLInputElement>) => {
    setForm({...form, [event.currentTarget.name]: event.currentTarget.value});
  }

  return (
    <form onSubmit={onSubmit}>
        <input type="text" name="email" value={form.email} onChange={onChange} placeholder="Email" />
        <button type="submit">Recuperar</button>
    </form>
  )
}
