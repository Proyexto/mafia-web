"use client";

/* Utils */
import { useState } from "react";

/* Components */
import Link from "next/link";
import Image from "next/image";

/* Styles */
import style from "./style.module.scss";

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
              <li>
                <Link href="/settings">Configuración</Link>
              </li>
              <li>
                <Link href="/auth/logout">Salir</Link>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </nav>
  );
};
