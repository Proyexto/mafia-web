/* Utils */
import { FormEvent, useEffect, useState } from "react";
import { getPics } from "@/services";

/* Components */
import { FormGuest } from "@/components/formGuest";

/* Styles */
import style from "./style.module.scss";

export const Coso = async () => {
  const listPics = await getPics();

  return (
    <section className={style.authSection}>
      <div id="formGuest">
        <h1>Ingresar como invitado</h1>
        <FormGuest listPics={listPics} />
      </div>
      <div id="formLogin">
        <h1>Ingresar con Cuenta</h1>
      </div>
      <div id="gameCode">
        <b>4a31B</b>
        <span>Código de Sala</span>
      </div>
    </section>
  );
};

export default Coso;
