import { FormEvent, useEffect, useState } from "react";
import { FormGuest } from "@/components/formGuest";
import { getPics } from "@/services";
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
