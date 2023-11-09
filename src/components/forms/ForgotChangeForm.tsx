"use client";
import axios from "axios";
import { FormEvent, useState } from "react";

export const ForgotChangeForm = ({token}: {token: string}) => {
  const [form, setForm] = useState({
    newPass: "",
    confirmNewPass: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (form.newPass !== form.confirmNewPass) {
      alert("Las contraseñas no coinciden");
      return;
    }

    axios.post("/api/auth/forgot/" + token, form).then((response) => {
      alert(response.data.message)
    }).catch((error) => {
      console.log(error.response.data)
    });
  };

  const onChange = (event: FormEvent<HTMLInputElement>) => {
    setForm({...form, [event.currentTarget.name]: event.currentTarget.value});
  }

  return (
    <form onSubmit={onSubmit}>
        <input type="password" name="newPass" value={form.newPass} onChange={onChange} placeholder="Nueva contraseña" />
        <input type="password" name="confirmNewPass" value={form.confirmNewPass} onChange={onChange} placeholder="Confirme nueva contraseña" />
        <button type="submit">Recuperar</button>
    </form>
  )
}
