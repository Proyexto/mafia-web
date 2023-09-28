import Link from "next/link";
import routes from "@/const/routes.json";
import style from "./style.module.scss";

export const Home = () => {
  return (
    <section className={style.homeContainer}>
      <h1>Mafia web</h1>
      <Link href={routes.guest}>Ingrear como Invitado</Link>
      <Link href={routes.register}>Iniciar sesion</Link>
      <Link href={routes.register}>Crear cuenta</Link>
    </section>
  );
};
