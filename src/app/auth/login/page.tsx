"use client";

import { FormEvent } from "react";
import style from "./style.module.scss";

export const Login = () => {
  const onSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <section className={style.loginContainer}>
      <h1>Login</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <input type="text" placeholder="Usuario / Email" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Login;
