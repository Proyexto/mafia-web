import Link from "next/link";
import routes from "@/const/routes.json";
import style from "./style.module.scss";

export const Home = () => {
  return (
    <section className={style.homeContainer}>
      <h1>Mafia Web</h1>
      <form>
        <input type="text" placeholder="Código de Sala" />
        <button>Ingresar</button>
      </form>
    </section>
  );
};
