"use client";

/* Utils */
import { FormEvent, useState } from "react";
// import Image from "next/image";

export const FormLogin = () => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("submit");
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input type="text" placeholder="Usuario" />
      <input type="text" placeholder="Contraseña" />
      <button type="submit">Ingresar</button>
    </form>
  );
};
