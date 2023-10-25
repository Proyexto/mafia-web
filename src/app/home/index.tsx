"use client";

/* Utils */
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import routes from "@/routes.json";
import { CookiesProvider, useCookies } from "react-cookie";

/* Styles */
import style from "./style.module.scss";

export const Home = () => {
  const { push } = useRouter();
  const [cookies, setCookie] = useCookies(["user"]);
  setCookie("user", "a", { path: "/" });
  console.log(cookies);

  const onSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();

    // something...

    setCookie("user", "a", { path: "/" });
    push(routes.auth);
  };
  return (
    <CookiesProvider>
      <section className={style.homeContainer}>
        <h1>Mafia Web</h1>
        <form onSubmit={(e) => onSubmit(e)}>
          <input type="text" placeholder="Código de Sala" />
          <button>Ingresar</button>
        </form>
      </section>
    </CookiesProvider>
  );
};
