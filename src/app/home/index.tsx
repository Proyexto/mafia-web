"use client";

/* Utils */
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import routes from "@/routes.json";

/* Styles */
import style from "./style.module.scss";

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
