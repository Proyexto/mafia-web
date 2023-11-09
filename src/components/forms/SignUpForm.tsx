"use client";
import { Image } from "@/types";
import axios from "axios";
import { FormEvent, useState } from "react";

type Props = {
  images: Image[];
}

export const SignUpForm = ({images}: Props) => {
  const [form, setForm] = useState({
    id_img: images[0],
    email: "",
    username: "",
    pass: "",
    confirmPass: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(form.pass === form.confirmPass){
      axios.post("/api/auth/signup", form).then(res =>{
      alert("creado")
    }).catch((error) => {
        if(error.response.status === 409){
          alert("El usuario ya existe");
        }
        else{
          alert("Error desconocido");
        }
      });
    }
    else alert("contraseñas distintas");
  };

  const handleChangeImage = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const index = images.findIndex((image) => image.id === form.id_img.id);
    if(index === images.length - 1){
      setForm({...form, id_img: images[0]});
    }
    else{
      setForm({...form, id_img: images[index + 1]});
    }
  }

  const onChange = (event: FormEvent<HTMLInputElement>) => {
    setForm({...form, [event.currentTarget.name]: event.currentTarget.value});
  }

  return (
    <form onSubmit={onSubmit}>
        <img src={form.id_img.URL} alt="Profile-Image" />
        <button onClick={handleChangeImage}>cambiar</button>
        <input type="hidden" name="id_img" value={form.id_img.id} onChange={onChange} />
        <input type="text" name="email" value={form.email} onChange={onChange}placeholder="Email" />
        <input type="text" name="username" value={form.username} onChange={onChange}placeholder="Usuario" />
        <input type="password" name="pass" value={form.pass} onChange={onChange}placeholder="Contraseña" />
        <input type="password" name="confirmPass" value={form.confirmPass} onChange={onChange} placeholder="Confirmar contraseña" />
        <button type="submit">Registrarse</button>
    </form>
  )
}
