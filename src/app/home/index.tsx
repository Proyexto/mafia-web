"use client";

import { FormEvent } from "react";
import routes from "@/routes.json";
import style from "./style.module.scss";
import { useRouter } from "next/navigation";

export const Home = () => {
  const { push } = useRouter();

  const onSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();

    // something...

    push(routes.auth);
  };
  return (
    <section className={style.homeContainer}>
      <h1>Mafia Web</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <input type="text" placeholder="Código de Sala" />
        <button>Ingresar</button>
      </form>
    </section>
  );
};
