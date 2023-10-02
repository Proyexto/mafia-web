"use client";

import { useState } from "react";
import style from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  const [showProfileMenu, SetOnClickProfile] = useState(false);
  const onClickProfile = () => {
    SetOnClickProfile(!showProfileMenu);
  };
  return (
    <nav className={style.navbar}>
      <Link href="/">
        <Image
          src="/img/logo.png"
          width={500}
          height={500}
          alt="Logo"
          id="logo"
        />
      </Link>
      <div id="profileContainer">
        <div id="profile-details" onClick={() => onClickProfile()}>
          <span>Eugenio Manolo</span>
          <figure>
            <Image
              src="/img/pfp-default.webp"
              width={200}
              height={200}
              alt="Profile-Picture"
              id="profile-picture"
            />
            <span>Invitado</span>
          </figure>
        </div>
        {showProfileMenu ? (
          <div id="profile-menu" onClick={(e) => e.stopPropagation()}>
            <ul>
              <li>Configuración</li>
              <li>Salir</li>
            </ul>
          </div>
        ) : null}
      </div>
    </nav>
  );
};
