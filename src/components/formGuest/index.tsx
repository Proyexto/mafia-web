"use client";

import { FormEvent, useState } from "react";
import { Pic } from "@/types";
import Image from "next/image";

interface Props {
  listPics: Pic[];
}

export const FormGuest = ({ listPics }: Props) => {
  const [indexPic, setIndexPic] = useState(1);
  const [guestForm, setGuestForm] = useState({
    pic: listPics[indexPic].download_url,
    user: "",
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("submit");
  };

  const changePic = () => {
    setIndexPic(indexPic + 1);
    setGuestForm({ ...guestForm, pic: listPics[indexPic].download_url });
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <img src={guestForm.pic} alt={listPics[indexPic].author} />
      <button type="button" onClick={() => changePic()}>
        Cambiar
      </button>
      <input type="hidden" value={guestForm.pic} />
      <input type="text" placeholder="Usuario" />
      <button type="submit">Ingresar</button>
    </form>
  );
};
