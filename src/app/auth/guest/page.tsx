/* Utils */
import { FormEvent, useEffect, useState } from "react";
import { getPics } from "@/services";

/* Components */
import { FormGuest } from "@/components/formGuest";

/* Styles */
import style from "./style.module.scss";

export const Guest = async () => {
  const listPics = await getPics();

  return (
    <section className={style.guessContainer}>
      <h1>Ingresar como invitado</h1>
      <FormGuest listPics={listPics} />
    </section>
  );
};

export default Guest;
